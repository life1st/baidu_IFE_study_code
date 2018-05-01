const path = require("path");
const webpack = require('webpack')
const HtmlPlugin = require("html-webpack-plugin");
const CleanDir = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: [
      'san'
    ]
  },
  output: {
    filename: "[name].bundle.[chunkhash].js",
    path: path.resolve(__dirname, "../dist")
  },
  optimization: {
    runtimeChunk:{
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new HtmlPlugin({
      title: "hello San.",
      favicon: "./static/favicon.ico"
    }),
    new CleanDir(["./dist"], {
      root: path.resolve(__dirname , '..'),
      verbose: true
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        // 处理样式文件
        test: /\.(css|less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        // 处理图片文件
        test: /\.(png|jpg|gif|svg)$/,
        use: ["url-loader?limit=10000"]
      },
      // {
      //   test: /\.svg$/,
      //   use: ['svg-inline-loader']
      // }
    ]
  },
  resolve: {
    alias: {
      san: process.env.NODE_ENV === 'production'
        ? 'san/dist/san.js'
        : 'san/dist/san.dev.js'
    }
  }
};
