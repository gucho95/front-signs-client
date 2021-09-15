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
        alpha: '#E6E6E6',
        body: '#F4F6F8',
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
      dark: {
        DEFAULT: '#353A41',
        alpha: '#525A65',
        beta: '#637381',
      },
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Roboto'],
      mono: ['Roboto'],
      display: ['Roboto'],
      body: ['Roboto'],
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
      '12px': ['12px', '16px'],
      '28px': ['28px', '32px'],
    },
    borderRadius: {
      '3px': '3px',
      '5px': '5px',
      '10px': '10px',
      '12px': '12px',
      '20px': '20px',
      '30px': '30px',
      '100px': '100px',
      full: '50%',
    },
    borderWidth: {
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '4px': '4px',
    },
    boxShadow: {
      inset: 'inset -1px 0px 0px #DFE3E8',
      1: '0px 10px 20px #335E6533',
      2: '0px 3px 6px #335E6533',
      3: '0px 10px 30px #335E6533',
      4: '0px 4px 8px #335E6533',
      5: '0px 2px 4px #335E654D',
    },
    backgroundImage: {
      1: '#FFFFFF 0% 0% no-repeat padding-box',
      2: 'transparent linear-gradient(123deg, #005067 0%, #33475B 100%) 0% 0% no-repeat padding-box',
      'text-11-overlay': "url('../assets/text_11_overlay.png')",
    },
    extend: {
      minHeight: { '200px': '200px' },
      margin: { '-50%': '-50%' },
      inset: { '50%': '50%' },
      spacing: {
        '1px': '1px',
        '215px': '215px',
        '294px': '294px',
        '345px': '345px',
        '360px': '360px',
        '470px': '470px',
        '694px': '694px',
        '718px': '718px',
        '970px': '970px',
        '1000px': '1000px',
        '1470px': '1470px',
      },
      maxHeight: { '80vh': '80vh', '294px': '294px' },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      textDecoration: ['disabled'],
      backgroundColor: ['disabled'],
      opacity: ['disabled'],
      textColor: ['disabled'],
      borderColor: ['disabled'],
      opacity: ['active', 'disabled'],
      padding: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
