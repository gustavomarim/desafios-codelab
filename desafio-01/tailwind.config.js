/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        dark: {
          10: "#121214",
          20: "#17171A",
          30: "#202024",
          40: "#252529",
          50: "#AFABB6",
          60: "#FFFFFF",
        },
        brandColor: '#E07B67'
      },
    },
  },
  plugins: [],
};
