import React from 'react';
import { Shield, Lock, FileSearch, Bell } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Threat Protection',
    description: 'Advanced threat detection and prevention systems to safeguard your digital assets.',
  },
  {
    icon: Lock,
    title: 'Access Management',
    description: 'Secure identity and access management solutions for enterprise security.',
  },
  {
    icon: FileSearch,
    title: 'Security Audits',
    description: 'Comprehensive security assessments and compliance auditing services.',
  },
  {
    icon: Bell,
    title: '24/7 Monitoring',
    description: 'Round-the-clock security monitoring and incident response.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-b from-purple-900/50 to-black border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}