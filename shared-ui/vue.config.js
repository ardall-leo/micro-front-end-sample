// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sass = require('sass');
const styleLoader = MiniCssExtractPlugin.loader;
const generateCssLoader = (modules = false) => {
  const config = {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      importLoaders: 2,
    },
  };

  if (modules) {
    config.options.modules = true;
    config.options.localIdentName = '[name]_[local]_[hash:base64:5]';
  }

  return config;
};

module.exports = {
  //runtimeCompiler: true,
  chainWebpack: config => {
    config.devServer.set('inline', false)
    config.devServer.set('hot', true)
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    config.output.filename(`[name].js`)
    
    // if it's not development mode, exclude it from bundle and rely on the host
    if (process.env.NODE_ENV != 'development') {
      config.externals(['vue', 'vue-router'])
    }
  },
  filenameHashing: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/global.scss";`
      }
    }
  }
}

