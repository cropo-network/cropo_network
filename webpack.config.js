const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
            loader: MiniCssExtractPlugin.loader
          }, 'css-loader'],
      },
    //    {
    //          test: /\.html$/, // 正则匹配html结尾的文件
    //          use:'html-withimg-loader'
    //      },
    //   {
    //     test: /\.(png|jpg|gif)$/, // 正则匹配图片文件
    //    // 做一个限制，当图片小于多少Byte时，将图片转成base64格式的字符串
    //     // 否则用file-loader产生真实的图片
    //    use: {
    //         loader: 'url-loader',
    //         // esModule: false, // 这里设置为false
    //          options: {
    //            limit: 500*1024,//大于或等于 500*1024Byte，按照相应的文件名和路径打包图片
    //             name:'images/[name]-[hash:5].[ext]' //images:图片打包的文件夹；
    //                 //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
    //                 //[hash:5]：项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前五位作为图片名避免重名。
    //           }
    //         }
    //     }
    ],
  },plugins: [
    // new HtmlWebpackPlugin({
    //   template: './dist/index.html',
    // }),
    new MiniCssExtractPlugin(),
  ]
};