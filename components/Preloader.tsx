'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run the preloader once per session
    const hasLoaded = sessionStorage.getItem('whelzy_preloaded');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    let current = 0;
    const updateProgress = () => {
      current += Math.floor(Math.random() * 15) + 5;
      
      if (current >= 100) {
        setProgress(100);
        sessionStorage.setItem('whelzy_preloaded', 'true');
        setTimeout(() => setIsLoading(false), 500); // Hold at 100% briefly
      } else {
        setProgress(current);
        setTimeout(updateProgress, Math.random() * 120 + 30);
      }
    };
    
    // Start after a tiny delay
    setTimeout(updateProgress, 200);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#1a1a1a] text-white"
        >
          <div className="font-mono text-6xl md:text-9xl font-bold tracking-tighter">
            {progress}%
          </div>
          <motion.div 
            className="absolute bottom-12 font-mono text-[10px] tracking-[0.3em] uppercase text-white/50"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Initializing Portfolio
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
