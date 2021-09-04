// craco.config.js
const path = require(`path`);

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@icons': path.resolve(__dirname, 'src/components/atoms/icons'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@hooks$': path.resolve(__dirname, 'src/hooks/index.js'),
      '@hocs$': path.resolve(__dirname, 'src/hocs/index.js'),
      '@utils$': path.resolve(__dirname, 'src/utils/index.js'),
    },
  },
};
