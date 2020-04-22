var webpack = require('webpack')
var path = require('path')
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true, // Boolean/String,字符串即是缓存文件存放的路径
        parallel: true, // 启用多线程并行运行提高编译速度
        sourceMap: true
        /*
          uglifyOptions: {
            output: {
              comments: false  // 删掉所有注释
            }，
            compress: {
                warning: false, // 插件在进行删除一些无用的代码时不提示警告
                drop_console: true // 过滤console,即使写了console,线上也不显示
            }
          } */
      }),
      new OptimizeCSSAssetsPlugin({}),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ]
  },
  entry: {
    app: './src/app4.js'
  },
  output: {
    path: path.resolve(__dirname, './dist4'),
    filename: '[name].bundle.js',
    publicPath: './dist4/'
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: './src/',
          },
        },         
        {
          loader: 'css-loader',
        },     
        {
          loader: 'sass-loader'
        }
      ]
    }]
  }
}