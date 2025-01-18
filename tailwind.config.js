/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif']
      }
    },
    colors: {
      "golden": "#A57748",
      "golden-light": "#B69B6C",
      "golden-dark": "#925F31",
      "white": "#FFF",
      "transparent": "transparent",
    },
    backgroundImage: {
      "hero": "url('/assets/advogados-associados-hero.jpg')"
    }
  },
  plugins: [],
};