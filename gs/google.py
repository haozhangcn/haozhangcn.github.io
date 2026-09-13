import json
import os
import time
from datetime import datetime, timezone

from scholarly import ProxyGenerator, scholarly


MAX_ATTEMPTS = 10
WAIT_SECONDS = 120
AUTHOR_SECTIONS = ["basics", "indices", "counts", "publications"]


def fetch_author():
    scholar_id = os.environ["GOOGLE_SCHOLAR_ID"]
    last_error = None

    for attempt in range(1, MAX_ATTEMPTS + 1):
        try:
            print(f"Attempt {attempt}/{MAX_ATTEMPTS}", flush=True)

            proxy = ProxyGenerator()
            proxy.FreeProxies()
            scholarly.use_proxy(proxy)

            author = scholarly.search_author_id(scholar_id)
            author = scholarly.fill(author, sections=AUTHOR_SECTIONS)
            print(f"Attempt {attempt} succeeded", flush=True)
            return author
        except Exception as error:
            last_error = error
            print(f"Attempt {attempt} failed: {error!r}", flush=True)
            if attempt < MAX_ATTEMPTS:
                time.sleep(WAIT_SECONDS)

    raise RuntimeError(
        f"Unable to fetch Google Scholar data after {MAX_ATTEMPTS} attempts"
    ) from last_error


def write_json(path, data):
    with open(path, "w", encoding="utf-8") as output:
        json.dump(data, output, ensure_ascii=False)


author = fetch_author()
author["updated"] = datetime.now(timezone.utc).isoformat()
author["publications"] = {
    publication["author_pub_id"]: publication
    for publication in author["publications"]
}
print(json.dumps(author, indent=2, ensure_ascii=False))

os.makedirs("results/pubs", exist_ok=True)

write_json("results/gs.json", author)
write_json(
    "results/citation.json",
    {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(author["citedby"]),
    },
)
write_json(
    "results/h.json",
    {
        "schemaVersion": 1,
        "label": "hindex",
        "message": str(author["hindex"]),
    },
)

for publication in author["publications"].values():
    publication_id = publication["author_pub_id"]
    print(publication_id)
    write_json(
        f"results/pubs/{publication_id}.json",
        {
            "schemaVersion": 1,
            "label": "citations",
            "message": str(publication["num_citations"]),
        },
    )
