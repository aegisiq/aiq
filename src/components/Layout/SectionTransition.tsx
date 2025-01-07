import React from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'top' | 'bottom' | 'default';
}

export default function SectionTransition({ 
  children, 
  className = '',
  variant = 'default'
}: SectionTransitionProps) {
  const gradientClass = variant === 'top' 
    ? 'bg-gradient-section-top' 
    : variant === 'bottom'
    ? 'bg-gradient-section-bottom'
    : 'bg-gradient-section';

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${gradientClass} pointer-events-none z-0`} />
      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-glow opacity-50 pointer-events-none z-20" />
      <div className="relative z-30">{children}</div>
    </section>
  );
}