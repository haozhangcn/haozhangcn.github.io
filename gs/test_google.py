import copy
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import types
import unittest
from unittest.mock import Mock, patch

import google

AUTHOR = {"citedby": 1074, "hindex": 19, "publications": [
    {"author_pub_id": "author:paper", "num_citations": 42}]}


def success(command, **kwargs):
    Path(command[-1]).write_text(json.dumps(AUTHOR))


class CitationTests(unittest.TestCase):
    def test_direct_success_does_not_retry(self):
        with patch.object(google.subprocess, "run", side_effect=success) as run:
            self.assertEqual(google.fetch_author("author"), AUTHOR)
        self.assertEqual(run.call_count, 1)
        self.assertEqual(run.call_args.args[0][-2], "direct")
        self.assertEqual(run.call_args.kwargs["timeout"], 120)

    def test_timeout_falls_back_to_proxy(self):
        calls = []
        def run(command, **kwargs):
            calls.append(command[-2])
            if len(calls) == 1:
                raise subprocess.TimeoutExpired(command, 120)
            success(command)
        with patch.object(google.subprocess, "run", side_effect=run), patch.object(google.time, "sleep"):
            self.assertEqual(google.fetch_author("author"), AUTHOR)
        self.assertEqual(calls, ["direct", "free-proxy"])

    def test_bad_payload_retries(self):
        calls = []
        def run(command, **kwargs):
            calls.append(command)
            Path(command[-1]).write_text('{}' if len(calls) == 1 else json.dumps(AUTHOR))
        with patch.object(google.subprocess, "run", side_effect=run), patch.object(google.time, "sleep"):
            self.assertEqual(google.fetch_author("author"), AUTHOR)
        self.assertEqual(len(calls), 2)

    def test_total_failure_preserves_previous_data(self):
        with tempfile.TemporaryDirectory() as tmp:
            old = Path.cwd()
            try:
                os.chdir(tmp)
                Path("results").mkdir()
                Path("results/gs.json").write_text('previous data')
                with patch.dict(os.environ, GOOGLE_SCHOLAR_ID="author"), patch.object(sys, "argv", ["google.py"]), \
                     patch.object(google.subprocess, "run", side_effect=subprocess.CalledProcessError(1, "worker")) as run, \
                     patch.object(google.time, "sleep"):
                    with self.assertRaisesRegex(RuntimeError, "unchanged"):
                        google.main()
                self.assertEqual(run.call_count, 3)
                self.assertEqual(Path("results/gs.json").read_text(), 'previous data')
            finally:
                os.chdir(old)

    def test_worker_configures_both_connections(self):
        for mode in ("direct", "free-proxy"):
            with self.subTest(mode=mode):
                client, proxy = Mock(), Mock()
                client.fill.return_value = copy.deepcopy(AUTHOR)
                module = types.SimpleNamespace(scholarly=client, ProxyGenerator=Mock(return_value=proxy))
                with patch.dict(sys.modules, scholarly=module):
                    self.assertEqual(google.fetch_once(mode, "author"), AUTHOR)
                client.use_proxy.assert_called_once_with(proxy, proxy)
                self.assertEqual(proxy.FreeProxies.call_count, int(mode == "free-proxy"))

    def test_output_contract(self):
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp)
            google.write_results(copy.deepcopy(AUTHOR), output)
            data = json.loads((output / "gs.json").read_text())
            self.assertIn("updated", data)
            self.assertEqual(data["publications"]["author:paper"]["num_citations"], 42)
            for path, count in (("citation.json", "1074"), ("h.json", "19"), ("pubs/author:paper.json", "42")):
                self.assertEqual(json.loads((output / path).read_text())["message"], count)

    def test_invalid_data_does_not_touch_output(self):
        for bad in ({}, {**AUTHOR, "citedby": -1},
                    {**AUTHOR, "publications": [{"author_pub_id": "../../escape", "num_citations": 1}]}):
            with tempfile.TemporaryDirectory() as tmp:
                output = Path(tmp) / "results"
                with self.assertRaises(ValueError):
                    google.write_results(bad, output)
                self.assertFalse(output.exists())

    def test_missing_id_fails_before_fetch(self):
        with patch.dict(os.environ, GOOGLE_SCHOLAR_ID=""), patch.object(google, "fetch_author") as fetch:
            with self.assertRaisesRegex(ValueError, "GOOGLE_SCHOLAR_ID"):
                google.main()
            fetch.assert_not_called()


if __name__ == "__main__":
    unittest.main()
