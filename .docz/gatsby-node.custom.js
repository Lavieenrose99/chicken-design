/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-02-15 22:10:04
 * @LastEditors: your name
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
        'chicken-design': path.resolve(__dirname, '../lib/'),
      },
    },
  });
};
