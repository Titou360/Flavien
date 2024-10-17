/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Quick: ['Quicksand', 'sans'],
        Kristi: ['Kristi', 'serif'],
        Oakes: ['Oakes', 'serif']
      },
      colors: {
        cafeGold: '#B67C44',
        cafeBlack: '#1A1423',
        cafeAlmond: '#E0D1C4',
        cafeBlue: '#0F8B8D',
        cafeGreen: '#273B09',
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
