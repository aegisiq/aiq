import React from 'react';
import { motion } from 'framer-motion';
import ProcessAnimation from './ProcessAnimation';
import ProcessBackground from './Background/ProcessBackground';

export default function ProcessSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <ProcessBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            A streamlined approach to implementing AI solutions
          </motion.p>
        </div>
        <ProcessAnimation />
      </div>
    </section>
  );
}