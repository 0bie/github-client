const webpack = require('webpack');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  output: {
    filename: 'scripts/[name].[chunkhash:8].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /lodash/,
        sideEffects: false
      },
      {
        test: /react|react-dom/,
        sideEffects: false
      }
    ]
  },
  optimization: {
    nodeEnv: 'production',
    usedExports: true, // https://bit.ly/2qdxWNx
    occurrenceOrder: true,
    runtimeChunk: 'single',
    // https://bit.ly/2qgDCpl https://bit.ly/2BuL3wF
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /react|lodash/,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

// https://reacttraining.com/react-router/web/guides/code-splitting
// https://webpack.js.org/guides/caching/
// https://presentations.survivejs.com/advanced-webpack/#/?_k=35dhtk
// https://webpack.js.org/plugins/split-chunks-plugin/
// https://tylermcginnis.com/react-router-code-splitting/
