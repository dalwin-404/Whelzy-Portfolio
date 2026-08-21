export const filterCategories = ['All', 'Fashion Concept', 'Fashion Design', 'World Cup Tech Jacket'] as const;
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
  'Fashion Design': {
    title: 'Commissioned Fashion Designs — Client Projects',
    body: 'A curated collection of commissioned fashion designs created for clients and brands, representing projects developed from real client briefs and creative requirements. Each design was created with a focus on translating the client’s vision into a strong, functional, and visually appealing fashion concept.\n\nThe collection cuts across multiple areas of apparel, including T-shirts, jackets, hoodies, jeans, tracksuits, footwear, denim, and other clothing pieces. Every project presented a different creative challenge, allowing me to adapt my design approach to different styles, audiences, and brand identities while maintaining a high level of visual quality.\n\nThese projects demonstrate my ability to work from a brief, understand client expectations, develop original concepts, and deliver production-ready fashion visuals.',
    footer: '**Categories:** T-Shirts • Jackets • Hoodies • Jeans • Tracksuits • Footwear • Denim • Apparel\n**Project Type:** Commissioned / Client Work\n**Focus:** Client Briefs • Apparel Design • Branding • Creative Direction • Visual Development\n**Role:** Fashion Designer • Graphic Designer • Concept Developer'
  }
};

export const allCollectionsData = [
  // Fashion Concept
  { id: 'fc1', category: 'Fashion Concept', title: 'Bag Concept', image: '/images/fashion-concept/bag.jpeg' },
  { id: 'fc2', category: 'Fashion Concept', title: 'Denim Jacket', image: '/images/fashion-concept/concept denim jacket.jpeg' },
  { id: 'fc3', category: 'Fashion Concept', title: 'Nike X OVO', image: '/images/fashion-concept/concept nike X ovo.jpeg' },
  { id: 'fc4', category: 'Fashion Concept', title: 'Concept Shoe', image: '/images/fashion-concept/concept shoe.jpeg' },
  { id: 'fc5', category: 'Fashion Concept', title: 'Concept 01', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (1).jpeg' },
  { id: 'fc6', category: 'Fashion Concept', title: 'Concept 02', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (2).jpeg' },
  { id: 'fc7', category: 'Fashion Concept', title: 'Concept 03', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (3).jpeg' },
  { id: 'fc8', category: 'Fashion Concept', title: 'Concept 05', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (5).jpeg' },
  { id: 'fc9', category: 'Fashion Concept', title: 'Concept 06', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (6).jpeg' },
  { id: 'fc10', category: 'Fashion Concept', title: 'Concept 07', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (7).jpeg' },
  { id: 'fc11', category: 'Fashion Concept', title: 'Concept 08', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (8).jpeg' },
  { id: 'fc12', category: 'Fashion Concept', title: 'Concept 09', image: '/images/fashion-concept/WhatsApp Image 2026-08-21 at 12.02.14 AM (9).jpeg' },

  // Fashion Design
  { id: 'fd1', category: 'Fashion Design', title: 'Sturdy', image: '/images/fashion-design/sturdy.jpeg' },
  { id: 'fd2', category: 'Fashion Design', title: 'Sturdy II', image: '/images/fashion-design/sturdy2.jpeg' },
  { id: 'fd3', category: 'Fashion Design', title: 'The Knockout', image: '/images/fashion-design/the knockout.jpeg' },
  { id: 'fd4', category: 'Fashion Design', title: 'Editorial Look', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.03.31 AM.jpeg' },
  { id: 'fd5', category: 'Fashion Design', title: 'Look 01', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.04.34 AM (1).jpeg' },
  { id: 'fd6', category: 'Fashion Design', title: 'Look 02', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.04.34 AM.jpeg' },
  { id: 'fd7', category: 'Fashion Design', title: 'Look 03', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.04.35 AM.jpeg' },
  { id: 'fd8', category: 'Fashion Design', title: 'Look 04', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.06.37 AM (1).jpeg' },
  { id: 'fd9', category: 'Fashion Design', title: 'Look 05', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.06.37 AM.jpeg' },
  { id: 'fd10', category: 'Fashion Design', title: 'Look 06', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.06.38 AM (1).jpeg' },
  { id: 'fd11', category: 'Fashion Design', title: 'Look 07', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.06.38 AM (3).jpeg' },
  { id: 'fd12', category: 'Fashion Design', title: 'Look 08', image: '/images/fashion-design/WhatsApp Image 2026-08-21 at 12.06.38 AM (4).jpeg' },

  // World Cup Tech Jacket
  { id: 'jj1', category: 'World Cup Tech Jacket', title: 'Argentina Home', image: '/images/jacket-jersey/Argentina1.jpeg' },
  { id: 'jj2', category: 'World Cup Tech Jacket', title: 'Argentina Away', image: '/images/jacket-jersey/Argetina2.jpeg' },
  { id: 'jj3', category: 'World Cup Tech Jacket', title: 'Argentina Third', image: '/images/jacket-jersey/Argentina3.jpeg' },
  { id: 'jj4', category: 'World Cup Tech Jacket', title: 'Brazil Home', image: '/images/jacket-jersey/brazil1.jpeg' },
  { id: 'jj5', category: 'World Cup Tech Jacket', title: 'Brazil Away', image: '/images/jacket-jersey/brazil2.jpeg' },
  { id: 'jj6', category: 'World Cup Tech Jacket', title: 'Brazil Third', image: '/images/jacket-jersey/brazil3.jpeg' },
  { id: 'jj7', category: 'World Cup Tech Jacket', title: 'Portugal Home', image: '/images/jacket-jersey/Port1.jpeg' },
  { id: 'jj8', category: 'World Cup Tech Jacket', title: 'Portugal Away', image: '/images/jacket-jersey/port2.jpeg' },
  { id: 'jj9', category: 'World Cup Tech Jacket', title: 'Portugal Third', image: '/images/jacket-jersey/port3.jpeg' },
  { id: 'jj10', category: 'World Cup Tech Jacket', title: 'Spain Home', image: '/images/jacket-jersey/spain1.jpeg' },
  { id: 'jj11', category: 'World Cup Tech Jacket', title: 'Spain Away', image: '/images/jacket-jersey/spain2.jpeg' },
  { id: 'jj12', category: 'World Cup Tech Jacket', title: 'Spain Third', image: '/images/jacket-jersey/spain3.jpeg' },
];
