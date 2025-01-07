import React from 'react';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <img 
        src="/aegis-logo.svg" 
        alt="Aegis"
        className="w-6 h-6 filter invert brightness-0"
      />
      <span className="text-lg font-semibold tracking-tight">Aegis</span>
    </motion.div>
  );
}