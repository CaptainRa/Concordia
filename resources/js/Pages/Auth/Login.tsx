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

const Login = ( {status, canResetPassword}: {status?: string, canResetPassword: boolean}) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

   

    

    return(
        <div className="flex bg-dark-bg w-full h-screen flex-row items-center justify-end overflow-x-hidden">
            <div className="flex w-full h-full items-center justify-center text-white z-1">
                {/* <ParallaxText baseVelocity={5}>

                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </ParallaxText> */}
            </div>
            
            <div className="flex w-3/5 bg-dark-fg h-full flex-col items-center justify-start py-12 gap-24 z-10">
                <div className="flex flex-col w-full items-center justify-center">

                    {/* <div className="w-12 h-12 rounded-full bg-dark-bg text-white"/> */}
                    <h1 className='text-4xl font-bold'>
                        Login
                    </h1>
                </div>
                <div className="flex flex-col w-full h-2/5 items-center justify-center gap-8">
                    <form onSubmit={submit} className='w-5/6 px-12'>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ms-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>

                  

                    
                </div>
                <div className="flex w-4/6 h-[60px] flex-row items-center justify-center bg-dark-fg border border-black rounded-xl">
                    <GoogleLogin onSuccess={() => {"Success"}}/>
                </div>

            </div>
        </div>
    );
};


export default Login;