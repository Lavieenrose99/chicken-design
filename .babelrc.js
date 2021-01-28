/*
 * @Author: your name
 * @Date: 2021-01-26 13:29:21
 * @LastEditTime: 2021-01-29 00:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/.babelrc.js
 */
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react',' @babel/preset-react'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties','@babel/plugin-syntax-jsx '],
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
