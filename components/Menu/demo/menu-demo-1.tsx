import React from 'react';
import SubMenu from 'chicken-design/lib/Menu/subMenu';
import Menu from 'chicken-design/lib/Menu/menu';
import MenuItem from 'chicken-design/lib/Menu/menuItem';
import 'chicken-design/lib/Menu/styles'

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