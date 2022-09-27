/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./templates/*.html", "./theme/**/*.html"],
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};