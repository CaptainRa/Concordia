// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useScroll, motion } from "framer-motion";
// import { OrbitControls } from "@react-three/drei";

// // Planets info
// const planets = [
//     { name: "Mercury", color: 0xaaaaaa, distance: 2 },
//     { name: "Venus", color: 0xffcc00, distance: 4 },
//     { name: "Earth", color: 0x0000ff, distance: 6 },
//     { name: "Mars", color: 0xff0000, distance: 8 },
//     { name: "Jupiter", color: 0xffa500, distance: 10 },
//     { name: "Saturn", color: 0xd2b48c, distance: 12 },
//     { name: "Uranus", color: 0x00ffff, distance: 14 },
//     { name: "Neptune", color: 0x191970, distance: 16 },
// ];

// // Generate random stars
// const Stars = () => {
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 1000;
//     const positions = new Float32Array(starCount * 3);

//     for (let i = 0; i < starCount; i++) {
//         const radius = Math.random() * 50 + 50;
//         const theta = Math.random() * 2 * Math.PI;
//         const phi = Math.random() * Math.PI;

//         positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//         positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//         positions[i * 3 + 2] = radius * Math.cos(phi);
//     }

//     starGeometry.setAttribute(
//         "position",
//         new THREE.BufferAttribute(positions, 3)
//     );

//     return (
//         <points>
//             <bufferGeometry attach="geometry" {...starGeometry} />
//             <pointsMaterial
//                 attach="material"
//                 color="white"
//                 size={0.5}
//                 sizeAttenuation={true}
//             />
//         </points>
//     );
// };

// const Planet = ({ color, distance }: { color: number; distance: number }) => {
//     const ref = useRef<THREE.Mesh>(null);
//     useFrame(({ clock }) => {
//         if (ref.current) {
//             ref.current.rotation.y = clock.getElapsedTime();
//         }
//     });
//     return (
//         <mesh ref={ref} position={[distance, 0, 0]}>
//             <sphereGeometry args={[1, 32, 32]} />
//             <meshStandardMaterial color={color} />
//         </mesh>
//     );
// };

// const SolarSystem = () => {
//     const { scrollYProgress } = useScroll();
//     const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const sectionIndex = Math.floor(
//                 window.scrollY / window.innerHeight
//             );
//             setCurrentPlanetIndex(sectionIndex % planets.length);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const currentPlanet = planets[currentPlanetIndex];

//     return (
//         <div className="relative h-[800vh] w-full">
//             <Canvas camera={{ position: [0, 0, 30] }}>
//                 <ambientLight intensity={0.5} />
//                 <pointLight position={[0, 0, 30]} intensity={1} />
//                 <Stars />
//                 {planets.map((planet, index) => (
//                     <Planet
//                         key={planet.name}
//                         color={planet.color}
//                         distance={planet.distance}
//                     />
//                 ))}
//                 <OrbitControls />
//             </Canvas>
//             <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
//                 <motion.h1
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                     className="text-5xl font-bold"
//                 >
//                     {currentPlanet.name}
//                 </motion.h1>
//             </div>
//             {planets.map((planet, index) => (
//                 <section
//                     key={index}
//                     className="h-screen flex items-center justify-center text-white text-3xl"
//                     style={{ background: "transparent" }}
//                 >
//                     {planet.name}
//                 </section>
//             ))}
//         </div>
//     );
// };

// export default SolarSystem;
