module.exports = {
  purge: {
    node: 'layers',
    content: [
      "./*.{html,js}",
      "./javascript/**/*.{html,js}"
    ],
  },
  theme: {
    fontFamily: {
      sans: ['Cairo', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      color: {}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}