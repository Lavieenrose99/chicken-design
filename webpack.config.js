/*
 * @Author: your name
 * @Date: 2021-01-22 00:31:04
 * @LastEditTime: 2021-01-30 00:39:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /WebPackBasic/webpack.config.js
 */

 module.exports = {
     resolve: {
         extensions: ['.jsx','.js','.css','.less']
     },
     //文件加载器
     module: {
         rules:[
             {
                 test: /\.css$/,
                //  exclude: /node_modules/,
                 use: ['style-loader','css-loader']
             },
         ]
     },
     
     
 }