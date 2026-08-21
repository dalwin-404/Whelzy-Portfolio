'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/SmoothScroll.tsx
   Client component that initialises Lenis smooth scroll and connects it to
   the GSAP ticker so ScrollTrigger and Lenis stay in sync.

   • All browser-only imports are done INSIDE useEffect via dynamic import()
     to guarantee they never run during Next.js SSR / build-time page analysis.
   • Respects prefers-reduced-motion.
───────────────────────────────────────────────────────────────────────────── */

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    /* ── Check prefers-reduced-motion ────────────────────────────────────── */
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) return; // use native scroll, no Lenis

    /* ── Dynamic imports (browser-only) ──────────────────────────────────── */
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import('lenis'),
          import('gsap'),
          import('gsap/ScrollTrigger'),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      /* ── Initialise Lenis ──────────────────────────────────────────────── */
      const lenis = new Lenis({
        duration:    1.4,
        easing:      (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      /* ── Connect Lenis to GSAP ticker ────────────────────────────────────*/
      // Keeps ScrollTrigger in sync with Lenis' virtual scroll position.
      const onTick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      // Tell ScrollTrigger to use Lenis' scroll events
      lenis.on('scroll', ScrollTrigger.update);

      /* ── Store cleanup ─────────────────────────────────────────────────── */
      cleanup = () => {
        lenis.destroy();
        gsap.ticker.remove(onTick);
      };
    })();

    /* ── Return cleanup to React ─────────────────────────────────────────── */
    return () => cleanup?.();
  }, []);

  // Renders nothing — purely for side-effects
  return null;
}
