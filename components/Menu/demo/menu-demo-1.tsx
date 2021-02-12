/*
 * @Author: your name
 * @Date: 2021-02-03 00:41:25
 * @LastEditTime: 2021-02-03 00:45:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/demo/menu-demo-1.tsx
 */
import Menu from '../index'
import '../styles/index.scss'
import React from 'react'
import MenuItem from '../menuItem'
import SubMenu from '../subMenu'

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
  <MenuItem>
    cool link
  </MenuItem>
  <MenuItem>
    cool link 2
  </MenuItem>
  <MenuItem disabled>
    disabled
  </MenuItem>
  <SubMenu title="下拉选项">
    <MenuItem>
      下拉选项一
    </MenuItem>
    <MenuItem>
      下拉选项二
    </MenuItem>
  </SubMenu>
</Menu>
</div>