/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "light-green": "#9FEF00",
      "dark-green": "#4A8C00",
      "dark-grey": "#0A0A0A",
      "white": "#FFFFFF",
    },
    fontFamily: {
      "ubuntu": ["Ubuntu"],
      "sans": ["Ubuntu"]
    }
  },
  plugins: [],
}

