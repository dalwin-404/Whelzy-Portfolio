'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/Navbar.tsx

   Reference: Agentura template navbar
   ┌─────────────────────────────────────────┐
   │  W.                                  =  │  ← bar (closed)
   └─────────────────────────────────────────┘

   ┌─────────────────────────────────────────┐
   │  W.                                  ✕  │
   │                                         │
   │               WORK                      │
   │              SERVICES                   │
   │              CONTACT                    │
   │               ABOUT                     │
   │                                         │
   │         🐦       📷       in            │
   └─────────────────────────────────────────┘  ← panel (open, same width)

   • Fixed · centered · ~36% desktop width · sharp corners · #1a1a1a
   • Menu is a CONTAINED panel (not full-screen overlay)
   • height 0 → auto with Framer Motion AnimatePresence
   • Logo stays top-left · hamburger (=) swaps to × on open
───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiInstagram, SiX, SiTiktok, SiYoutube } from 'react-icons/si';
import { siteConfig } from '@/lib/data';
import MagneticButton from '@/components/MagneticButton';

/* ── Nav links in user-requested order ───────────────────────────────────── */
const menuLinks = [
  { label: 'Work',     href: '/collections' },
  { label: 'Services', href: '/#services'  },
  { label: 'Contact',  href: '/#contact'   },
  { label: 'About',    href: '/#about'     },
];

const socials = [
  { Icon: SiInstagram, href: 'https://www.instagram.com/ayanboyemiracle?igsi=MWFxbGtxdnY5a3Y0&utm_source=qr', label: 'Instagram' },
  { Icon: SiX, href: 'https://x.com/ayanboyemiracle?s=11', label: 'X (Twitter)' },
  { Icon: SiTiktok, href: 'https://www.tiktok.com/@ayanboyemiracle?_r=1&_t=ZS-993LSTIIIcf', label: 'TikTok' },
  { Icon: SiYoutube, href: 'https://youtube.com/@ayanboyemiracle?si=7q-hxaRnAQE5SzGt', label: 'YouTube' },
];

/* ── Framer Motion variants ───────────────────────────────────────────────── */

/** Whole panel slides down into view on page load */
const panelEntrance = {
  hidden:  { y: -40, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

/** Expandable body: height 0 → auto */
const expandVariants = {
  hidden: {
    height:  0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    height:  'auto',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Stagger the nav links as they appear */
const linkListVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const linkItemVariants = {
  hidden:  { opacity: 0, y: -6 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

/* ── Hamburger = icon (two lines, like reference) ────────────────────────── */
function HamburgerIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
      <line x1="0" y1="2"  x2="18" y2="2"  stroke="white" strokeWidth="1.5" />
      <line x1="0" y1="10" x2="18" y2="10" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────────────────────── */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Initials: "Whelzy" → "W." */
  const logo = siteConfig.name.slice(0, 1).toUpperCase() + '.';

  /* Escape key closes */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    /*
      Outer wrapper: centres the bar, sets width.
      Reduced to ~36% on desktop (narrower than before).
    */
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[88%] sm:w-[60%] md:w-[38%] lg:w-[34%]">

      {/* ── The dark panel ──────────────────────────────────────────────── */}
      <motion.div
        variants={panelEntrance}
        initial="hidden"
        animate="visible"
        style={{ backgroundColor: '#1a1a1a' }}
        className="w-full overflow-hidden"
      >

        {/* ── Always-visible header row ─────────────────────────────────── */}
        <div className="flex items-center justify-between px-6 py-[14px]">

          {/* Logo / initials */}
          <a
            href="#"
            onClick={close}
            className="font-mono font-bold text-white text-sm tracking-[0.22em] uppercase hover:opacity-70 transition-opacity"
          >
            {logo}
          </a>

          {/* Toggle: = when closed, × when open */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex items-center justify-center w-6 h-6 hover:opacity-60 transition-opacity"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -45 }}
                  animate={{ opacity: 1, rotate:   0, transition: { duration: 0.2 } }}
                  exit={{    opacity: 0, rotate:  45, transition: { duration: 0.15 } }}
                  className="text-white font-mono text-base leading-none select-none"
                >
                  ✕
                </motion.span>
              ) : (
                <motion.span
                  key="burger"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{    opacity: 0, transition: { duration: 0.15 } }}
                >
                  <HamburgerIcon />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Animated expandable body ──────────────────────────────────── */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              key="menu-body"
              variants={expandVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="overflow-hidden"
            >
              {/* Top divider */}
              <div className="h-px bg-white/10 mx-5" />

              {/* Nav links — centered, monospace, uppercase, wide tracking */}
              <motion.nav
                variants={linkListVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center py-6 gap-1"
                aria-label="Site navigation"
              >
                {menuLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={linkItemVariants}
                    onClick={close}
                    className="
                      block w-full text-center
                      font-mono text-[13px] uppercase tracking-[0.28em]
                      text-white/80 hover:text-white
                      py-[14px] transition-colors duration-200
                    "
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Bottom divider */}
              <div className="h-px bg-white/10 mx-5" />

              {/* Social icons row */}
              <div className="flex items-center justify-center gap-10 py-5">
                {socials.map(({ Icon, href, label }) => (
                  <MagneticButton key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-white/50 hover:text-white transition-colors duration-200 block p-2"
                    >
                      <Icon size={17} />
                    </a>
                  </MagneticButton>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
