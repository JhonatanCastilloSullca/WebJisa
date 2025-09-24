/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        JisaGris: '#3B5259',
        JisaGrisTextGray: '#99A5A9',
        JisaCyan: '#1B9C9E',
        JisaVerde: '#BDD06B',
        JisaAmarillo: '#EECC4E',
        JisaNaranja: '#D18D2A',
      },
      fontFamily: {
        lufga: ["Lufga", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        sans: ["Lufga", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontWeight: {
        regular: '400', // <— podrás usar font-regular
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
