module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
        width: {
          '11rem': '11rem',
      },
      fontFamily: {
        'times': ['"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
