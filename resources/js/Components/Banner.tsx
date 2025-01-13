import React, {useRef} from 'react';
import {motion, useScroll, useTransform, useInView} from 'framer-motion';
import { Button } from './ui/button';
import {Link} from 'react-scroll';


const Banner = () => {

    const ref = useRef(null);
     const isInView = useInView(ref, { once: true, margin: '0px 0px -5% 0px' });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100"]);
    const Text = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div 
        className="relative flex w-full flex-col min-h-screen items-center justify-center text-center z-5"
        id='hero-section'
        ref={ref}
        >
            
            <motion.div
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-center bg-cover z-1"
                style={{ backgroundImage: "url('images/449061299_2873951776088559_7330006344373102702_n.webp.jpg')", y: backgroundY }}
            >
                
            </motion.div>
           
            <motion.h1
                className="text-white text-8xl font-semibold relative z-4 self-center "
                style={{ y: Text }}
                >

                    
                        CONCORDIA
                 
            </motion.h1>
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-center bg-cover z-7"
                style={{ backgroundImage: "url('images/Parallaxed.png')" }}
            >
              
            </div>
            <motion.div
                className='w-full h-full items-center flex flex-col justify-end'
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 100 : -200 }}
                transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1], delay: 0.05 }}
            >
                <Link to='game-section' smooth={true} delay={100}>

                    <Button
                        className="animate-bounce bg-transparent backdrop-blur-xl border border-dark-fg w-[170px] h-[45px] text-white px-8 py-4 rounded-3xl z-4 relative"
                        variant={"ghost"}
                       
                    >
                        Get Started
                    </Button>
                </Link>
                <svg className="animate-bounce w-6 h-6">
                
                </svg>
            </motion.div>
          
        </div>
    );
}

export default Banner;