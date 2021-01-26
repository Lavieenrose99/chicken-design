/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-26 00:48:25
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
        'happy-ui/esm': path.resolve(__dirname, '../components/'),
        'happy-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
