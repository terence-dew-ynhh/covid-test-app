require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 3000
  },
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  }
};
