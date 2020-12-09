const path = require('path')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const ImageminWebpPlugin = require('imagemin-webp-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/app.js',

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),

    /* name of the repo (if deploying to gh-pages) ('/repo-name/')
      or '/' (if deploying to firebase) */
    publicPath: '/faq-accordion-card-frontend-mentor/'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },

  devtool: false,

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          'babel-loader'
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  plugins: [
    new EslintWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin()

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'src/assets/images',
    //       to: path.resolve(__dirname, 'dist/assets/images')
    //     }
    //   ]
    // })

    // new ImageminWebpPlugin({
    //   config: [{
    //     test: /\.(jpe?g|png)/,
    //     options: {
    //       quality: 60
    //     }
    //   }]
    // }),

    // new ImageminPlugin({
    //   jpegtran: null,
    //   gifsicle: null,
    //   optipng: null,

    //   plugins: [
    //     imageminMozjpeg({
    //       quality: 75,
    //       progressive: true
    //     })
    //   ]
    // })
  ]
}
