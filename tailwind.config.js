/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "model-s": "url('assets/model-s.webp')",
        "model-y": "url('assets/model-y.webp')",
        accessories: "url('assets/accessories.webp')",
      },
    },
  },
  plugins: [],
};
