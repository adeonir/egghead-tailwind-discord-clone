const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Whitney', ...defaultTheme.fontFamily.sans],
        title: ['Ginto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: '#5865f2',
        gray: {
          50: '#ecedee',
          100: '#dcddde',
          200: '#b9bbbe',
          300: '#8e9297',
          400: '#72767d',
          500: '#5c6067',
          600: '#464950',
          700: '#36393f',
          800: '#2f3136',
          900: '#202225',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
