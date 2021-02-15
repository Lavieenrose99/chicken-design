/*
 * @Author: your name
 * @Date: 2021-02-03 00:41:25
 * @LastEditTime: 2021-02-15 18:36:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/demo/menu-demo-1.tsx
 */
import Menu from '../index'
import React from 'react'
import MenuItem from '../menuItem'
import SubMenu from '../subMenu'
import '../../../lib/Menu/styles'

export default ()=><div
style={{
  padding: '20px 40px',
  width: '500px'
}}
>
<h3>
  组件演示
</h3>
<Menu
  defaultIndex="0"
  defaultOpenSubMenus={[]}
  mode="horizontal"
  onSelect={function noRefCheck(){}}
>
  <MenuItem index="2">
    C++
  </MenuItem>
  <MenuItem>
    Java
  </MenuItem>
  <MenuItem disabled >
    disabled
  </MenuItem>
  <SubMenu title="下拉选项">
    <MenuItem>
      node.js
    </MenuItem>
    <MenuItem>
      deno.js
    </MenuItem>
  </SubMenu>
</Menu>
</div>