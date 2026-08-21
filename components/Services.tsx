'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/Services.tsx
   Numbered service list with:
   • Thin horizontal dividers between items
   • Framer Motion staggered reveal on scroll
   • Expand-on-hover description (accordion-style)
───────────────────────────────────────────────────────────────────────────── */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/lib/data';

/* ── Variants ─────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden:  { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x:       0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Service Row ──────────────────────────────────────────────────────────── */

function ServiceRow({
  service,
  isLast,
}: {
  service: (typeof services)[number];
  isLast:  boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={rowVariants}>
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        className={`
          w-full flex items-start md:items-center justify-between gap-6
          py-7 text-left group
          ${!isLast ? 'border-b border-border' : ''}
        `}
      >
        {/* Number */}
        <span className="label-mono w-8 shrink-0 text-muted group-hover:text-offwhite transition-colors">
          {service.number}
        </span>

        {/* Title */}
        <span className="font-serif text-2xl md:text-4xl font-bold text-offwhite flex-1 group-hover:text-white transition-colors">
          {service.title}
        </span>

        {/* Toggle indicator */}
        <span
          className={`label-mono shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden
        >
          +
        </span>
      </button>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
            exit={{   height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeIn'  } }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-14 text-muted text-sm md:text-base leading-relaxed font-light">
              {service.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Component ────────────────────────────────────────────────────────────── */

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-36 px-4 md:px-8 max-w-screen-xl mx-auto border-t border-border"
    >
      {/* Section header */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="label-mono mb-3 block">What I offer</span>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-offwhite">
          Services
        </h2>
      </motion.div>

      {/* Staggered service rows */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="border-t border-border"
      >
        {services.map((service, idx) => (
          <ServiceRow
            key={service.id}
            service={service}
            isLast={idx === services.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
}
