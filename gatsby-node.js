/*
 * @Author: your name
 * @Date: 2021-01-14 23:01:40
 * @LastEditTime: 2021-01-14 23:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/gatsby-node.js
 */
const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'chicken-design/lib': path.resolve(__dirname, '../components/'),
        'chicken-design/esm': path.resolve(__dirname, '../components/'),
        'chicken-design': path.resolve(__dirname, '../components/'),
      },
    },
  });
};