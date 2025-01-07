import React from 'react';
import Header from './components/Navigation/Header';
import TitleSection from './components/Logo/TitleSection';
import ServicesSection from './components/Services/ServicesSection';
import ProcessSection from './components/Process/ProcessSection';
import ROISection from './components/ROI/ROISection';
import PricingSection from './components/Pricing/PricingSection';
import ContactSection from './components/Contact/ContactSection';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import PageWrapper from './components/Layout/PageWrapper';

export default function App() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-[#030014] text-white">
        <Cursor />
        <Header />
        <TitleSection />
        <ServicesSection />
        <ProcessSection />
        <ROISection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div>
    </PageWrapper>
  );
}