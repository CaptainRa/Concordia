import React from "react";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import GameSection from "@/Components/GameSection";
import Profile from "@/Components/Profile";
import Footer from "@/Components/Footer";
import Scheduling from "@/Components/Scheduling";
import SpotifyPlayer from "@/Components/Spotify";
import SpotifyPlayerComponent from "@/Components/SpotifyPlayer";
import { Stars } from "@/Components/Stars";

const Welcome = () => {
    return (
        <div className="flex w-full bg-black  min-h-screen flex-col items-center justify-start overflow-x-hidden scrollbar-y-hidden overflow-y-auto z-10">
            <Stars />
            <Navbar />
            <Banner />
            <GameSection />
            <Scheduling />
            <Profile />
            {/* <SpotifyPlayer />
            <SpotifyPlayerComponent /> */}
            
            {/* <div className="flex w-full h-screen flex-col items-center justify-center bg-gray-300">
                <h2 className="text-3xl font-bold mb-4">Another Section</h2>
                <p className="text-lg mb-4">This is another section below the game section. Add more content here.</p>
                <p className="text-lg mb-4">Scroll down to see more content.</p>
                <p className="text-lg mb-4">You can add more sections as needed.</p>
                <p className="text-lg mb-4">This is a placeholder section.</p>
            </div> */}

            <Footer />
        </div>
    );
};

export default Welcome;