'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/PortfolioGrid.tsx
   Bento Grid Showcase
   • Strict CSS Grid (grid-cols-4) with fixed 300px row heights
   • Shows the absolute best 6 pieces using specific interlocking spans
   • Single "VIEW ALL WORK" button at the bottom
   • mix-blend-multiply for seamless integration into #e8e8e8 background
───────────────────────────────────────────────────────────────────────────── */

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { allPortfolioItems } from '@/lib/data';
import Link from 'next/link';
import { useRef } from 'react';
import MagneticButton from '@/components/MagneticButton';

// The absolute best 6 pieces
const bestPieces = allPortfolioItems.slice(0, 6);

// Hardcoded interlocking Bento spans perfectly tailored for 6 items
const bentoSpans = [
  'md:col-span-2 md:row-span-2', // Large Hero Piece
  'md:col-span-1 md:row-span-1', // Small top right
  'md:col-span-1 md:row-span-1', // Small top right edge
  'md:col-span-2 md:row-span-1', // Wide middle right
  'md:col-span-1 md:row-span-1', // Small bottom left
  'md:col-span-1 md:row-span-1', // Small bottom middle
];

// Staggered parallax speed multipliers for each grid item
const parallaxSpeeds = [0.05, -0.05, 0.08, -0.02, 0.04, -0.06];

export default function PortfolioGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={containerRef} id="portfolio" className="relative bg-[#e8e8e8] py-24 md:py-36 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* ── Header ── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/50 mb-4 block">
            Featured
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-black mb-4 leading-none">
            Selected Works.
          </h2>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 md:gap-6">
          {bestPieces.map((item, i) => {
            // Create a custom parallax value for this specific item
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0, 1], [0, parallaxSpeeds[i] * 1000]);

            return (
              <motion.article
                key={item.id}
                style={{ y }}
                data-cursor="VIEW"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden bg-black/5 cursor-pointer ${bentoSpans[i]}`}
              >
                {/* Multiply blend mode so images sink into the grey background */}
                <div className="absolute inset-0 mix-blend-multiply">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />
                
                {/* Hover Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
                  <span className="font-mono text-white/70 text-[10px] tracking-[0.2em] uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-white text-2xl md:text-3xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ── View All Work Button ── */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <MagneticButton>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center border border-black bg-transparent text-black font-mono text-[11px] uppercase tracking-widest px-10 py-5 hover:bg-black hover:text-white transition-colors duration-300"
            >
              View All Work
            </Link>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
}
