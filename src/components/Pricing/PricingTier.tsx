import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingTier as PricingTierType } from './types';
import { motion } from 'framer-motion';
import TrialButton from '../Trial/TrialButton';

export default function PricingTier({ name, price, description, features, isPopular }: PricingTierType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative mt-6 group p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-black/50 border transition-all duration-300
        ${isPopular ? 'border-purple-500/50' : 'border-purple-500/10 hover:border-purple-500/30'}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-600 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4" />
          <span className="text-sm font-medium whitespace-nowrap">Most Popular</span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="text-3xl font-bold text-white">{price}</div>
      </div>
      
      <TrialButton />

      <ul className="space-y-4 mt-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 shrink-0 ${isPopular ? 'text-purple-400' : 'text-purple-500/60'}`} />
            <span className="text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}