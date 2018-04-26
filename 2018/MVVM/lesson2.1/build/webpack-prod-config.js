const webpack = require('webpack')
const merge = require('webpack-merge')
const BASE_CONFIG = require('./webpack-base-config')
const JsUglify = require('uglifyjs-webpack-plugin')

module.exports = merge(BASE_CONFIG, {
  mode: 'production',
  plugins: [
    new JsUglify({
      // 打开生产环境 sourceMap
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      // https://doc.webpack-china.org/guides/production/#%E6%8C%87%E5%AE%9A%E7%8E%AF%E5%A2%83
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ]
})