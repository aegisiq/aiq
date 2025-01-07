import { useEffect, useRef, useState } from 'react';

interface ImageLoaderOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useImageLoader(options: ImageLoaderOptions = {}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && imageRef.current) {
        const img = imageRef.current;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.onload = () => setIsLoaded(true);
        }
        
        observer.unobserve(img);
      }
    }, options);

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [options]);

  return { imageRef, isLoaded };
}

export function generateSrcSet(url: string): string {
  const sizes = [320, 640, 768, 1024, 1280];
  return sizes
    .map(size => `${getOptimizedImageUrl(url, size)} ${size}w`)
    .join(', ');
}

function getOptimizedImageUrl(url: string, width: number): string {
  // Add WebP support and width parameter to Unsplash URLs
  if (url.includes('unsplash.com')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}w=${width}&fm=webp&q=80`;
  }
  return url;
}