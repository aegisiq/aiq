import React from 'react';
import ReviewsScroller from './ReviewsScroller';
import SectionTransition from '../Layout/SectionTransition';

export default function ReviewsSection() {
  return (
    <SectionTransition className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how companies are transforming their operations with our AI solutions
          </p>
        </div>
        <ReviewsScroller />
      </div>
    </SectionTransition>
  );
}