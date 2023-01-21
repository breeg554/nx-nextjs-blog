const {join} = require('path');
const merge = require('lodash.merge')
const baseConfig = require('../../.taiwlind/postcss.config')

module.exports = merge(baseConfig, {
    plugins: {
      tailwindcss: {
        config: join(__dirname, 'tailwind.config.js'),
      },
    },
  }
)
