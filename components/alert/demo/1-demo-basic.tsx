/*
 * @Author: your name
 * @Date: 2021-01-31 17:13:16
 * @LastEditTime: 2021-02-15 22:14:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/demo/1-demo-basic.tsx
 */
import React from 'react';
import Alert from 'chicken-design/lib/alert';
import 'chicken-design/alert/styles/index.css'



export default () => <Alert kind="warning" title="Warning Tips" closeable >这是一条警告提示</Alert>;
