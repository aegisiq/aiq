import React, { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const POINT_LIFETIME = 35;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
      
      points.current.push({
        x: mousePos.current.x,
        y: mousePos.current.y,
        age: 0
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      points.current = points.current.filter(point => {
        point.age++;
        if (point.age > POINT_LIFETIME) return false;

        const opacity = 1 - (point.age / POINT_LIFETIME);
        const size = 3 * (1 - point.age / POINT_LIFETIME);
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(147, 51, 234, ${opacity})`;
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}