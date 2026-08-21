'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch devices so we don't show the custom cursor
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorEl = target.closest('[data-cursor]');
      
      if (cursorEl) {
        setIsHovering(true);
        setHoverText(cursorEl.getAttribute('data-cursor') || '');
      } else if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setHoverText('');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    // Also add a global style to hide the default cursor on desktop
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full mix-blend-difference bg-white text-black font-mono text-[10px] font-bold tracking-widest overflow-hidden"
      animate={{
        x: position.x - (isHovering ? (hoverText ? 40 : 20) : 6),
        y: position.y - (isHovering ? (hoverText ? 40 : 20) : 6),
        width: isHovering ? (hoverText ? 80 : 40) : 12,
        height: isHovering ? (hoverText ? 80 : 40) : 12,
      }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.1 }}
    >
      <AnimatePresence>
        {isHovering && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute"
          >
            {hoverText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
