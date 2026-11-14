"""Fetch citation data without making free-proxy availability a prerequisite."""
import json
import logging
import os
from pathlib import Path
import re
import subprocess
import sys
import tempfile
import time
from datetime import datetime, timezone

AUTHOR_SECTIONS = ["basics", "indices", "counts", "publications"]
ATTEMPT_MODES = ("direct", "free-proxy", "direct")
ATTEMPT_TIMEOUT = 120
WAIT_SECONDS = 10


def validate_author(author):
    for field in ("citedby", "hindex"):
        if type(author.get(field)) is not int or author[field] < 0:
            raise ValueError(f"Missing or invalid {field}")
    if not isinstance(author.get("publications"), list):
        raise ValueError("Missing publications list")
    seen = set()
    for publication in author["publications"]:
        pub_id = publication.get("author_pub_id", "")
        if not re.fullmatch(r"[A-Za-z0-9_-]+:[A-Za-z0-9_-]+", pub_id):
            raise ValueError("Invalid publication ID")
        if pub_id in seen:
            raise ValueError("Duplicate publication ID")
        seen.add(pub_id)
        count = publication.get("num_citations")
        if type(count) is not int or count < 0:
            raise ValueError("Invalid publication citation count")
    return author


def fetch_once(mode, scholar_id):
    # Import only in the worker: each attempt gets fresh scholarly sessions.
    from scholarly import ProxyGenerator, scholarly

    if mode == "configured-proxy":
        # scholarly logs proxy URLs, which may contain credentials.
        logging.getLogger("scholarly").disabled = True
    proxy = ProxyGenerator()
    if mode == "configured-proxy":
        print("Stage: initialize configured proxy", flush=True)
        url = os.environ["GOOGLE_SCHOLAR_PROXY"].strip()
        if not proxy.SingleProxy(http=url, https=url):
            raise RuntimeError("Configured proxy could not be initialized")
    if mode == "free-proxy":
        print("Stage: initialize free proxy", flush=True)
        if not proxy.FreeProxies(timeout=1, wait_time=10):
            raise RuntimeError("Free-proxy initialization failed")
    # Omitting the secondary generator makes scholarly fetch free proxies again,
    # even when the primary generator is configured for a direct connection.
    scholarly.use_proxy(proxy, proxy)
    scholarly.set_timeout(20)
    scholarly.set_retries(2)
    print("Stage: fetch author profile", flush=True)
    author = scholarly.search_author_id(scholar_id)
    print("Stage: fill citation counts and publications", flush=True)
    return validate_author(scholarly.fill(author, sections=AUTHOR_SECTIONS))


def fetch_author(scholar_id):
    errors = []
    modes = (("configured-proxy", "direct", "free-proxy")
             if os.environ.get("GOOGLE_SCHOLAR_PROXY", "").strip() else ATTEMPT_MODES)
    for attempt, mode in enumerate(modes, 1):
        print(f"Attempt {attempt}/{len(modes)} ({mode})", flush=True)
        # scholarly can loop on 403/CAPTCHA despite set_retries(). A separate
        # process imposes a wall-clock limit, including proxy discovery.
        with tempfile.TemporaryDirectory() as tmp:
            destination = Path(tmp) / "author.json"
            try:
                subprocess.run(
                    [sys.executable, str(Path(__file__).resolve()),
                     "--worker", mode, str(destination)],
                    env={**os.environ, "GOOGLE_SCHOLAR_ID": scholar_id},
                    check=True, timeout=ATTEMPT_TIMEOUT,
                )
                author = validate_author(json.loads(destination.read_text()))
                print(f"Attempt {attempt} succeeded ({mode})", flush=True)
                return author
            except (subprocess.TimeoutExpired, subprocess.CalledProcessError,
                    OSError, ValueError) as error:
                detail = f"{mode}: {type(error).__name__}: {error}"
                errors.append(detail)
                print(f"Attempt {attempt} failed: {detail}", flush=True)
        if attempt < len(modes):
            time.sleep(WAIT_SECONDS)
    raise RuntimeError("Google Scholar fetch failed; existing published data is unchanged. "
                       + " | ".join(errors))


def write_json(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")


def write_results(author, output):
    # Validate every publication before touching any existing output.
    validate_author(author)
    author = {**author, "updated": datetime.now(timezone.utc).isoformat(),
              "publications": {p["author_pub_id"]: p for p in author["publications"]}}
    (output / "pubs").mkdir(parents=True, exist_ok=True)
    write_json(output / "gs.json", author)
    for filename, label, count in (("citation.json", "citations", author["citedby"]),
                                   ("h.json", "hindex", author["hindex"])):
        write_json(output / filename,
                   {"schemaVersion": 1, "label": label, "message": str(count)})
    for pub_id, publication in author["publications"].items():
        write_json(output / "pubs" / f"{pub_id}.json",
                   {"schemaVersion": 1, "label": "citations",
                    "message": str(publication["num_citations"])})


def main():
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", "").strip()
    if not scholar_id:
        raise ValueError("GOOGLE_SCHOLAR_ID must be configured")
    if len(sys.argv) > 1 and sys.argv[1] == "--worker":
        mode = sys.argv[2]
        try:
            author = fetch_once(mode, scholar_id)
        except Exception:
            if mode == "configured-proxy":
                # Do not expose credential-bearing URLs from third-party errors.
                raise RuntimeError("Configured proxy could not fetch Scholar data; "
                                   "check proxy connectivity and credentials") from None
            raise
        write_json(Path(sys.argv[3]), author)
    else:
        write_results(fetch_author(scholar_id), Path("results"))


if __name__ == "__main__":
    main()
