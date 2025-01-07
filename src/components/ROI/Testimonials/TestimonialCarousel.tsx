import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    company: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
    quote: "Implementing Aegis's AI solutions saved us over 20 hours per week in manual processes.",
    results: 'Increased efficiency by 40%'
  },
  {
    company: 'Global Dynamics',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
    quote: "The ROI was immediate. We've seen a 25% increase in customer satisfaction scores.",
    results: 'Saved $150K annually'
  },
  {
    company: 'Innovate Labs',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop',
    quote: "Their AI automation tools have transformed our workflow completely.",
    results: 'Reduced manual tasks by 60%'
  }
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="p-6 rounded-xl bg-gradient-card border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
      <div className="relative h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
          >
            <img
              src={testimonials[current].logo}
              alt={testimonials[current].company}
              className="w-16 h-16 rounded-full mb-6"
            />
            <p className="text-xl text-white mb-6 italic">
              "{testimonials[current].quote}"
            </p>
            <h4 className="text-lg font-semibold text-purple-400 mb-2">
              {testimonials[current].company}
            </h4>
            <p className="text-gray-400">
              {testimonials[current].results}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setCurrent(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}