import React from 'react';
import LogoImage from './LogoImage';
import MouseTrail from './MouseTrail';

export default function LogoSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
      <MouseTrail />
      <LogoImage />
      <h1 className="mt-8 text-8xl font-bold tracking-tighter text-white">
        aegis
      </h1>
      <p className="mt-4 text-xl text-gray-400">
        Securing Tomorrow's Digital Frontier
      </p>
    </div>
  );
}