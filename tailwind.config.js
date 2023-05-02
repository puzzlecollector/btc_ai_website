/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      const safeAreaComponents = {
        '.header-safe-area': {
          '@supports (padding-top: env(safe-area-inset-top))': {
            paddingTop: 'env(safe-area-inset-top)',
          },
          '@supports (padding-top: constant(safe-area-inset-top))': {
            paddingTop: 'constant(safe-area-inset-top)',
          },
          // Add other header styles as needed
        },
        '.footer-safe-area': {
          '@supports (padding-bottom: env(safe-area-inset-bottom))': {
            paddingBottom: 'env(safe-area-inset-bottom)',
          },
          '@supports (padding-bottom: constant(safe-area-inset-bottom))': {
            paddingBottom: 'constant(safe-area-inset-bottom)',
          },
          // Add other footer styles as needed
        },
      };
      addComponents(safeAreaComponents);
    },
  ],
  variants: {
    extend: {
      padding: ['responsive'],
    },
  },
};
