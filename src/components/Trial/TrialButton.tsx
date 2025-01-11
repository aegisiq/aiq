import React, { useState, useCallback } from 'react';
import TrialModal from './TrialModal';

export default function TrialButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use callback to ensure consistent handler reference
  const handleClick = useCallback(() => {
    console.log('Trial button clicked'); // Debug log
    setIsModalOpen(true);
  }, []);

  // Separate touch handler for mobile
  const handleTouch = useCallback((e: React.TouchEvent) => {
    e.preventDefault(); // Prevent double-firing on mobile
    console.log('Trial button touched'); // Debug log
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        onTouchEnd={handleTouch}
        className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300 cursor-pointer touch-manipulation"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        aria-label="Start 14-Day Free Trial"
      >
        Start 14-Day Free Trial
      </button>
      
      <TrialModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}