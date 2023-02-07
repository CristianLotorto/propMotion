/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width:{
        '33':'8.4375rem',
      },

// Font family for buttons and logo Text.
      fontFamily:{
        'quantico':['Quantico', 'sans-serif'],
        'sawarabi':['Sawarabi Mincho', 'serif']
      },

// MaxWidth porcentual. 
      maxWidth:{
        '1/3':'30%',
        '2/3':'60%',
        '4/5':'80%',
      },

      margin:{
        '15':'60px',
      },

      minHeight:{
        '250':'250px',
      }
      
    },
  },
  plugins: [],
}
