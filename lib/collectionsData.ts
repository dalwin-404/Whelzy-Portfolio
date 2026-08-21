export const filterCategories = ['All', 'Fashion Concept', 'Commissioned Work', 'World Cup Tech Jacket'] as const;
export type FilterCategory = typeof filterCategories[number];

export const categoryDescriptions: Record<string, { title: string, body: string, footer: string }> = {
  'World Cup Tech Jacket': {
    title: 'World Cup Tech Jacket — Concept Collection',
    body: 'A conceptual **World Cup Tech Jacket collection** created for four football nations: **Argentina, Portugal, Brazil, and Spain**. Each design was developed to preserve the **original identity, colors, cultural character, and football heritage** of its respective nation while introducing a modern, performance-inspired aesthetic.\n\nThe collection explores how national football identity can be translated into contemporary sportswear through **bold graphics, streamlined silhouettes, technical detailing, and modern visual elements**. Although each jacket follows a unified techwear-inspired direction, every design remains distinctly connected to the nation it represents.',
    footer: '**Concepts Featured:** Argentina • Portugal • Brazil • Spain\n**Design Focus:** Tech Jacket / Football Fashion\n**Project Type:** World Cup Concept Design\n**Role:** Concept Development • Apparel Design • Graphic Design • Art Direction.'
  },
  'Fashion Concept': {
    title: 'Fashion Concept Collection — Style Exploration',
    body: 'A collection of experimental fashion concept designs created as a personal exploration of my creative style, versatility, and apparel design skills. The project brings together different clothing categories and footwear to explore how various silhouettes, materials, graphics, and visual treatments can be combined into distinctive fashion concepts.\n\nThe collection includes T-shirts, jackets, jeans, denim pieces, mules, shoes, and other apparel concepts, with each design allowing me to experiment with different aesthetics and creative directions. Rather than following a single brand identity, the project focuses on creative freedom, experimentation, and pushing my design abilities across different areas of fashion.',
    footer: '**Categories:** T-Shirts • Jackets • Jeans • Denim • Mules • Shoes • Bag\n**Project Type:** Personal Concept / Experimental Fashion\n**Focus:** Style Exploration • Apparel Design • Creative Direction • Visual Development\n**Role:** Fashion Concept Designer • Graphic Designer • Art Direction.'
  },
  'Commissioned Work': {
    title: 'Commissioned Work — Client Projects',
    body: 'A curated collection of commissioned work created for clients and brands, representing projects developed from real client briefs and creative requirements. Each design was created with a focus on translating the client\'s vision into a strong, functional, and visually appealing fashion concept.\n\nThe collection cuts across multiple areas of apparel, including T-shirts, jackets, hoodies, jeans, tracksuits, footwear, denim, and other clothing pieces. Every project presented a different creative challenge, allowing me to adapt my design approach to different styles, audiences, and brand identities while maintaining a high level of visual quality.\n\nThese projects demonstrate my ability to work from a brief, understand client expectations, develop original concepts, and deliver production-ready visuals.',
    footer: '**Categories:** T-Shirts • Jackets • Hoodies • Jeans • Tracksuits • Footwear • Denim • Apparel\n**Project Type:** Commissioned / Client Work\n**Focus:** Client Briefs • Apparel Design • Branding • Creative Direction • Visual Development\n**Role:** Fashion Designer • Graphic Designer • Concept Developer'
  }
};

export const allCollectionsData = [
  // --- USER'S TOP 9 SELECTED WORKS ---
  { id: 'sel1', category: 'Fashion Concept', title: 'Bag Concept', image: '/images/fashion-concept/bag.jpeg' },
  { id: 'sel2', category: 'Fashion Concept', title: 'Denim Jacket', image: '/images/fashion-concept/concept denim jacket.jpeg' },
  { id: 'sel3', category: 'Fashion Concept', title: 'Louis Vuitton', image: '/images/fashion-concept/loius vulton.jpeg' },
  { id: 'sel4', category: 'Fashion Concept', title: 'Jean Trousers', image: '/images/fashion-concept/jean-trousers.jpeg' },
  { id: 'sel5', category: 'Fashion Concept', title: 'Jackets', image: '/images/fashion-concept/jackets.jpeg' },
  { id: 'sel6', category: 'Fashion Concept', title: 'Mule', image: '/images/fashion-concept/mule.jpeg' },
  { id: 'sel7', category: 'Fashion Concept', title: 'Sketch', image: '/images/fashion-concept/sketch.jpeg' },
  { id: 'sel8', category: 'Commissioned Work', title: 'Two Trousers', image: '/images/fashion-design/two-trousers.jpeg' },
  { id: 'sel9', category: 'Commissioned Work', title: 'Three Jackets', image: '/images/fashion-design/three-jackets.jpeg' },

  // --- Fashion Concept ---
  { id: 'fc1', category: 'Fashion Concept', title: 'Addidas', image: '/images/fashion-concept/addidas.jpeg' },
  { id: 'fc2', category: 'Fashion Concept', title: 'Butterfly', image: '/images/fashion-concept/butterfly.jpeg' },
  { id: 'fc3', category: 'Fashion Concept', title: 'Nike X OVO', image: '/images/fashion-concept/concept nike X ovo.jpeg' },
  { id: 'fc4', category: 'Fashion Concept', title: 'Concept Shoe', image: '/images/fashion-concept/concept shoe.jpeg' },
  { id: 'fc5', category: 'Fashion Concept', title: 'Hand', image: '/images/fashion-concept/hand.jpeg' },
  { id: 'fc6', category: 'Fashion Concept', title: 'Iceman', image: '/images/fashion-concept/iceman.jpeg' },
  { id: 'fc7', category: 'Fashion Concept', title: 'Trousers', image: '/images/fashion-concept/trousers.jpeg' },

  // --- Commissioned Work ---
  { id: 'fd1', category: 'Commissioned Work', title: '2 Cross', image: '/images/fashion-design/2-cross.jpeg' },
  { id: 'fd2', category: 'Commissioned Work', title: 'Brand Short', image: '/images/fashion-design/brand-short.jpeg' },
  { id: 'fd3', category: 'Commissioned Work', title: 'Brown Capsw', image: '/images/fashion-design/brown-capsw.jpeg' },
  { id: 'fd4', category: 'Commissioned Work', title: 'Cross', image: '/images/fashion-design/cross.jpeg' },
  { id: 'fd5', category: 'Commissioned Work', title: 'Four Black', image: '/images/fashion-design/four-black.jpeg' },
  { id: 'fd6', category: 'Commissioned Work', title: 'Four Caps', image: '/images/fashion-design/four-caps.jpeg' },
  { id: 'fd7', category: 'Commissioned Work', title: 'Joggers', image: '/images/fashion-design/joggers.jpeg' },
  { id: 'fd8', category: 'Commissioned Work', title: 'Marrucio', image: '/images/fashion-design/marrucio.jpeg' },
  { id: 'fd9', category: 'Commissioned Work', title: 'Retro', image: '/images/fashion-design/retro.jpeg' },
  { id: 'fd10', category: 'Commissioned Work', title: 'Sturdy Cap', image: '/images/fashion-design/sturdy-cap.jpeg' },
  { id: 'fd11', category: 'Commissioned Work', title: 'Sturdy', image: '/images/fashion-design/sturdy.jpeg' },
  { id: 'fd12', category: 'Commissioned Work', title: 'Sturdy2', image: '/images/fashion-design/sturdy2.jpeg' },
  { id: 'fd13', category: 'Commissioned Work', title: 'The Knockout', image: '/images/fashion-design/the knockout.jpeg' },
  { id: 'fd14', category: 'Commissioned Work', title: 'Two Short', image: '/images/fashion-design/two-short.jpeg' },

  // --- World Cup Tech Jacket ---
  { id: 'jj1', category: 'World Cup Tech Jacket', title: 'Argentina1', image: '/images/jacket-jersey/Argentina1.jpeg' },
  { id: 'jj2', category: 'World Cup Tech Jacket', title: 'Argetina2', image: '/images/jacket-jersey/Argetina2.jpeg' },
  { id: 'jj3', category: 'World Cup Tech Jacket', title: 'Argentina3', image: '/images/jacket-jersey/Argentina3.jpeg' },
  { id: 'jj4', category: 'World Cup Tech Jacket', title: 'Brazil1', image: '/images/jacket-jersey/brazil1.jpeg' },
  { id: 'jj5', category: 'World Cup Tech Jacket', title: 'Brazil2', image: '/images/jacket-jersey/brazil2.jpeg' },
  { id: 'jj6', category: 'World Cup Tech Jacket', title: 'Brazil3', image: '/images/jacket-jersey/brazil3.jpeg' },
  { id: 'jj7', category: 'World Cup Tech Jacket', title: 'Port1', image: '/images/jacket-jersey/Port1.jpeg' },
  { id: 'jj8', category: 'World Cup Tech Jacket', title: 'Port2', image: '/images/jacket-jersey/port2.jpeg' },
  { id: 'jj9', category: 'World Cup Tech Jacket', title: 'Port3', image: '/images/jacket-jersey/port3.jpeg' },
  { id: 'jj10', category: 'World Cup Tech Jacket', title: 'Spain1', image: '/images/jacket-jersey/spain1.jpeg' },
  { id: 'jj11', category: 'World Cup Tech Jacket', title: 'Spain2', image: '/images/jacket-jersey/spain2.jpeg' },
  { id: 'jj12', category: 'World Cup Tech Jacket', title: 'Spain3', image: '/images/jacket-jersey/spain3.jpeg' },
];

