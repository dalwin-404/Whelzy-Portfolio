'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   app/collections/page.tsx
   Full Collections Page with Seamless Filterable Masonry Grid
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { filterCategories, allCollectionsData, FilterCategory, categoryDescriptions } from '@/lib/collectionsData';

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const filteredItems = allCollectionsData.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-[#e8e8e8] pt-32 pb-24 md:pb-36 selection:bg-black selection:text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* ── Header & Navigation ── */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-black/50 hover:text-black transition-colors mb-8"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1M1 7L7 13M1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
              Back to Home
            </Link>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-black leading-none">
              The Archive.
            </h1>
          </div>

          {/* ── Filter Buttons ── */}
          <div className="flex flex-wrap items-center gap-3">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 border
                  ${
                    activeFilter === category
                      ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                      : 'bg-transparent text-black border-black/20 hover:border-black'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Dynamic Category Description ── */}
        <AnimatePresence mode="wait">
          {activeFilter !== 'All' && categoryDescriptions[activeFilter] && (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-16 overflow-hidden"
            >
              <div className="max-w-4xl border-l-2 border-black/20 pl-6 md:pl-8 py-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-black mb-4">
                  {categoryDescriptions[activeFilter].title}
                </h2>
                {categoryDescriptions[activeFilter].body.split('\n\n').map((paragraph, i) => {
                  // Basic bold parsing for Markdown "**text**" -> <strong>text</strong>
                  const formattedText = paragraph.split(/(\*\*.*?\*\*)/).map((part, index) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  });
                  return (
                    <p key={i} className="text-black/70 font-sans text-sm md:text-base leading-relaxed mb-4">
                      {formattedText}
                    </p>
                  );
                })}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[11px] tracking-wide text-black/60 uppercase">
                  {categoryDescriptions[activeFilter].footer.split('\n').map((line, i) => {
                    const formattedLine = line.split(/(\*\*.*?\*\*)/).map((part, index) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={index} className="text-black">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    });
                    return <div key={i}>{formattedLine}</div>;
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Masonry Grid ── */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                data-cursor="VIEW"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="break-inside-avoid group relative overflow-hidden bg-black/5 cursor-pointer w-full"
              >
                {/* Dynamically sizing container using intrinsic image ratio via next/image's trick, 
                    but since we have unknown ratios, we'll just use a pseudo-random height based on id length 
                    so it looks like a real masonry layout, or just let it be a standard rectangle that mix-blends well. 
                    Actually, if we don't set height, next/image with 'fill' requires a parent height.
                    Instead, we will assign random aspect ratios based on index for the masonry effect. */}
                <div 
                  className="relative w-full mix-blend-multiply" 
                  style={{ aspectRatio: (item.id.length % 2 === 0) ? '3/4' : '4/5' }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Dark Overlay (Fades in on hover) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500" />

                {/* Title & Category (Fades in on hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center">
                  <span className="font-mono text-white/70 text-[10px] tracking-[0.2em] uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-white text-xl md:text-2xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}
