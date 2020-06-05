const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'counter.bundle.js',
    path: path.resolve(__dirname, '../lib'),
  },
};