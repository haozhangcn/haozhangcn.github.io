from scholarly import scholarly
import jsonpickle
import json
from datetime import datetime
import os

author: dict = scholarly.search_author_id(os.environ['GOOGLE_SCHOLAR_ID'])
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

# generated citations for publications
os.makedirs('results/pubs/', exist_ok=True)

for pub in author['publications']:
    citation_data = {
      "schemaVersion": 1,
      "label": "citations",
      "message": f"{author['publications'][pub]['num_citations']}",
    }
    name = author['publications'][pub]['author_pub_id']
    print(name)
    with open(f'results/pubs/' + name + '.json', 'w') as outfile:
        json.dump(citation_data, outfile, ensure_ascii=False)

