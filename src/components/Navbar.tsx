import React from 'react';
import { Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-opacity-90 bg-black backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">Aegis</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#technology" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Technology</a>
              <a href="#case-studies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Case Studies</a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About Us</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}