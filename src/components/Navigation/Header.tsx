import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}