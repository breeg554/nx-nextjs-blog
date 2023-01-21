const {createGlobPatternsForDependencies} = require('@nrwl/react/tailwind');
const merge = require('lodash.merge')
const {join} = require('path');
const baseConfig = require('../../.taiwlind/tailwind.config')

module.exports = merge(baseConfig, {
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})
