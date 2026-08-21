'use client';

import { motion } from 'framer-motion';

export default function Marquee() {
  const text = "AVAILABLE FOR FREELANCE WORK • LET'S CREATE TOGETHER • ";
  
  return (
    <div className="relative w-full overflow-hidden bg-[#e8e8e8] py-8 md:py-12 border-t border-black/10 flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        <div className="flex gap-4 font-serif text-5xl md:text-8xl font-bold uppercase tracking-tight text-black">
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </motion.div>
    </div>
  );
}
