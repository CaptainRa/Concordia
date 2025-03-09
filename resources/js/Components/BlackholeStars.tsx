import React, { useMemo } from 'react';


const generateStars = (count: number, max: number = 500): string => {
  let shadows = '';
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * max) + 1;
    const y = Math.floor(Math.random() * max) + 1;
    shadows += `${x}px ${y}px #FFF`;
    if (i < count - 1) shadows += ', ';
  }
  return shadows;
};

export const BlackHoleStars = () => {
  const starsSmall = useMemo(() => generateStars(100), []);
  const starsMedium = useMemo(() => generateStars(200), []);
  const starsBig = useMemo(() => generateStars(100), []);

  return (
    <div className='h-full w-full'>
      {/* Small stars */}
      <div
        className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent animate-animStar50"
        style={{ boxShadow: starsSmall }}
      />
      <div
        className="absolute top-[2000px] left-0 w-[1px] h-[1px] bg-transparent animate-animStar50"
        style={{ boxShadow: starsSmall }}
      />

      {/* Medium stars */}
      <div
        className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent animate-animStar100"
        style={{ boxShadow: starsMedium }}
      />
      <div
        className="absolute top-[2000px] left-0 w-[2px] h-[2px] bg-transparent animate-animStar100"
        style={{ boxShadow: starsMedium }}
      />

      {/* Big stars */}
      <div
        className="absolute top-0 left-0 w-[3px] h-[3px] bg-transparent animate-animStar150"
        style={{ boxShadow: starsBig }}
      />
      <div
        className="absolute top-[2000px] left-0 w-[3px] h-[3px] bg-transparent animate-animStar150"
        style={{ boxShadow: starsBig }}
      />
    </div>
  );
};