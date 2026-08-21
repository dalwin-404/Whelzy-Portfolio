import re

# The new files
fc_files = [
    "addidas.jpeg", "bag.jpeg", "butterfly.jpeg", "concept denim jacket.jpeg", 
    "concept nike X ovo.jpeg", "concept shoe.jpeg", "hand.jpeg", "iceman.jpeg", 
    "jackets.jpeg", "jean-trousers.jpeg", "loius vulton.jpeg", "mule.jpeg", 
    "sketch.jpeg", "trousers.jpeg"
]

fd_files = [
    "2-cross.jpeg", "brand-short.jpeg", "brown-capsw.jpeg", "cross.jpeg", 
    "four-black.jpeg", "four-caps.jpeg", "joggers.jpeg", "marrucio.jpeg", 
    "retro.jpeg", "sturdy-cap.jpeg", "sturdy.jpeg", "sturdy2.jpeg", 
    "the knockout.jpeg", "three-jackets.jpeg", "two-short.jpeg", "two-trousers.jpeg"
]

jj_files = [
    "Argentina1.jpeg", "Argetina2.jpeg", "Argentina3.jpeg", 
    "brazil1.jpeg", "brazil2.jpeg", "brazil3.jpeg", 
    "Port1.jpeg", "port2.jpeg", "port3.jpeg", 
    "spain1.jpeg", "spain2.jpeg", "spain3.jpeg"
]

def capitalize_title(filename):
    name = filename.replace('.jpeg', '')
    if name == 'concept nike X ovo': return 'Nike X OVO'
    if name == 'concept shoe': return 'Concept Shoe'
    if name == 'concept denim jacket': return 'Denim Jacket'
    if name == 'loius vulton': return 'Louis Vuitton'
    return name.replace('-', ' ').title()

# 1. GENERATE collectionsData.ts array
collections_str = "export const allCollectionsData = [\n  // --- USER'S TOP 9 SELECTED WORKS ---\n"
top_9 = [
    ('sel1', 'Fashion Concept', 'Bag Concept', '/images/fashion-concept/bag.jpeg'),
    ('sel2', 'Fashion Concept', 'Denim Jacket', '/images/fashion-concept/concept denim jacket.jpeg'),
    ('sel3', 'Fashion Concept', 'Louis Vuitton', '/images/fashion-concept/loius vulton.jpeg'),
    ('sel4', 'Fashion Concept', 'Jean Trousers', '/images/fashion-concept/jean-trousers.jpeg'),
    ('sel5', 'Fashion Concept', 'Jackets', '/images/fashion-concept/jackets.jpeg'),
    ('sel6', 'Fashion Concept', 'Mule', '/images/fashion-concept/mule.jpeg'),
    ('sel7', 'Fashion Concept', 'Sketch', '/images/fashion-concept/sketch.jpeg'),
    ('sel8', 'Commissioned Work', 'Two Trousers', '/images/fashion-design/two-trousers.jpeg'),
    ('sel9', 'Commissioned Work', 'Three Jackets', '/images/fashion-design/three-jackets.jpeg'),
]
for t in top_9:
    collections_str += f"  {{ id: '{t[0]}', category: '{t[1]}', title: '{t[2]}', image: '{t[3]}' }},\n"

collections_str += "\n  // --- Fashion Concept ---\n"
fc_id = 1
for f in fc_files:
    if f not in [x[3].split('/')[-1] for x in top_9]:
        collections_str += f"  {{ id: 'fc{fc_id}', category: 'Fashion Concept', title: '{capitalize_title(f)}', image: '/images/fashion-concept/{f}' }},\n"
        fc_id += 1

collections_str += "\n  // --- Commissioned Work ---\n"
fd_id = 1
for f in fd_files:
    if f not in [x[3].split('/')[-1] for x in top_9]:
        collections_str += f"  {{ id: 'fd{fd_id}', category: 'Commissioned Work', title: '{capitalize_title(f)}', image: '/images/fashion-design/{f}' }},\n"
        fd_id += 1

collections_str += "\n  // --- World Cup Tech Jacket ---\n"
jj_id = 1
for f in jj_files:
    collections_str += f"  {{ id: 'jj{jj_id}', category: 'World Cup Tech Jacket', title: '{capitalize_title(f)}', image: '/images/jacket-jersey/{f}' }},\n"
    jj_id += 1

collections_str += "];\n"

with open('lib/collectionsData.ts', 'r', encoding='utf-8') as file:
    content = file.read()
content = re.sub(r'export const allCollectionsData = \[.*?\];', collections_str, content, flags=re.DOTALL)
with open('lib/collectionsData.ts', 'w', encoding='utf-8') as file:
    file.write(content)

# 2. GENERATE data.ts array
data_str = "export const allPortfolioItems = [\n  // --- USER'S TOP 9 SELECTED WORKS ---\n"
aspects = ['aspect-[3/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-[4/3]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-square', 'aspect-[2/3]', 'aspect-[16/9]']
for i, t in enumerate(top_9):
    data_str += f"  {{ id: {100+i+1}, category: '{t[1]}', title: '{t[2]}', image: '{t[3]}', aspect: '{aspects[i]}' }},\n"

data_str += "\n  // --- Fashion Concept ---\n"
for i, f in enumerate(fc_files):
    if f not in [x[3].split('/')[-1] for x in top_9]:
        data_str += f"  {{ id: {200+i}, category: 'Fashion Concept', title: '{capitalize_title(f)}', image: '/images/fashion-concept/{f}', aspect: 'aspect-[3/4]' }},\n"

data_str += "\n  // --- Commissioned Work ---\n"
for i, f in enumerate(fd_files):
    if f not in [x[3].split('/')[-1] for x in top_9]:
        data_str += f"  {{ id: {300+i}, category: 'Commissioned Work', title: '{capitalize_title(f)}', image: '/images/fashion-design/{f}', aspect: 'aspect-[4/5]' }},\n"

data_str += "\n  // --- World Cup Tech Jacket ---\n"
for i, f in enumerate(jj_files):
    data_str += f"  {{ id: {400+i}, category: 'World Cup Tech Jacket', title: '{capitalize_title(f)}', image: '/images/jacket-jersey/{f}', aspect: 'aspect-square' }},\n"

data_str += "];\n"

with open('lib/data.ts', 'r', encoding='utf-8') as file:
    content = file.read()
content = re.sub(r'export const allPortfolioItems = \[.*?\];', data_str, content, flags=re.DOTALL)
with open('lib/data.ts', 'w', encoding='utf-8') as file:
    file.write(content)

print("Arrays updated.")
