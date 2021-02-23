/*
 * @Author: your name
 * @Date: 2021-02-23 22:03:31
 * @LastEditTime: 2021-02-23 22:05:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Button/demo/button_demo1.tsx
 */

import React from 'react';
import Button from 'chicken-design/lib/Button';
import 'chicken-design/lib/Button/styles/index';

export default () => (
  <>
    <Button disabled btnType="danger">
      危险按钮
    </Button>
    <Button btnType="primary">基本按钮</Button>
    <Button btnType="default">默认按钮</Button>
    <Button btnType="link" size="lg" href="https://github.com/Lavieenrose99/chicken-design">
      github
    </Button>{' '}
  </>
);
