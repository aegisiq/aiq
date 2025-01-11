import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTransition({ 
  children, 
  className = ''
}: SectionTransitionProps) {
  return (
    <motion.section 
      className={`relative overflow-hidden min-h-[200px] ${className}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      {children}
    </motion.section>
  );
}
