const Encore = require('@symfony/webpack-encore');
const HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
  .setOutputPath('public/')
  .setPublicPath('/')
  .addEntry('app', './src/js/index.js')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableReactPreset()
  .enableSassLoader()
  .addPlugin(new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: true,
  }))
;

module.exports = Encore.getWebpackConfig();
