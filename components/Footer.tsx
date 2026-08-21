/* ─────────────────────────────────────────────────────────────────────────────
   components/Footer.tsx
   Minimal dark footer with:
   • Designer name (left)
   • Copyright + tagline (centre)
   • "Back to top" link (right)
───────────────────────────────────────────────────────────────────────────── */

import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 md:px-8 py-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left — Name */}
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted">
          {siteConfig.name}
        </span>

        {/* Centre — Copyright */}
        <span className="label-mono text-center">
          {siteConfig.copyright}
        </span>

        {/* Right — Back to top */}
        <a
          href="#"
          className="label-mono hover:text-offwhite transition-colors flex items-center gap-1.5"
          aria-label="Back to top"
        >
          Back to top
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <line x1="5" y1="10" x2="5" y2="0" stroke="currentColor" strokeWidth="0.8" />
            <polyline points="1,4 5,0 9,4" stroke="currentColor" strokeWidth="0.8" fill="none" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
