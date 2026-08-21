'use client';

/* ─────────────────────────────────────────────────────────────────────────────
   components/Hero.tsx
   Fullscreen Rotating Showcase Hero
   • 100vh / 100vw pure black background
   • Auto-rotating slideshow every 4s
   • Cross-fade transitions for images
   • Text/UI overlay fading in/out
   • Linear progress bar at the bottom
   • Touch swipe support for mobile
───────────────────────────────────────────────────────────────────────────── */

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';
import { heroSlides } from '@/lib/data';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Animation constants based on user preference
  const yOffset = shouldReduceMotion ? 0 : 30;
  const slideDuration = 4000;

  // ── Auto Play Logic ────────────────────────────────────────────────────────
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, slideDuration);
  };

  useEffect(() => {
    // Initial delay for UI elements
    const loadTimer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 500); // 0.5s initial delay after first image mounts
    
    return () => clearTimeout(loadTimer);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]); // Restarts timer whenever index changes manually or automatically

  // ── Mobile Swipe Logic ─────────────────────────────────────────────────────
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX; // Reset end X
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) nextSlide(); // Swipe left -> next
    if (swipeDistance < -50) prevSlide(); // Swipe right -> prev
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  const currentSlide = heroSlides[currentIndex];

  // Helper to format slide numbers like "01 / 08"
  const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(heroSlides.length).padStart(2, '0');

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] bg-black overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Background Slideshow ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority={currentIndex === 0} // Only preload the first image
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark Overlay so text is always readable */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.55)' }} />
        </motion.div>
      </AnimatePresence>

      {/* ── UI Elements Overlay ── */}
      <AnimatePresence>
        {!isFirstLoad && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {/* 1. Designer Name (Top Left) */}
            <div className="absolute top-[32px] left-[40px]">
              <span className="font-mono text-white text-[13px] uppercase tracking-[6px]">
                Whelzy
              </span>
            </div>

            {/* 2. Slide Counter (Bottom Right) */}
            <div className="absolute bottom-[40px] right-[48px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-white text-[13px] uppercase tracking-wide inline-block"
                >
                  {formattedCurrent} / {formattedTotal}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* 3. Slide Category Tag (Bottom Left, above title) */}
            <div className="absolute bottom-[140px] left-[48px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: yOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: yOffset }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-white text-[11px] uppercase tracking-widest block"
                >
                  {currentSlide.category}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* 4. Slide Title (Bottom Left) */}
            <div className="absolute bottom-[80px] left-[48px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentIndex}
                  initial={{ opacity: 0, y: yOffset }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: yOffset }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1, // 0.1s delay before title animates
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-white text-[32px] md:text-[48px] font-[800] uppercase tracking-tight leading-none"
                >
                  {currentSlide.title}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* 5. View Work Button (Bottom Left, below title) */}
            <div className="absolute bottom-[24px] left-[48px] pointer-events-auto">
              <MagneticButton>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center border border-white bg-transparent text-white font-mono text-[11px] uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-black transition-colors duration-300"
                >
                  View Work
                </Link>
              </MagneticButton>
            </div>

            {/* 6. Navigation Arrows (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[24px] pointer-events-auto">
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={prevSlide}
                className="p-4"
                aria-label="Previous Slide"
              >
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 12L12 22" stroke="white" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </motion.button>
            </div>
            
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[24px] pointer-events-auto">
              <motion.button
                whileHover={{ scale: 1.2 }}
                onClick={nextSlide}
                className="p-4"
                aria-label="Next Slide"
              >
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L12 12L2 22" stroke="white" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Progress Bar (Absolute Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/15 z-20">
        <motion.div
          key={currentIndex} // Reset animation completely when slide changes
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: slideDuration / 1000, ease: 'linear' }}
          className="h-full bg-white"
        />
      </div>
    </section>
  );
}
