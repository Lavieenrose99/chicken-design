"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Menu = exports.MenuContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

/*
 * @Author: your name
 * @Date: 2021-02-03 00:39:26
 * @LastEditTime: 2021-02-18 16:54:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/menu.tsx
 */
var MenuContext = /*#__PURE__*/(0, _react.createContext)({
  index: '0'
});
exports.MenuContext = MenuContext;

var Menu = function Menu(props) {
  var className = props.className,
      mode = props.mode,
      style = props.style,
      children = props.children,
      defaultIndex = props.defaultIndex,
      onSelect = props.onSelect,
      defaultOpenSubMenus = props.defaultOpenSubMenus;

  var _useState = (0, _react.useState)(defaultIndex),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentActive = _useState2[0],
      setActive = _useState2[1];

  var classes = (0, _classnames.default)('chicken-design-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  });

  var handleClick = function handleClick(index) {
    setActive(index);

    if (onSelect) {
      onSelect(index);
    }
  };

  var passedContext = {
    index: currentActive || '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus
  };

  var renderChildren = function renderChildren() {
    return _react.default.Children.map(children, function (child, index) {
      var childElement = child;
      var displayName = childElement.type.displayName;

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return /*#__PURE__*/_react.default.cloneElement(childElement, {
          index: index.toString()
        });
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("ul", {
    className: classes,
    style: style,
    "data-testid": "test-menu"
  }, /*#__PURE__*/_react.default.createElement(MenuContext.Provider, {
    value: passedContext
  }, renderChildren()));
};

exports.Menu = Menu;
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
};
var _default = Menu;
exports.default = _default;