import React from 'react';
import { Blocks, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function DataBlockchainSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ServiceCard
        icon={Blocks}
        title="Blockchain Integration"
        description="Secure and transparent blockchain solutions to modernize your business operations and enhance trust. Implement smart contracts and decentralized applications tailored to your needs."
      />

      <ServiceCard
        icon={BarChart3}
        title="Data-Driven Insights"
        description="Transform raw data into actionable intelligence with advanced analytics and visualization tools. Leverage AI-powered insights to make informed business decisions."
      />
    </div>
  );
}