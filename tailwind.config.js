const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
      extend: {
        colors: {
          primary: '#4422EF',
        },
        transitionTimingFunction: {
          DEFAULT: 'ease-in-out',
        },
        transitionDuration: {
          DEFAULT: '350ms',
        },
      },
    },
    extend: {
      backgroundImage: {
        'auth-bg': 'linear-gradient(116deg, #0B0B0B 1.44%, #0C0C0C 102.26%)',
      },
      backgroundColor: {
        'auth-block': 'rgba(230, 230, 230, 0.05);',
        'btn-active': '#4422EF',
        'btn-hover': '#1F00BB',
        'gradient-color': 'rgba(68, 34, 239, 0.36);',
        'main-bg': '#121212',
        'gray-bg': '#1c1c1c',
      },
      borderColor: {
        'primary-active': '#4422EF',
        'error-color': '#E73A5F',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    }),
  ],
};
