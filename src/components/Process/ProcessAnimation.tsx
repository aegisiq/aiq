import React from 'react';
import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';
import { ArrowRight, Search, Code, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'Understanding your needs and objectives',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Building custom AI solutions',
  },
  {
    icon: Zap,
    title: 'Integration',
    description: 'Seamless deployment into your workflow',
  },
  {
    icon: CheckCircle,
    title: 'Optimization',
    description: 'Continuous improvement and refinement',
  },
];

export default function ProcessAnimation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <ProcessStep
            icon={step.icon}
            title={step.title}
            description={step.description}
            delay={index * 0.2}
          />
          {index < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.1 }}
              className="hidden md:flex items-center justify-center absolute"
              style={{ left: `${(index + 1) * 25 - 12.5}%`, top: '50%' }}
            >
              <ArrowRight className="w-6 h-6 text-purple-500/50" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
