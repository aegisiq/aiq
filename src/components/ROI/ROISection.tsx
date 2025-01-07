import React from 'react';
import ROICalculator from './Calculator/ROICalculator';
import LogoCarousel from './LogoCarousel/LogoCarousel';
import SectionTransition from '../Layout/SectionTransition';

export default function ROISection() {
  return (
    <SectionTransition id="roi" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Calculate Your ROI
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how much you could save with our AI-powered solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ROICalculator />
        </div>

        <div className="mt-24">
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Trusted by Industry Leaders
          </h3>
          <LogoCarousel />
        </div>
      </div>
    </SectionTransition>
  );
}