/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "model-s": "url('../dist/assets/model-s.webp')",
        "model-y": "url('../dist/assets/model-y.webp')",
        accessories: "url('../dist/assets/accessories.webp')",
      },
    },
  },
  plugins: [],
};
