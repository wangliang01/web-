const path = require('path')

const vuxLoader = require('vux-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  entry: path.resolve(__dirname, 'main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash:8].js'
  },
  resolve: {
    alias: {
      'vue$': path.resolve(__dirname, './node_modules/vue/dist/vue.esm.js')
    },
    extensions: ['.js', '.vue', '.json']
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

let config = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui']
})

module.exports = config