import React from 'react';
import { MapPin } from 'lucide-react';

export default function FooterAddress() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <img 
          src="/aegis-logo.svg" 
          alt="Aegis"
          className="w-6 h-6 filter invert brightness-0"
        />
        <span className="text-lg font-semibold tracking-tight">Aegis</span>
      </div>
      
      <div className="flex items-start gap-3 text-gray-400">
        <MapPin className="w-5 h-5 shrink-0 mt-1" />
        <address className="not-italic">
          Eden Building<br />
          Irwell St, Salford<br />
          M3 5EN, United Kingdom
        </address>
      </div>
    </div>
  );
}