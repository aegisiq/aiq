import React from 'react';
import { Calculator } from 'lucide-react';
import PricingTierCompact from './PricingTierCompact';
import { pricingTiers } from './pricingData';

export default function PricingContainer() {
  return (
    <div className="p-6 rounded-xl bg-gradient-card border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-semibold text-white">Pricing Plans</h3>
      </div>

      <div className="space-y-4">
        {pricingTiers.map((tier, index) => (
          <PricingTierCompact key={index} {...tier} />
        ))}
      </div>

      <button className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 mt-8">
        Schedule a Demo
      </button>
    </div>
  );
}