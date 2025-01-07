import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Shield className="mx-auto w-20 h-20 text-blue-500 mb-8" />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Stay Ahead, Scale Faster
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Advanced cybersecurity solutions powered by next-generation technology to protect your enterprise assets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center">
            Get Started
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}