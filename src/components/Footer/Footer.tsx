import React from 'react';
import FooterNav from './FooterNav';
import FooterSocial from './FooterSocial';
import FooterAddress from './FooterAddress';
import SectionTransition from '../Layout/SectionTransition';

export default function Footer() {
  return (
    <SectionTransition variant="bottom" className="relative mt-auto">
      <footer className="relative w-full" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            <FooterAddress />
            <FooterNav />
            <FooterSocial />
          </div>
          
          <div className="mt-12 pt-8 border-t border-purple-500/10">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Aegis Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </SectionTransition>
  );
}