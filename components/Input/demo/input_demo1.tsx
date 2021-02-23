/*
 * @Author: your name
 * @Date: 2021-02-23 21:21:59
 * @LastEditTime: 2021-02-23 21:37:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Input/demo/input_demo1.tsx
 */
import React from 'react';
import Input from 'chicken-design/lib/Input';
import 'chicken-design/lib/Input/styles/index';

export default () => (
  <div
    style={{
      padding: '20px 40px',
      width: '500px',
    }}
  >
    <h4>组件演示</h4>
    <Input onChange={function noRefCheck() {}} placeholder="基本Input" />
    <Input disabled placeholder="disabled input" />
    <Input icon="search" placeholder="input with icon" />
    <Input defaultValue="large size" size="lg" />
    <Input placeholder="small size" size="sm" />
    <Input defaultValue="hello world" perfix="https://" />
    <Input append=".com" defaultValue="chicken-design" />
  </div>
);
