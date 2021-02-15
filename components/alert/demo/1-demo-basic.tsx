/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-02-15 18:36:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/demo/1-demo-basic.tsx
 */

import React from 'react';
import Alert from 'chicken-design/lib/alert';
import '../../../lib/alert/styles'



export default () => <Alert kind="warning" title="Warning Tips" closeable >这是一条警告提示</Alert>;
