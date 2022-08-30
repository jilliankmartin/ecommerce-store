const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'discovery',
      filename: 'remoteEntry.js',
      exposes: {
        './DiscoveryApp': './src/bootstrap'
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};

module.exports = merge(commonConfig, devConfig)