# Citation updater

The updater fetches Google Scholar statistics and writes the existing `gs.json`,
`citation.json`, `h.json`, and `pubs/*.json` formats. Only a successful run on
`main` publishes the data. Failed fetches do not overwrite the `gs` branch.

## Connectivity

The November 14 live test confirmed that direct requests timed out and a free
proxy initialized successfully but could not fetch the Scholar author profile.
This does not identify the exact HTTP response or prove a particular blocking
mechanism. A proxy being reachable is not proof that it can reach Scholar.

To use an existing HTTP/HTTPS proxy that supports Google Scholar, add the
repository Actions secret `GOOGLE_SCHOLAR_PROXY`, containing the full proxy URL
(e.g. `http://username:password@proxy-host:port`). Keep credentials in Secrets,
not in source files. The existing `GOOGLE_SCHOLAR_ID` secret is still required.
No service is purchased or provisioned by this change.

When configured, attempts use the configured proxy, direct access, then a free
proxy. Otherwise the sequence remains direct, free proxy, direct. Each attempt
has a 120-second process timeout. A configured-proxy failure is sanitized to
avoid printing credentials. Failed runs remain failures; old data is not
represented as newly fetched data.

## Testing

Run `python -m unittest discover -s gs -v` for offline regression tests.
PRs and relevant branch pushes run these tests without contacting Scholar.
For a live test, use Actions > Citation > Run workflow and select the
`fix/citation-fetch-reliability` branch (or the branch containing this change).
Only `main` publishes; a branch dispatch validates fetching and output creation.

Twelve regression tests pass locally. The earlier live test failed:
https://github.com/haozhangcn/haozhangcn.github.io/actions/runs/43571462530
Live success with a configured proxy has not yet been verified. Do not treat
passing offline tests as proof that citation updates have resumed.
