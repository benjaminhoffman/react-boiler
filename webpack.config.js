const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const env = process.env.NODE_ENV || 'development'
const ManifestPlugin = require('webpack-manifest-plugin')

const isProductionLike = env === 'production' || env === 'staging'

console.log('isProductionLike', isProductionLike)

const common = {
  entry: {
    app: './src/app.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isProductionLike ? 'production' : 'development')
    }),
    // creates a file for all shared (common) modules across entry points
    // loads once and uses cache for pagespeed optimizations
    // webpack.js.org/plugins/commons-chunk-plugin/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: 'bundle.map'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      }
    ]
  }
}

const development = Merge(common, {
  devtool: 'eval-source-map', // webpack.js.org/configuration/devtool/#development
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),          // replace dist dir on each new build
    new webpack.HotModuleReplacementPlugin(),  // Enable HMR
  ],
  devServer: {
    hot: true,   // use HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  }
})

const production = Merge(common, {
  devtool: 'nosources-source-map',  // webpack.js.org/configuration/devtool/#production
  output: {
    // use [chunkhash] for asset caching
    filename: '[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].[chunkhash:8].map'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    new ManifestPlugin()
  ]
})

module.exports = isProductionLike ? production : development
