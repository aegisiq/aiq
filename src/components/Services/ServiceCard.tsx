import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({ icon: Icon, title, description, className = '' }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-black/50 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col ${className}`}
    >
      <div className="relative mb-4 sm:mb-6 inline-block">
        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/30 transition-all duration-300" />
        <Icon className="relative w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-purple-200 transition-colors duration-300 break-words">
        {title}
      </h3>
      
      <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 flex-grow break-words">
        {description}
      </p>
    </motion.div>
  );
}