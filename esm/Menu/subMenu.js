import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/*
 * @Author: your name
 * @Date: 2021-02-03 00:39:26
 * @LastEditTime: 2021-02-15 17:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/subMenu.tsx
 */
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';

var SubMenu = function SubMenu(_ref) {
  var index = _ref.index,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className;
  var context = useContext(MenuContext);
  var openedSubMenus = context.defaultOpenSubMenus;
  var isOpend = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;

  var _useState = useState(isOpend),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setOpen = _useState2[1];

  var classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  });

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  var timer;

  var handleMouse = function handleMouse(e, toggle) {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(function () {
      setOpen(toggle);
    }, 300);
  };

  var clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {};
  var hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: function onMouseEnter(e) {
      handleMouse(e, true);
    },
    onMouseLeave: function onMouseLeave(e) {
      handleMouse(e, false);
    }
  } : {};

  var renderChildren = function renderChildren() {
    var subMenuClasses = classNames('chicken-design-submenu', {
      'menu-opened': menuOpen
    });
    var childrenComponent = React.Children.map(children, function (child, i) {
      var childElement = child;

      if (childElement.type.displayName === 'MenuItem') {
        return /*#__PURE__*/React.cloneElement(childElement, {
          index: "".concat(index, "-").concat(i)
        });
      }

      console.error('Warning: SubMenu has a child which is not a MenuItem component');
    });
    return /*#__PURE__*/React.createElement(Transition, {
      in: menuOpen,
      timeout: 300,
      animation: "zoom-in-bottom"
    }, /*#__PURE__*/React.createElement("ul", {
      className: subMenuClasses
    }, childrenComponent));
  };

  return /*#__PURE__*/React.createElement("li", _extends({
    key: index,
    className: classes
  }, hoverEvents), /*#__PURE__*/React.createElement("div", _extends({
    className: "submenu-title"
  }, clickEvents), title, /*#__PURE__*/React.createElement(Icon, {
    icon: "angle-down",
    className: "arrow-icon"
  })), renderChildren());
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;