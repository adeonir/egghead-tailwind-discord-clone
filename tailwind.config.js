const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    boxShadow: {
      sm: '0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)',
      md: '0 4px 4px rgba(0,0,0,0.16)',
      lg: '0 8px 16px rgba(0,0,0,0.24)',
    },
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
          550: '#4f545c',
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
