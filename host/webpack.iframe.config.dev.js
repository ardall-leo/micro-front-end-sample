/* eslint-env node */
const config = require('./webpack.iframe.config.js');
const webpack = require('webpack');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  contentBase: './iframe-loader',
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {
    "/common/": {
      target: "http://host.jk.loopup.com:8239",
      pathRewrite: {"^/common" : ""}
    }
  }
}

config.mode = 'development'

module.exports = config;
