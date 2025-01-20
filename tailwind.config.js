/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair": ['Playfair Display', 'serif'],
        "roboto": ['Roboto', 'serif'],
        "roboto-bold": ['Roboto Bold', 'serif'],
        "playfair-light": ['Roboto Light', 'serif'],
      }
    },
    colors: {
      "golden": "#A57748",
      "golden-light": "#B69B6C",
      "golden-dark": "#925F31",
      "yellow-light": "#FFF9EB",
      "gray-light": "#ddd",
      "gray-dark": "#444",
      "white": "#FFF",
      "transparent": "transparent",
    },
    backgroundImage: {
      "hero": "url('/assets/advogados-associados-hero.jpg')",
      "civil": "url('/assets/direito-civil.jpg')",
      "empresarial": "url('/assets/direito-empresarial.jpg')",
      "trabalhista": "url('/assets/direito-trabalhista.jpg')",
      "tributario": "url('/assets/direito-tributario.jpg')",
      "contato": "url('/assets/entre-em-contato.jpg')",
    }
  },
  plugins: [],
};