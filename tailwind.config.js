
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgr: "#0A0A0A",
        txt: "#FFFFFF",
        primary: "#9FEF00",
        secondary: "#0F0F0F"
    },
    fontFamily: {
      "sans": ["Ubuntu"]
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  }
}

