const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  jsLoader : {
    test: /.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'react'],
      plugins: ['transform-es2015-function-name']
    }
  },
  styleLoader : {
    test: /\.s?css?$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!!postcss-loader!sass-loader")
  }
};