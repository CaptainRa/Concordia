import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                light: {
                    bg: "#ffffff",
                    fg: "#000004",
                    accent: "#a4a1a6"

                },
                dark : {
                    bg: "#2d2e2f",
                    fg: "#f9f8ef",
                    accent: "#bea33b"
                }

            }
        },
    },

    plugins: [forms],
};
