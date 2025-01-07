import React from 'react';
import { motion } from 'framer-motion';

export default function OutlinedText() {
  return (
    <motion.h1 
      className="text-[16rem] font-bold leading-none tracking-tighter transition-all duration-300"
      style={{
        WebkitTextStroke: '2px rgba(255, 255, 255, 0.2)',
        color: 'transparent'
      }}
      whileHover={{
        WebkitTextStroke: '3px rgba(147, 51, 234, 0.5)',
        background: 'linear-gradient(135deg, #4C1D95, #7E22CE)',
        WebkitBackgroundClip: 'text',
        transition: { duration: 0.3 }
      }}
    >
      AEGIS
    </motion.h1>
  );
}