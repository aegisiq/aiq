import React from 'react';
import { Twitter } from 'lucide-react';

export default function FooterSocial() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        Connect With Us
      </h3>
      <div className="space-y-3">
        <a
          href="https://x.com/BradHoffmanAIQ"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5 group-hover:text-purple-400 transition-colors duration-300" />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  );
}