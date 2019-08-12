var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.jsx',
  context: path.resolve(__dirname, './src'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              camelCase: true,
            }
          },
          'sass-loader'
        ]
    }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[hash].js',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      appMountId: 'app'
    }),
  ]
}
