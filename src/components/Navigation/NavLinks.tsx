import React from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#roi', label: 'ROI' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' }
];

export default function NavLinks() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    
    // Wait for next tick to ensure DOM is ready
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map(({ href, label }) => (
        <a 
          key={href}
          href={href}
          onClick={(e) => scrollToSection(e, href)}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}