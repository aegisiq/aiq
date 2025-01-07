import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AegisText from './AegisText';
import SplineBackground from '../Background/SplineBackground';

export default function TitleSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      <SplineBackground />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <AegisText />
          
          <motion.p 
            className="text-base sm:text-xl text-gray-400 mt-4 mb-8 px-4 max-w-sm sm:max-w-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Stay Ahead, Scale Faster
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a 
              href="#services"
              className="w-full sm:w-auto px-6 py-3 min-h-touch bg-black/50 text-gray-300 rounded-full text-base backdrop-blur-sm border border-white/10 hover:bg-black/70 transition-all text-center"
            >
              our services
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 min-h-touch bg-black/50 text-purple-400 rounded-full text-base backdrop-blur-sm border border-purple-500/50 hover:border-purple-400/70 transition-all flex items-center justify-center gap-2 group"
            >
              contact us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}