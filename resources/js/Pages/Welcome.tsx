import React from "react";
import { useForm, Link } from "@inertiajs/react";
import { FormEventHandler, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import ParallaxText from "@/Components/AnimatedImage";
import { GoogleLogin } from "@react-oauth/google";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/Banner";

const Welcome = ( ) => {

    
    

    return(
        <div className="flex bg-dark-bg w-full h-screen flex-col items-center justify-start overflow-x-hidden z-10">
            <Navbar />
            <Banner />
        </div>
    );
};


export default Welcome;