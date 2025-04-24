import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#fff',
                primary: '#0073bc',
                secondary: '#2c1b48',
                accent: '#ff9776',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            lineHeight: {
                normal: '1.4',
            },
            fontSize: {
                base: '16px',
                h1: '2.5rem',
                small: '0.8em',
                nav: '100%',
            },

            boxSizing: {
                border: 'border-box',
            },
        },
    },
};

export default config;