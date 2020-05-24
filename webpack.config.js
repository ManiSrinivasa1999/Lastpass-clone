const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'app-dist': './src/app.js',
    'user-dist': './src/user.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    hot: true,
  },
};
