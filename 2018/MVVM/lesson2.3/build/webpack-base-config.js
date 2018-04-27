const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CleanDir = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [
    new HtmlPlugin({
      title: "hello San.",
      favicon: "./static/favicon.ico"
    }),
    new CleanDir(["./dist"], {
      root: path.resolve(__dirname , '..'),
      verbose: true
    })
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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // 处理图片文件
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
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
