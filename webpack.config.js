const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const env = process.env.NODE_ENV || 'development'
const ManifestPlugin = require('webpack-manifest-plugin')

// const isProductionLike = env === 'production' || env === 'staging'
const isProductionLike = true

console.log('isProductionLike', isProductionLike)

const common = {
  // entry: './src/app.js',
  entry: {
    app: './src/app.js',
    print: './src/print.js'
  },
  devtool: 'source-map',
  // devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        isProductionLike ? 'production' : 'development')
    }),
    // new webpack.HotModuleReplacementPlugin(),  // Enable HMR
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity,
    })
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
        test: /\.js$/,
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
  // detool: 'cheap-module-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),  // Enable HMR
  ],
  devServer: {
    hot: true,   // use HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: []
  }
})

const production = Merge(common, {
  // devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].[chunkhash:8].map'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),   // Enable HMR
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    new ManifestPlugin()
  ],
  module: {}
})

module.exports = isProductionLike ? production : development   // TODO change to development
