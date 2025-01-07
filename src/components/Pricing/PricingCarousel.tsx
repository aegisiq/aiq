import React, { useRef, useState } from 'react';
import { motion, PanInfo, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PricingTier from './PricingTier';
import { pricingTiers } from './pricingData';

export default function PricingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (info.offset.x < 0 && currentIndex < pricingTiers.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    setIsDragging(false);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'next' && currentIndex < pricingTiers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative">
      <div 
        ref={constraintsRef}
        className="overflow-hidden touch-pan-y"
      >
        <motion.div
          className="flex"
          style={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="w-full shrink-0 px-4"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              style={{
                x: 0,
                scale: currentIndex === index ? 1 : 0.9,
                opacity: currentIndex === index ? 1 : 0.5,
              }}
              transition={{ duration: 0.2 }}
            >
              <PricingTier {...tier} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={() => navigate('prev')}
          disabled={currentIndex === 0}
          className="p-2 rounded-full bg-black/50 text-white disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous plan"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={() => navigate('next')}
          disabled={currentIndex === pricingTiers.length - 1}
          className="p-2 rounded-full bg-black/50 text-white disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next plan"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {pricingTiers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-500' : 'bg-purple-500/30'
            }`}
            aria-label={`Go to plan ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}