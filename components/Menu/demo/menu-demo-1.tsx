/*
 * @Author: your name
 * @Date: 2021-02-03 00:41:25
 * @LastEditTime: 2021-02-18 20:19:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/demo/menu-demo-1.tsx
 */
import React from 'react';
import SubMenu from 'chicken-design/lib/Menu/subMenu';
import Menu from 'chicken-design/lib/Menu/menu';
import MenuItem from 'chicken-design/lib/Menu/menuItem';
import 'chicken-design/lib/Menu/styles/index';

export default () => (
  <div
    style={{
      padding: '20px 40px',
      width: '500px',
    }}
  >
    <h3>组件演示</h3>
    <Menu
      defaultIndex="0"
      defaultOpenSubMenus={[]}
      mode="horizontal"
      onSelect={data => console.log(data)}
    >
      <MenuItem index="0">C++</MenuItem>
      <MenuItem index="1">Java</MenuItem>
      <MenuItem>disabled</MenuItem>
      <SubMenu title="下拉选项">
        <MenuItem>node.js</MenuItem>
        <MenuItem>deno.js</MenuItem>
      </SubMenu>
    </Menu>
  </div>
);
