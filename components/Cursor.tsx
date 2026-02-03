import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Cursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  // Smooth mouse movement
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for interactive elements
      if (target.closest('button') || target.closest('a') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Check for data-hover-text attribute
      const hoverTarget = target.closest('[data-hover-text]') as HTMLElement;
      if (hoverTarget) {
        setHoverText(hoverTarget.getAttribute('data-hover-text') || '');
        setIsHovered(true);
      } else {
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 4 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.2 }}
        className="w-5 h-5 bg-white rounded-full flex items-center justify-center overflow-hidden"
      >
        {hoverText && (
          <span className="text-[4px] font-bold text-black uppercase tracking-tighter leading-none px-1 text-center">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Outer ring for subtle effect */}
      <motion.div
        animate={{
          scale: isHovered ? 1.5 : 1.2,
          opacity: isHovered ? 0.5 : 0
        }}
        className="absolute inset-0 rounded-full border border-white/50 w-full h-full"
      />
    </motion.div>
  );
};
