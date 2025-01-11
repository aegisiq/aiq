import { useState, useEffect, useRef } from 'react';

interface ImageLoaderOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useProgressiveImage(src: string, placeholder: string = '') {
  const [sourceLoaded, setSourceLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSourceLoaded(true);
  }, [src]);

  return sourceLoaded ? src : placeholder;
}

export function useImageLoader(options: ImageLoaderOptions = {}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && imageRef.current) {
        const img = imageRef.current;
        const src = img.getAttribute('data-src');
        
        if (src) {
          const tempImg = new Image();
          tempImg.onload = () => {
            img.src = src;
            setIsLoaded(true);
          };
          tempImg.onerror = () => setError(true);
          tempImg.src = src;
        }
        
        observer.unobserve(img);
      }
    }, { rootMargin: '50px', ...options });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { imageRef, isLoaded, error };
}