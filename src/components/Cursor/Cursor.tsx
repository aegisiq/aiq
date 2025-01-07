import React, { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export default function Cursor() {
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return <div ref={shadowRef} className={styles.cursorShadow} />;
}