import React from 'react';

const navigation = {
  main: [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'ROI', href: '#roi' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function FooterNav() {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        Navigation
      </h3>
      <ul className="space-y-3">
        {navigation.main.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}