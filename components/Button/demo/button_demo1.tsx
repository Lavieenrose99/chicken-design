/*
 * @Author: your name
 * @Date: 2021-01-28 17:42:39
 * @LastEditTime: 2021-02-15 18:33:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Button/demo/button_demo1.tsx
 */
import React from 'react';
import Button from 'chicken-design/lib/Button';
import '../../../lib/Button/styles'


export default () => <>
<Button disabled btnType="danger">危险按钮</Button> 
<Button btnType="primary">基本按钮</Button>
<Button btnType="default">默认按钮</Button>
<Button disabled btnType="link" size="lg" >终于按钮</Button> </>;