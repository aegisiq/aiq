import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { clientLogos } from './clientLogos';

export default function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    let startTime: number;
    const duration = 15000; // 4 seconds per scroll
    const pixelsPerSecond = carousel.scrollWidth / (duration / 1000);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      carousel.scrollLeft = (elapsed * pixelsPerSecond / 1000) % carousel.scrollWidth;
      
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        startTime = timestamp;
        carousel.scrollLeft = 0;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      startTime = 0;
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel?.removeEventListener('mouseenter', handleMouseEnter);
      carousel?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden bg-black/10 backdrop-blur-sm rounded-xl"
      >
        <div
          ref={carouselRef}
          className="flex items-center space-x-12 py-8 px-6 overflow-x-hidden"
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 w-auto object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030014] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030014] to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}