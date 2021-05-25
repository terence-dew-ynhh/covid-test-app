require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 8050
  },
  devIndicators: {
    autoPrerender: false,
  },
  target: 'serverless',
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
