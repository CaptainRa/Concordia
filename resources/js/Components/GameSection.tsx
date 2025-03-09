import { motion, useInView, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { FaStar } from "react-icons/fa";
import Typewriter from "./TypeWritter";
import CenteredCarousel from "./CenteredCarousel";
import { Canvas } from "@react-three/fiber";
import Scene from "./Jupiter";

const GameSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const Text = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    const games = [
        { name: "Minesweeper", image: "images/Image Vector.png", rating: 4 },
        { name: "Chess", image: "images/Image Vector.png", rating: 4.5 },
        { name: "KATLA", image: "images/Image Vector.png", rating: 4.5 },
        {
            name: "8 Queens Challenge",
            image: "images/Image Vector.png",
            rating: 4.5,
        },
        { name: "Sudoku", image: "images/Image Vector.png", rating: 4.5 },
        { name: "Memory Game", image: "images/Image Vector.png", rating: 4.5 },
    ];

    const rows = [];
    for (let i = 0; i < games.length; i += 3) {
        rows.push(games.slice(i, i + 4));
    }

    return (
        <motion.div
            ref={ref}
            className="flex gap-8 w-full h-full flex-row items-center justify-start py-20 bg-cover bg-center bg-red-flare z-25 overflow-y-auto overflow-x-hidden"
            id="game-section"
            style={{ backgroundImage: "url(images/Landscape Vector.jpg)", height: "100vh" }}
        >
            <div className="w-8/12 h-full flex flex-col items-start justify-center">
                <motion.h1
                    className="text-dark-accent text-4xl font-semibold px-12 w-full  "
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -200,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.17, 0.55, 0.55, 1],
                        delay: 0.05,
                    }}
                >
                    <div className="flex relative">
                        Welcome{" "}
                        <Typewriter text=" to Concordia" delay={100} infinite />
                    </div>
                </motion.h1>
                <motion.p
                    className="text-dark-fg text-lg font-normal self-start pl-12 w-full justify-center text-balance"
                    initial={{ opacity: 0, y: -200 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -200,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.17, 0.55, 0.55, 1],
                        delay: 0.1,
                    }}
                >
                    Engage your mind with an array of interactive challenges
                    designed to test strategy, logic, and creativity. Immerse
                    yourself in timeless puzzles that entertain, educate, and
                    inspire mental sharpness.
                </motion.p>
             
                <CenteredCarousel />
            </div>
            <div className="w-4/12 h-full flex items-center justify-center">
                <div className="container w-full h-full overflow-hidden absolute">
                    <Canvas gl={{ antialias: false }}>
                        <Scene />
                    </Canvas>

                </div>
                
            </div>
        </motion.div>
    );
};

export default GameSection;