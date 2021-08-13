module.exports = {
  purge: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: 'rgba(255, 255, 255, .5)',
        bborder: '#49B1F5',
        footer: '#eee',
      },
      width: {
        mysize: '100px'
      },
      boxShadow: {
        navShadow: '0 5px 6px -5px rgb(133 133 133 / 60%)',
      },
      lineHeight: {
        center: '64px'
      }
    },


  },
  variants: {
    extend: {
    },
  },
  plugins: []
}
