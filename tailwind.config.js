module.exports = {
  variants: {
    // ...
     margin: ['hover'],
     margin: ['responsive', 'hover'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '8': '.8rem',
      '10': '1rem',
      '12': '1.2rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2.0rem',
      '22': '2.2rem',
      '24': '2.4rem',
      '30': '3rem',
      '32': '3.2rem',
      '36': '3.6rem',
      '45': '4.5rem',
      '48': '4.8rem',
      '55': '5.5rem',
      '64': '6.4rem',
      '80': '8rem',
      '140': '14rem'
    },
    fontWeight: {
      'regular': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '900'
    },
    colors: {
      'c7-ligth-blue': '#EEEFF7',
      'c7-black': '#000000',
      'c7-sky-blue': '#6679F6',
      'c7-white': '#FFFFFF'
    },
    backgroundColor: theme => ({ ...theme('colors')}),
    extend: {
      padding: {
        'cr-4': '.4rem',
        'cr-8': '.8rem',
        'cr-12': '1.2rem',
        'cr-16': '1.6rem',
        'cr-24': '2.4rem',
        'cr-32': '3.2rem',
        'cr-40': '4rem',
        'cr-48': '4.8rem',
        'cr-64': '6.4rem',
      },
      margin: {
        'cr-34': '-3.4rem',
        'cr-4': '.4rem',
        'cr-8': '.8rem',
        'cr-12': '1.2rem',
        'cr-16': '1.6rem',
        'cr-24': '2.4rem',
        'cr-32': '3.2rem',
        'cr-40': '4rem',
        'cr-48': '4.8rem',
        'cr-64': '6.4rem',
        'cr-72': '7.2rem',
      },
    },
  },
  plugins: [],
}
