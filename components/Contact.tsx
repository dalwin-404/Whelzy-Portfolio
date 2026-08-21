'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/Contact.tsx
   Full-width contact section with:
   • Large typographic email CTA
   • Social icon links from lib/data.ts
   • Framer Motion fade-up
───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  SiInstagram,
  SiX,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';
import { siteConfig, socialLinks } from '@/lib/data';
import MagneticButton from '@/components/MagneticButton';

/* ── Icon map ─────────────────────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  SiInstagram,
  SiX,
  SiTiktok,
  SiYoutube,
};

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
export default function Contact() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(new Date()) + ' WAT');
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="py-24 md:py-40 px-4 md:px-8 max-w-screen-xl mx-auto border-t border-border"
    >
      {/* Section label */}
      <motion.span
        className="label-mono mb-6 block"
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Get in touch
      </motion.span>

      {/* Large CTA heading */}
      <motion.h2
        className="font-serif font-black text-[clamp(2.5rem,8vw,7rem)] leading-none tracking-tight text-offwhite mb-10"
        variants={fadeUp(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        Let&apos;s work
        <br />
        <span className="italic text-muted">together.</span>
      </motion.h2>

      {/* Form and Contact Info */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32"
      >
        {/* Form Section */}
        <div className="flex-1">
          <form action="https://formspree.io/f/placeholder" method="POST" className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-offwhite/50">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="John Doe"
                className="bg-transparent border-b border-white/20 pb-4 text-xl font-serif text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20 rounded-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-offwhite/50">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="john@example.com"
                className="bg-transparent border-b border-white/20 pb-4 text-xl font-serif text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20 rounded-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-offwhite/50">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={1}
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-white/20 pb-4 text-xl font-serif text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none rounded-none"
              ></textarea>
            </div>

            <MagneticButton>
              <button 
                type="submit"
                className="self-start inline-flex items-center gap-4 group"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-white group-hover:text-white/70 transition-colors">
                  Send Message
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </div>
              </button>
            </MagneticButton>

          </form>
        </div>

        {/* Direct Info Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-12">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-offwhite/50 mb-4 block">
              Direct Contact
            </span>
            <MagneticButton className="inline-block">
              <a href={`mailto:${siteConfig.email}`} className="font-serif text-2xl text-white hover:opacity-70 transition-opacity">
                {siteConfig.email}
              </a>
            </MagneticButton>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-offwhite/50 mb-4 block">
              Base Coordinates
            </span>
            <p className="font-serif text-2xl text-white">
              7.3775° N, 3.9470° E<br />
              <span className="text-white/50 text-lg">Worldwide Reach</span>
            </p>
            <span className="font-mono text-[10px] tracking-widest text-white/30 block mt-4 uppercase">
              LOCAL TIME (IBA): {time || '00:00:00 WAT'}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Social links row */}
      <motion.div
        className="flex items-center gap-8"
        variants={fadeUp(0.45)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="label-mono mr-4 hidden md:inline">Follow</span>
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <MagneticButton key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-2 label-mono text-muted hover:text-offwhite transition-colors group p-2"
              >
                {Icon && (
                  <Icon
                    size={18}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5"
                  />
                )}
                <span className="hidden md:inline">{link.label}</span>
              </a>
            </MagneticButton>
          );
        })}
      </motion.div>
    </section>
  );
}
