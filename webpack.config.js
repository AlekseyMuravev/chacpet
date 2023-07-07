const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(?:jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', { 
                targets: "defaults" 
              }
            ]]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          { 
          loader: "css-loader", options: { 
            modules: {
              auto: (resPath) => Boolean(resPath.includes('.module.')),
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
          },
        } }],
      },
    ]
  },
  mode: 'development',
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({template: 'index.html'})],
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
  },
  },
};