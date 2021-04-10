function withOpacity(variableName) {
  return ({ opacityValue }) =>
    opacityValue != null
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;
}

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        black: withOpacity('--color-black'),
        greyish: withOpacity('--color-greyish'),
        'ice-blue': withOpacity('--color-ice-blue'),
        'cobalt-blue': withOpacity('--color-cobalt-blue'),
        'pale-lilac': withOpacity('--color-pale-lilac'),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
