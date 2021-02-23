/*
 * @Author: your name
 * @Date: 2021-02-23 22:14:36
 * @LastEditTime: 2021-02-23 22:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Icon/demo/icon_demo1.ts
 */
import React from 'react';
import Icon from 'chicken-design/lib/Icon';
import Button from 'chicken-design/lib/Button';
import 'chicken-design/lib/Icon/styles/index'

export default ()=><>
<div
  style={{
    padding: '20px 40px',
    width: '500px'
  }}
>
  <h4>
    组件演示
  </h4>
  <React.Fragment key=".1">
    <Icon
      style={{margin: 10}}
      icon="check"
      size="2x"
    />
    <Icon
    style={{margin: 10}}
      icon="times"
      size="2x"
    />
    <Icon
    style={{margin: 10}}
      icon="adjust"
      size="2x"
    />
    <Icon
       style={{margin: 10}}
      icon="anchor"
      size="2x"
    />
    <Icon
    style={{margin: 10}}
      icon="trash"
      size="2x"
      spin
      theme="danger"
    />
  </React.Fragment>
</div>
</>