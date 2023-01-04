/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('/src/images/bg-image.png')",
      }
    },
  },
  plugins: [],
}
