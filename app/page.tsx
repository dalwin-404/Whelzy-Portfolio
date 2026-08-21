/* ─────────────────────────────────────────────────────────────────────────────
   app/page.tsx
   Single-page layout — composes all sections in order.
   All heavy components are client components ('use client') so this
   Server Component is kept clean.
───────────────────────────────────────────────────────────────────────────── */

import Navbar        from '@/components/Navbar';
import Hero          from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import About         from '@/components/About';
import Services      from '@/components/Services';
import Contact       from '@/components/Contact';
import Footer        from '@/components/Footer';
import Marquee       from '@/components/Marquee';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <About />
      <Services />
      <Marquee />
      <Contact />
      <Footer />
    </main>
  );
}
