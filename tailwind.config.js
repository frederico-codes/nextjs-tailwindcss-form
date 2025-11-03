/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        app: 'minmax(18rem, 20rem) 1fr',
        profile:'min-content 1fr min-content',
      },

      maxWidth:{
        app:'700px',
      }
    },
  },
  plugins: [],
}

