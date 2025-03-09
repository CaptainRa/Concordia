import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Button } from './ui/button';
import { Link } from 'react-scroll';
import { CiPlay1, CiPause1 } from "react-icons/ci";

const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(prev => !prev);
  };

  return (
    <div
      className="relative bg-[radial-gradient(at_0%_0%,_hsla(225,39%,30%,1)_0,transparent_50%),_radial-gradient(at_50%_0%,_hsla(253,16%,7%,1)_0,transparent_50%),_radial-gradient(at_100%_100%,_hsla(339,79%,10%,1)_0,transparent_50%)] flex w-full flex-col min-h-screen items-center justify-center text-center"
      id="hero-section"
      ref={ref}
    >
     
      <audio ref={audioRef} src="/audio/Interstellar Main Theme - Extra Extended - Soundtrack by  Hans Zimmer.mp3" loop style={{ display: 'none' }} />

      <motion.div
        className="absolute inset-0 w-full h-full flex items-center justify-center bg-center bg-cover z-1"
        // style={{ backgroundImage: "url('images/your-background.jpg')", y: backgroundY }}
      />

<motion.h1
  className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent text-8xl font-semibold relative z-4 self-center"
  style={{
    y: textY,
    textShadow: "0 0 900px rgba(239,68,68,0.4), 0 0 30px rgba(59,130,246,0.4)"
  }}
>
  CONCORDIA
</motion.h1>


      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-center bg-cover z-7" />

      <motion.div
        className="w-full h-full items-center flex flex-col justify-end"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 100 : -200 }}
        transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.05 }}
      >
        <Link to="game-section" smooth delay={100}>
          <Button
            className="animate-bounce bg-transparent backdrop-blur-xl border border-dark-fg w-[170px] h-[45px] text-white px-8 py-4 rounded-3xl z-4 relative"
            variant="ghost"
          >
            Get Started
          </Button>
        </Link>
        <svg className="animate-bounce w-6 h-6" />
      </motion.div>

      
      <div className="w-full flex flex-row items-center justify-center bottom-24 absolute">
        <Button
          onClick={toggleAudio}
          className="bg-transparent backdrop-blur-xl border border-dark-fg w-[45px] h-[45px] text-white rounded-3xl z-4"
          variant="default"
        >
          {isPlaying ? (
            <CiPause1 className="text-white w-24 h-24" />
          ) : (
            <CiPlay1 className="text-white w-24 h-24" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
