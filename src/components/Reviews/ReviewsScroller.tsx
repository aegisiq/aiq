import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReviewCard from './ReviewCard';
import { reviews } from './reviewsData';

export default function ReviewsScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = direction === 'left' ? -400 : 400;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="shrink-0 w-8" aria-hidden="true" />
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
        <div className="shrink-0 w-8" aria-hidden="true" />
      </div>

      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#030014] to-transparent pl-2 pr-4 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#030014] to-transparent pr-2 pl-4 py-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />
      </button>
    </div>
  );
}