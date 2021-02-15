import React from 'react';
import SubMenu from 'chicken-design/lib/Menu/subMenu';
import Menu from 'chicken-design/lib/Menu/menu';
import MenuItem from 'chicken-design/lib/Menu/menuItem';
import 'chicken-design/lib/Menu/styles/index'


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