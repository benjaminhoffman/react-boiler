const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'

const isProductionLike = env === 'production' || env === 'staging'

const common = {
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
    new webpack.HotModuleReplacementPlugin(),  // Enable HMR
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  devServer: {
    hot: true,   // use HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
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

// const development = {
//   ...common,
//   detool: 'cheap-module-source-map',
//   output: {
//     ...common.output,
//     publicPath: '/'
//   },
//   {
//     plugins: [
//       ...common.plugins
//     ]
//   },
//   module: {
//     ...common.module,
//     rules: [
//       ...common.module.rules
//     ]
//   }
// }
//
// const production = {
//   ...common,
//   devtool: 'source-map',
//   output: {
//     ...common.output,
//     publicPath: '/'
//   }
//   plugins: [
//     ...common.module,
// new webpack.optimize.UglifyJsPlugin({
//   sourceMap: true,
//   comments: false
// })
//   ],
//   module: {
//     ...common.module
//   }
// }

module.exports = isProductionLike ? production : common   // TODO change to development
