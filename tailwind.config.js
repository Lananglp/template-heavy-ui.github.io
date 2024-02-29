/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      backgroundImage: {
        'wallpaper-1': "url('img/wallpaper.jpg')",
      },
      boxShadow: {
        'center-md': '0 0px 48px rgba(0, 200, 255, 0.25)',
        'center-xl': '0 0px 64px rgba(0, 200, 255, 0.25)',
        'center-full': '0 0px 256px rgba(0, 200, 255, 0.15)',
        // 'inner-xl': 'inset 0 0px 64px rgba(0, 200, 255, 0.5)',
      },
    }
  },
  plugins: [],
}