import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export default function ProcessStep({ icon: Icon, title, description, delay }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative p-6 rounded-xl bg-gradient-to-b from-purple-900/20 to-black/50 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
    >
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/30 transition-all duration-300" />
        <Icon className="relative w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}