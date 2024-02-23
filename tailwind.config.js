/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        Quick: ['Quicksand', 'sans'],
        Kristi: ['Kristi', 'serif']
      },
      colors: {
        cafeGray: '#2c2c2c',
        cafeGold: '#c5a485',
        slateWood: '#FFF8DC',
        slateBody: '#585D6D',
        nemo: '#F77300'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      extend: {
        content: {
          CocktailIcon: 'url("../assets/img/icons/cocktail.svg")',
          DeliveryIcon: 'url("../assets/img/icons/panier-repas.png)'
        }
      }
    },
    screens: {
      '2xl': { max: '1600px' },
      // => @media(max-width: 1600px)
      xl: { max: '1279px' },
      // => @media(max-width: 1279px)
      lg: { max: '1023px' },
      // => @media(max-width: 1023px)
      md: { max: '767px' },
      // => @media(max-width: 767px)
      sm: { max: '639px' },
      // => @media(max-width: 639)
      xs: { max: '479px' }
      // => @media(max-width: 479px)
    }
  },
  plugins: []
};
