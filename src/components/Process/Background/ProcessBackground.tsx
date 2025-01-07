import React from 'react';
import Spline from '@splinetool/react-spline';

export default function ProcessBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Spline Animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Yyeyzubyqr8rrLz8/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none', // Disables all user interaction
            transform: 'scale(1.6)', // Zoom in by scaling the Spline animation
            transformOrigin: 'center', // Ensures scaling is centered
          }}
        />
      </div>

      {/* Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
    </div>
  );
}
