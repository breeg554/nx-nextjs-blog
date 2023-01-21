const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const merge = require('lodash.merge');
const { join } = require('path');
const baseConfig = require('../../.taiwlind/tailwind.config');

module.exports = merge(baseConfig, {
  content: [
    join(__dirname, './modules/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
