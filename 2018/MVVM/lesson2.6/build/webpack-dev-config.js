const merge = require('webpack-merge')
const BASE_CONFIG = require('./webpack-base-config')

module.exports = merge(BASE_CONFIG, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
})