module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-mono)']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  colors: {
    blue: '#2d3fd1'
  }
};