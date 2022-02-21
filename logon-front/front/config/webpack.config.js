const utils = require('./utils')
const path = require('path')
// const webpack = require('webpack')
// const nodeExcternals = require('webpack-node-externals')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(utils.APP_PATH, 'index.js')
  },
  resolve: {
    ...utils.getWebpackResolveConfig()
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  modules: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {}
    }]
  }
}
