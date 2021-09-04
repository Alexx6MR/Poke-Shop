module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        normal: '#929AA2', //done
        flying: '#8FAADF', //
        poison: '#AA6AC9', // done
        electric: '#F4D339', //
        ground: '#78350F', //
        grass: '#62BC5A', //
        fire: '#DC2626', //
        water: '#3399FF', //done
        bug: '#92C12A', //
        ghost: '#5169AE', //
        fighting: '#CE3E6A', //
        psychic: '#F97279', //
        rock: '#C6B88C', //
        ice: '#74CFC0', //
        dragon: '#036DC3', //
        dark: '#5A5265', //
        steel: '#AEAEBF', //
        fairy: '#EC90E7', //
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      overflow: ['group-hover'],
      zIndex: ['group-hover'],
      boxShadow: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
