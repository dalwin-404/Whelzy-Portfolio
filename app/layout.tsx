/* ─────────────────────────────────────────────────────────────────────────────
   app/layout.tsx
   Root layout — wraps every page.
   • Injects Google Fonts via next/font/google
   • Applies global CSS variables to the <html> element
   • Mounts <SmoothScroll> client component for Lenis + GSAP ticker
───────────────────────────────────────────────────────────────────────────── */

import type { Metadata } from 'next';
import { Playfair_Display, Space_Mono, Inter } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Noise from '@/components/Noise';
import './globals.css';

/* ── Font Definitions ─────────────────────────────────────────────────────── */

const playfair = Playfair_Display({
  subsets:  ['latin'],
  weight:   ['400', '700', '900'],
  style:    ['normal', 'italic'],
  variable: '--font-playfair',
  display:  'swap',
});

const spaceMono = Space_Mono({
  subsets:  ['latin'],
  weight:   ['400', '700'],
  style:    ['normal', 'italic'],
  variable: '--font-space-mono',
  display:  'swap',
});

const inter = Inter({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-inter',
  display:  'swap',
});

/* ── Metadata ─────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:       'Whelzy — Graphic Designer',
  description: 'Whelzy is a visual storyteller and graphic designer specialising in brand identity, art direction, and editorial design.',
  keywords:    ['graphic designer', 'brand identity', 'art direction', 'portfolio'],
  openGraph: {
    title:       'Whelzy — Graphic Designer',
    description: 'Visual storyteller & brand identity designer.',
    type:        'website',
  },
};

/* ── Root Layout ──────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${spaceMono.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-offwhite font-sans antialiased">
        <Preloader />
        <Noise />
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
