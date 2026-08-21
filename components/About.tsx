'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/About.tsx
   Minimal bio section.
   • Side-by-side layout on desktop, stacked on mobile
   • Portrait image with thin border frame
   • Framer Motion fade-up on scroll
   • Mono stat counters
───────────────────────────────────────────────────────────────────────────── */

import Image from 'next/image';
import { motion } from 'framer-motion';

/* ── Stats ────────────────────────────────────────────────────────────────── */

const stats = [
  { value: '5+',  label: 'Years experience' },
  { value: '80+', label: 'Projects delivered' },
  { value: '30+', label: 'Happy clients'      },
] as const;

/* ── Variants ─────────────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y:       0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ── Component ────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 px-4 md:px-8 max-w-screen-xl mx-auto border-t border-border"
    >
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* ── Left: Portrait image ────────────────────────────────────────── */}
        <motion.div
          className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Offset decorative border */}
          <div className="absolute -top-3 -left-3 w-full h-full border border-border" />

          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/whelzy-image.png"
              alt="Whelzy — Graphic Designer"
              fill
              className="object-cover object-center grayscale"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Corner label */}
          <span className="absolute -bottom-6 right-0 label-mono">
            Ibadan, Nigeria
          </span>
        </motion.div>

        {/* ── Right: Bio text ─────────────────────────────────────────────── */}
        <div className="flex flex-col gap-10">
          {/* Section label */}
          <motion.span
            className="label-mono"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            About
          </motion.span>

          {/* Heading */}
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-offwhite leading-tight"
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            Crafting bold visual narratives with precision and intent.
          </motion.h2>

          {/* Bio paragraphs */}
          <motion.div
            className="space-y-4 text-muted text-sm md:text-base leading-relaxed font-sans font-light"
            variants={fadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p>
              I&apos;m Whelzy, a dedicated graphic designer with over 5 years of professional experience
              translating abstract concepts into striking visual realities. My work sits at the intersection 
              of modern editorial aesthetics and raw street culture.
            </p>
            <p>
              Armed with Adobe Photoshop and Illustrator as my primary tools, I specialize in photo manipulation, 
              intricate typography, and comprehensive brand identities. I don&apos;t just make things look good; 
              I design with obsessive attention to craft to ensure every pixel serves the story.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-4 border-t border-border"
            variants={fadeUp(0.45)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-serif text-3xl font-bold text-offwhite">
                  {stat.value}
                </span>
                <span className="label-mono">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
