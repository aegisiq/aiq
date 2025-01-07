import React from 'react';
import { MessageSquare, Users, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';
import DataBlockchainSection from './DataBlockchainSection';
import SectionTransition from '../Layout/SectionTransition';

const services = [
  {
    icon: MessageSquare,
    title: 'Sales Outreach',
    description: 'Automate and optimize your sales processes with AI-powered outreach campaigns that engage prospects at scale.',
  },
  {
    icon: Users,
    title: 'Customer Service Assistant',
    description: 'Provide 24/7 customer support with intelligent AI assistants that understand and resolve customer inquiries instantly.',
  },
  {
    icon: Database,
    title: 'Custom CRM',
    description: 'Tailor-made CRM solutions that integrate seamlessly with your workflow and provide actionable customer insights.',
  },
];

export default function ServicesSection() {
  return (
    <SectionTransition className="-mt-32 pt-48 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What we do
          </h2>
          <p className="text-gray-400">
            Empowering businesses with cutting-edge AI solutions and automation tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <DataBlockchainSection />
      </div>
    </SectionTransition>
  );
}