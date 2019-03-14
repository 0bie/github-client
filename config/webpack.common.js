const webpack = require('webpack');
const commonPaths = require('./common-paths');
const {cssLoader, postcssLoader, scssLoader} = require('./postcss.config')();
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  // target: 'node',
  context: commonPaths.contextPath,
  entry: {
    main: [
      './scripts/index',
      './styles/index'
    ]
  },
  output: {
    path: commonPaths.outputPath
  },
  resolve: {
    alias: {
      utils: commonPaths.utilsPath,
      styles: commonPaths.stylesPath
    },
    extensions: ['.js', '.ts', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, cssLoader, postcssLoader, scssLoader]
      },
      {
        test: /\.(jpe?g|\.png|gif|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 10000, outputPath: commonPaths.outputPath}
          },
          {
            loader: 'image-webpack-loader',
            options: {bypassOnDebug: true}
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  plugins: [
    new Dotenv({
      systemvars: true
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Project Title',
      template: './index.html',
      inlineSource: 'runtime.+\\.js'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash:8].css',
      chunkFilename: 'styles/[id].css'
    })
  ]
};
