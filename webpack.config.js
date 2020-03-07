const path = require('path')

module.exports = {
  entry: './src/Kurdinus.js',
  output: {
    filename: 'kurdinus.js',
    library: 'Kurdinus',
    libraryTarget: 'window',
    path: path.resolve(__dirname, 'dist')
  }
}
