/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "primary-color": "#7CA2F4",
        "black-primary": "#121214",
        "gray-primary": "#F3F7FF",
      },
      content: {
        "jordan-logo": 'url("/src/assets/icons/jordan-icon.svg")',
      },
    },
  },
  plugins: [],
};
