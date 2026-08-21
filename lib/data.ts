/* ─────────────────────────────────────────────────────────────────────────────
   lib/data.ts
   All site copy, typed data shapes, and placeholder content.
   Replace placeholder values with real content when ready.
───────────────────────────────────────────────────────────────────────────── */

/* ── Types ───────────────────────────────────────────────────────────────── */

export interface PortfolioItem {
  id:       number;
  title:    string;
  category: string;
  year:     string;
  /** Unsplash direct image URL (w=1200) */
  image:    string;
  /** col-span and row-span classes for asymmetric grid */
  gridClass: string;
}

export interface ServiceItem {
  id:          number;
  number:      string;
  title:       string;
  description: string;
}

export interface SocialLink {
  id:    number;
  label: string;
  href:  string;
  icon:  string; // react-icons identifier (used in Contact.tsx)
}

/* ── Site Meta ───────────────────────────────────────────────────────────── */

export const siteConfig = {
  name:        'Whelzy',
  tagline:     'Visual Storyteller — Graphic Designer',
  email:       'ayanboyemiracle@gmail.com',
  location:    'Ibadan, Nigeria',
  heroLabel:   'Est. 2019',
  copyright:   `© ${new Date().getFullYear()} Whelzy. All rights reserved.`,
} as const;

/* ── Navigation Links ────────────────────────────────────────────────────── */

export const navLinks = [
  { label: 'Work',     href: '#portfolio' },
  { label: 'About',    href: '#about'     },
  { label: 'Services', href: '#services'  },
  { label: 'Contact',  href: '#contact'   },
] as const;

/* ── Portfolio Items ─────────────────────────────────────────────────────── */
// Six cards, each gets a different gridClass to create an asymmetric layout.

export const portfolioItems: PortfolioItem[] = [
  {
    id:        1,
    title:     'Noir Editorial',
    category:  'Brand Identity',
    year:      '2024',
    image:     'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    gridClass: 'col-span-7 row-span-2',
  },
  {
    id:        2,
    title:     'Monochrome Vogue',
    category:  'Art Direction',
    year:      '2024',
    image:     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    gridClass: 'col-span-5 row-span-1',
  },
  {
    id:        3,
    title:     'Phantom Type',
    category:  'Typography',
    year:      '2023',
    image:     'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
    gridClass: 'col-span-5 row-span-1',
  },
  {
    id:        4,
    title:     'Obsidian Campaign',
    category:  'Campaign Design',
    year:      '2023',
    image:     'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=1200&q=80',
    gridClass: 'col-span-4 row-span-2',
  },
  {
    id:        5,
    title:     'Silhouette Series',
    category:  'Photography',
    year:      '2023',
    image:     'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80',
    gridClass: 'col-span-4 row-span-1',
  },
  {
    id:        6,
    title:     'Dark Luxe',
    category:  'Brand Identity',
    year:      '2022',
    image:     'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?w=1200&q=80',
    gridClass: 'col-span-4 row-span-1',
  },
];

/* ── Hero Slides (Rotating Showcase) ─────────────────────────────────────── */

export const heroSlides = [
  {
    id: 1,
    image: '/images/fashion-concept/bag.jpeg',
    title: 'THE BAG CONCEPT',
    category: 'ACCESSORIES',
  },
  {
    id: 2,
    image: '/images/fashion-concept/concept denim jacket.jpeg',
    title: 'DENIM JACKET',
    category: 'OUTERWEAR',
  },
  {
    id: 3,
    image: '/images/fashion-concept/concept nike X ovo.jpeg',
    title: 'NIKE X OVO',
    category: 'FOOTWEAR',
  },
  {
    id: 4,
    image: '/images/fashion-concept/concept shoe.jpeg',
    title: 'MIRACLE SNEAKERS',
    category: 'FOOTWEAR',
  },
  {
    id: 5,
    image: '/images/fashion-design/sturdy.jpeg',
    title: 'STURDY COLLECTION',
    category: 'STREETWEAR',
  },
  {
    id: 6,
    image: '/images/fashion-design/sturdy2.jpeg',
    title: 'STURDY II',
    category: 'STREETWEAR',
  },
  {
    id: 7,
    image: '/images/fashion-design/the knockout.jpeg',
    title: 'THE KNOCKOUT',
    category: 'EDITORIAL',
  },
  {
    id: 8,
    image: '/images/jacket-jersey/Argetina2.jpeg',
    title: 'ARGENTINA JERSEY',
    category: 'SPORTSWEAR',
  },
];

/* ── Services ────────────────────────────────────────────────────────────── */

export const services: ServiceItem[] = [
  {
    id:          1,
    number:      '01',
    title:       'Brand Identity',
    description: 'Logos, colour systems, typography, and complete visual identities that make brands unforgettable.',
  },
  {
    id:          2,
    number:      '02',
    title:       'Art Direction',
    description: 'Creative strategy and visual direction for campaigns, editorials, and digital experiences.',
  },
  {
    id:          3,
    number:      '03',
    title:       'Print & Editorial',
    description: 'Magazines, books, lookbooks, and printed materials with meticulous attention to detail.',
  },
  {
    id:          4,
    number:      '04',
    title:       'Motion & Digital',
    description: 'Animated graphics, social media content, and digital-first design for modern platforms.',
  },
  {
    id:          5,
    number:      '05',
    title:       'Packaging Design',
    description: 'Product packaging that commands shelf presence and communicates brand values at a glance.',
  },
];

/* ── Filterable Portfolio ────────────────────────────────────────────────── */

export const filterCategories = ['All', 'Fashion Concept', 'Commissioned Work', 'World Cup Tech Jacket'] as const;
export type FilterCategory = typeof filterCategories[number];

export const allPortfolioItems = [
  // --- USER'S TOP 9 SELECTED WORKS ---
  { id: 101, category: 'Fashion Concept', title: 'Bag Concept', image: '/images/fashion-concept/bag.jpeg', aspect: 'aspect-[3/4]' },
  { id: 102, category: 'Fashion Concept', title: 'Denim Jacket', image: '/images/fashion-concept/concept denim jacket.jpeg', aspect: 'aspect-[4/5]' },
  { id: 103, category: 'Fashion Concept', title: 'Louis Vuitton', image: '/images/fashion-concept/loius vulton.jpeg', aspect: 'aspect-square' },
  { id: 104, category: 'Fashion Concept', title: 'Jean Trousers', image: '/images/fashion-concept/jean-trousers.jpeg', aspect: 'aspect-[4/3]' },
  { id: 105, category: 'Fashion Concept', title: 'Jackets', image: '/images/fashion-concept/jackets.jpeg', aspect: 'aspect-[3/4]' },
  { id: 106, category: 'Fashion Concept', title: 'Mule', image: '/images/fashion-concept/mule.jpeg', aspect: 'aspect-[4/5]' },
  { id: 107, category: 'Fashion Concept', title: 'Sketch', image: '/images/fashion-concept/sketch.jpeg', aspect: 'aspect-square' },
  { id: 201, category: 'Commissioned Work', title: 'Two Trousers', image: '/images/fashion-design/two-trousers.jpeg', aspect: 'aspect-[2/3]' },
  { id: 202, category: 'Commissioned Work', title: 'Three Jackets', image: '/images/fashion-design/three-jackets.jpeg', aspect: 'aspect-[16/9]' },

  // --- REST OF THE PORTFOLIO (Leftovers) ---
  { id: 203, category: 'Fashion Concept', title: 'Nike X OVO', image: '/images/fashion-concept/concept nike X ovo.jpeg', aspect: 'aspect-[4/5]' },
  { id: 204, category: 'Fashion Concept', title: 'Concept Shoe', image: '/images/fashion-concept/concept shoe.jpeg', aspect: 'aspect-square' },
  { id: 205, category: 'Commissioned Work', title: 'Sturdy', image: '/images/fashion-design/sturdy.jpeg', aspect: 'aspect-[3/4]' },
  { id: 206, category: 'Commissioned Work', title: 'Sturdy II', image: '/images/fashion-design/sturdy2.jpeg', aspect: 'aspect-[4/5]' },
  { id: 207, category: 'Commissioned Work', title: 'The Knockout', image: '/images/fashion-design/the knockout.jpeg', aspect: 'aspect-square' },
  
  // World Cup Tech Jacket
  { id: 301, category: 'World Cup Tech Jacket', title: 'Argentina Home', image: '/images/jacket-jersey/Argentina1.jpeg', aspect: 'aspect-[3/4]' },
  { id: 302, category: 'World Cup Tech Jacket', title: 'Argentina Away', image: '/images/jacket-jersey/Argetina2.jpeg', aspect: 'aspect-[4/5]' },
  { id: 303, category: 'World Cup Tech Jacket', title: 'Argentina Third', image: '/images/jacket-jersey/Argentina3.jpeg', aspect: 'aspect-square' },
  { id: 304, category: 'World Cup Tech Jacket', title: 'Brazil Home', image: '/images/jacket-jersey/brazil1.jpeg', aspect: 'aspect-[4/5]' },
  { id: 305, category: 'World Cup Tech Jacket', title: 'Brazil Away', image: '/images/jacket-jersey/brazil2.jpeg', aspect: 'aspect-[3/4]' },
  { id: 306, category: 'World Cup Tech Jacket', title: 'Brazil Third', image: '/images/jacket-jersey/brazil3.jpeg', aspect: 'aspect-[2/3]' },
];

/* ── Social Links ────────────────────────────────────────────────────────── */

export const socialLinks: SocialLink[] = [
  { id: 1, label: 'Instagram', href: 'https://www.instagram.com/ayanboyemiracle?igsi=MWFxbGtxdnY5a3Y0&utm_source=qr', icon: 'SiInstagram' },
  { id: 2, label: 'X (Twitter)', href: 'https://x.com/ayanboyemiracle?s=11', icon: 'SiX' },
  { id: 3, label: 'TikTok', href: 'https://www.tiktok.com/@ayanboyemiracle?_r=1&_t=ZS-993LSTIIIcf', icon: 'SiTiktok' },
  { id: 4, label: 'YouTube', href: 'https://youtube.com/@ayanboyemiracle?si=7q-hxaRnAQE5SzGt', icon: 'SiYoutube' },
];
