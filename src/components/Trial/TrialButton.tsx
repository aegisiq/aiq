import React, { useState } from 'react';
import TrialModal from './TrialModal';

export default function TrialButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
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