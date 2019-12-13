const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/iframe-loader.js',
  output: {
    filename: 'iframe-loader.js',
    library: 'config',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build/iframe-loader'),
    chunkFilename: '[name].js',
  },
  mode: 'production',
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  devtool: 'sourcemap',
  plugins: [
    new CleanWebpackPlugin(['build/iframe-loader/']),
    CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/iframe-loader.js')}
    ]),
  ],
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  externals: [
    /^single-spa$/
  ],
}
