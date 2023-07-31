/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
      },
      fontFamily: {
        sans: [
          '"Barlow Condensed"',
          'sans-serif'
        ],
        serif: [
          'Bellefair',
          'serif'
        ]
      },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '3.5rem',
        '4xl': '6.25rem',
        '5xl': '9.375rem'
      },
    },
  },
  plugins: [],
};

/*
  9.375rem
  6.25rem
  3.5rem
  2rem
  1.75rem
  1.125rem
  1rem
  0.875rem
*/
