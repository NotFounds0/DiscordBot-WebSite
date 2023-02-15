/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bg-bluee': '#1633b5',
        "orange": '#ff7819'
      },
      colors: {
        'bluee': '#1633b5',
        'orange': '#ff7819'
      },
    },
  },
  plugins: [],
}
