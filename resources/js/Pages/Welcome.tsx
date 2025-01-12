import React from "react";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";
import GameSection from "@/Components/GameSection";
import Profile from "@/Components/Profile";

const Welcome = () => {
    return (
        <div className="flex bg-dark-bg w-full min-h-screen flex-col items-center justify-start overflow-x-hidden scrollbar-y-hidden overflow-y-auto z-10">
            <Navbar />
            <Banner />
            <Profile />
            <GameSection />
            <div className="flex w-full h-screen flex-col items-center justify-center bg-gray-300">
                <h2 className="text-3xl font-bold mb-4">Another Section</h2>
                <p className="text-lg mb-4">This is another section below the game section. Add more content here.</p>
                <p className="text-lg mb-4">Scroll down to see more content.</p>
                <p className="text-lg mb-4">You can add more sections as needed.</p>
            </div>
        </div>
    );
};

export default Welcome;