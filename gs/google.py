from scholarly import scholarly
import jsonpickle
import json
from datetime import datetime
import os

GOOGLE_SCHOLAR_ID = 'zs9DkEAAAAAJ'
author: dict = scholarly.search_author_id(GOOGLE_SCHOLAR_ID)
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
name = author['name']
author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
print(json.dumps(author, indent=2))

os.makedirs('results', exist_ok=True)

with open(f'results/gs.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

citation_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(f'results/citation.json', 'w') as outfile:
    json.dump(citation_data, outfile, ensure_ascii=False)

h_data = {
  "schemaVersion": 1,
  "label": "hindex",
  "message": f"{author['hindex']}",
}
with open(f'results/h.json', 'w') as outfile:
    json.dump(h_data, outfile, ensure_ascii=False)
