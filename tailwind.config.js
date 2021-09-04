module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#007B9F',
        dark: '#33475B',
        hover: '#005067',
      },
      yellow: {
        DEFAULT: '#FCB833',
        hover: '#FCA700',
      },
      grey: {
        blue: '#F5F6FA',
        light: '#D9D9D9',
        dark: '#9B9B9B',
      },
      danger: {
        DEFAULT: '#9F0000',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      black: {
        DEFAULT: '#000000',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Roboto'],
    },
    fontSize: {
      // HEADINGS
      h1: ['52px'],
      h2: ['42px'],
      'h3/h4': ['32px'],
      h5: ['21px'],
      // PARAGRAPHS
      p1: ['24px', '32px'],
      'p2-30': ['21px', '30px'],
      'p2-32': ['21px', '32px'],
      'p3-25': ['18px', '25px'],
      'p3-28': ['18px', '28px'],
      'p4-21': ['16px', '21px'],
      'p4-24': ['16px', '24px'],
      p5: ['14px', '21px'],
      // CUSTOM
      '9px': ['9px', '24px'],
    },
    borderRadius: {
      '3px': '3px',
      '30px': '30px',
      full: '50%',
    },
    borderWidth: {
      '1px': '1px',
    },
    extend: {
      spacing: {
        '1px': '1px',
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['disabled'],
      backgroundColor: ['disabled'],
      opacity: ['disabled'],
      textColor: ['disabled'],
      borderColor: ['disabled'],
      opacity: ['active', 'disabled'],
    },
  },
  plugins: [],
};
