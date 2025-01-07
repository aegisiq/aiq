import React from 'react';
import { motion } from 'framer-motion';

export default function LogoImage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img 
        src="/logo.svg" 
        alt="Aegis" 
        className="w-32 h-32 md:w-40 md:h-40 object-contain"
        whileHover={{ 
          filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))',
          transition: { duration: 0.2 }
        }}
      />
    </motion.div>
  );
}