import React from 'react';
import { motion } from 'framer-motion';
import { Review } from './types';

export default function ReviewCard({ company, logo, content, result }: Review) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="shrink-0 snap-center w-[400px] p-6 rounded-xl bg-gradient-card border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={logo}
          alt={company}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">{company}</h3>
          <p className="text-sm text-purple-400">{result}</p>
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed">{content}</p>
    </motion.div>
  );
}