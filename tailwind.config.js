const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      }
    }
  },
  variants: {
    backgroundColor: ['disabled', 'active', 'hover', 'checked'],
    textColor: ['disabled'],
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`checked${separator}${className}`)}:checked`
        })
      })
    })
  ]
}
