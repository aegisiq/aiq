import React from 'react';
import { Check, Star } from 'lucide-react';
import { PricingTier } from './types';

export default function PricingTierCompact({ name, price, description, features, isPopular }: PricingTier) {
  return (
    <div className={`p-4 rounded-lg bg-black/30 border transition-all duration-300 
      ${isPopular ? 'border-purple-500/40' : 'border-purple-500/20'}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-white">{name}</h4>
          {isPopular && (
            <div className="px-2 py-0.5 bg-purple-600/30 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 text-purple-400" />
              <span className="text-xs text-purple-400">Popular</span>
            </div>
          )}
        </div>
        <span className="text-lg font-bold text-white">{price}</span>
      </div>
      
      <p className="text-sm text-gray-400 mb-3">{description}</p>
      
      <div className="grid grid-cols-2 gap-2">
        {features.slice(0, 6).map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 shrink-0 text-purple-500/60" />
            <span className="text-sm text-gray-400">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}