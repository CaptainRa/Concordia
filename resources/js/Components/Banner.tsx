import React, {useRef} from 'react';
import {motion, useScroll, useTransform, useInView} from 'framer-motion';


const Banner = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100"]);
    const Text = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    const isInView = useInView(ref, {once: true});

    return (
        <div 
        className="relative flex w-full flex-col min-h-screen items-center justify-center text-center z-5"
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
          
        </div>
    );
}

export default Banner;