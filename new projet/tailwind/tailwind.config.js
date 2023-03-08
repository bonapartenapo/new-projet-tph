/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:
    {
      'sm': '640px',
      // => @media(min-width: 640px){...}

      'md': '768px',
      // => @media(min-width: 640px){...}

      'lg': '1024px',
      // => @media(min-width: 640px){...}

      'xl': '1280px',
      // => @media(min-width: 640px){...}

      '2xl': '1536px',
      // => @media(min-width: 640px){...}
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}