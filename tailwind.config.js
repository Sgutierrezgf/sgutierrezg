/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
