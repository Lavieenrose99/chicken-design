"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _menu = require("./menu");

/*
 * @Author: your name
 * @Date: 2021-02-03 00:39:26
 * @LastEditTime: 2021-02-18 11:30:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/menuItem.tsx
 */
var MenuItem = function MenuItem(props) {
  var index = props.index,
      disabled = props.disabled,
      className = props.className,
      style = props.style,
      children = props.children;
  var context = (0, _react.useContext)(_menu.MenuContext);
  var classes = (0, _classnames.default)('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  });

  var handleClick = function handleClick() {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };

  return /*#__PURE__*/_react.default.createElement("li", {
    className: classes,
    style: style,
    onClick: handleClick
  }, children);
};

MenuItem.displayName = 'MenuItem';
var _default = MenuItem;
exports.default = _default;