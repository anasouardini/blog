/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['index.astro', './src/**/*.{js,ts,jsx,tsx,html,astro}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(101 163 13)',
                dark: '#191919',
            },
            boxShadow: { '2xl': '0 0px 20px 30px rgb(0 0 0 / .4)' },
            spacing: {
                main: 'min(7%, 100px)',
            },
            animation: {
                'loadFromRight': 'loadFromRight .6s ease-in-out forwards',
                'loadFromLeft': 'loadFromLeft .3s ease-in-out forwards',
                'loadFromDown': 'loadFromDown .8s ease-in-out forwards',
                'loadFromUp': 'loadFromUp .8s ease-in-out forwards',

                'scaleFromCenter': 'scaleFromCenter .8s ease-in-out forwards',
            },
            keyframes: {
                'loadFromUp': {
                    '0%, 50%': { transform: 'translateY(-1000px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'loadFromDown': {
                    '0%, 50%': { transform: 'translateY(1000px)' },
                    '100%': { transform: 'translateY(0)' },
                },
                'loadFromRight': {
                    '0%, 20%': { transform: 'translateX(500px)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'loadFromLeft': {
                    '0%': { transform: 'translateX(-500px)' },
                    '100%': { transform: 'translateX(0)' },
                },

                'scaleFromCenter': {
                    '0%': { transform: 'scaleX(0)' },
                    '100%': { transform: 'scaleX(1)' },
                },
            }
        },
        screens: {
            'nav>': { max: '550px' },
            'astro>': { max: '380px' },
            'sxs>': { max: '300px' },
            'xs>': { max: '500px' },
            'sm>': { max: '640px' },
            'md>': { max: '768px' },
            'lg>': { max: '1024px' },
            'xl>': { max: '1280px' },

            'nav<': { min: '550px' },
            'astro<': { min: '380px' },
            'sxs<': { min: '300px' },
            'xs<': { min: '500px' },
            'sm<': { min: '641px' },
            'md<': { min: '768px' },
            'lg<': { min: '1024px' },
            'xl<': { min: '1280px' },
        },
    },
    plugins: [],
};
