import React, { useMemo } from 'react';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';



const generateStars = (count: number, max: number = 10000): string => {
  let shadows = '';
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * max) + 1;
    const y = Math.floor(Math.random() * max) + 1;
    shadows += `${x}px ${y}px #FFF`;
    if (i < count - 1) shadows += ', ';
  }
  return shadows;
};

export const Stars = () => {
  const starsSmall = useMemo(() => generateStars(9500), []);
  const starsMedium = useMemo(() => generateStars(6500), []);
  const starsBig = useMemo(() => generateStars(4000), []);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div className='min-h-screen w-full absolute inset-0 z-0' ref={ref}>
      {/* Small stars */}
      <motion.div
        className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent animate-animStar50"
        style={{ boxShadow: starsSmall, y: backgroundY }}

      />
      <motion.div
        className="absolute top-[2000px] left-0 w-[1px] h-[1px] bg-transparent animate-animStar50"
        style={{ boxShadow: starsSmall, y: textY }}
      />

      {/* Medium stars */}
      <motion.div
        className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent animate-animStar100"
        style={{ boxShadow: starsMedium, y: textY }}
      />
      <motion.div
        className="absolute top-[2000px] left-0 w-[2px] h-[2px] bg-transparent animate-animStar100"
        style={{ boxShadow: starsMedium, y: backgroundY}}
      />

      {/* Big stars */}
      <motion.div
        className="absolute top-0 left-0 w-[3px] h-[3px] bg-transparent animate-animStar150"
        style={{ boxShadow: starsBig, y:backgroundY }}
      />
      <motion.div
        className="absolute top-[2000px] left-0 w-[3px] h-[3px] bg-transparent animate-animStar150"
        style={{ boxShadow: starsBig, y:textY }}
      />
    </div>
  );
};