import React from 'react';
import Header from './Navigation/Header';
import TitleSection from './Logo/TitleSection';
import ServicesSection from './Services/ServicesSection';
import ProcessSection from './Process/ProcessSection';
import ROISection from './ROI/ROISection';
import PricingSection from './Pricing/PricingSection';
import Footer from './Footer/Footer';
import Cursor from './Cursor/Cursor';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-white">
      <Cursor />
      <Header />
      <TitleSection />
      <ServicesSection />
      <ProcessSection />
      <ROISection />
      <PricingSection />
      <Footer />
    </div>
  );
}