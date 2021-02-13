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
  defaultOpenSubMenus={[
    '2','3'
  ]}
  mode="vertical"
  onSelect={function noRefCheck(){}}
>
  <MenuItem>
    JS
  </MenuItem>
  <MenuItem>
    TS
  </MenuItem>
  <SubMenu title="默认展开下拉选项">
    <MenuItem>
      二叉树
    </MenuItem>
    <MenuItem>
      平衡二叉树
    </MenuItem>
    </SubMenu>
    <SubMenu title="默认展开下拉选项">
    <MenuItem>
      红黑树
    </MenuItem>
    <MenuItem>
      二叉搜索树
    </MenuItem>
    </SubMenu>
  
</Menu>
</div>