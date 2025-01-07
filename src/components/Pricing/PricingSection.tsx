import React from 'react';
import PricingTier from './PricingTier';
import PricingCarousel from './PricingCarousel';
import SectionTransition from '../Layout/SectionTransition';
import { pricingTiers } from './pricingData';

export default function PricingSection() {
  return (
    <SectionTransition className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <PricingCarousel />
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <PricingTier key={tier.name} {...tier} />
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}