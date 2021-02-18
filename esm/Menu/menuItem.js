/*
 * @Author: your name
 * @Date: 2021-02-03 00:39:26
 * @LastEditTime: 2021-02-18 11:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/menuItem.tsx
 */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

var MenuItem = function MenuItem(props) {
  var index = props.index,
      disabled = props.disabled,
      className = props.className,
      style = props.style,
      children = props.children;
  var context = useContext(MenuContext);
  var classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  });

  var handleClick = function handleClick() {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return /*#__PURE__*/React.createElement("li", {
    className: classes,
    style: style,
    onClick: handleClick
  }, children);
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;