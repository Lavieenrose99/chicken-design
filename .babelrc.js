/*
 * @Author: your name
 * @Date: 2021-01-26 13:29:21
 * @LastEditTime: 2021-01-28 23:57:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/.babelrc.js
 */
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react',' @babel/preset-react'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
