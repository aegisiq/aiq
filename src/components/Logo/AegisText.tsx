import React from 'react';
import { motion } from 'framer-motion';
import styles from './AegisText.module.css';

export default function AegisText() {
  const letters = 'AEGIS'.split('');

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.textWrapper}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`${styles.letter} ${letter === 'A' ? styles.letterA : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}