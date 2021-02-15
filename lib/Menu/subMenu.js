"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _menu = require("./menu");

var _icon = _interopRequireDefault(require("../Icon/icon"));

var _transition = _interopRequireDefault(require("../Transition/transition"));

/*
 * @Author: your name
 * @Date: 2021-02-03 00:39:26
 * @LastEditTime: 2021-02-15 17:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Menu/subMenu.tsx
 */
var SubMenu = function SubMenu(_ref) {
  var index = _ref.index,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className;
  var context = (0, _react.useContext)(_menu.MenuContext);
  var openedSubMenus = context.defaultOpenSubMenus;
  var isOpend = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;

  var _useState = (0, _react.useState)(isOpend),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      menuOpen = _useState2[0],
      setOpen = _useState2[1];

  var classes = (0, _classnames.default)('menu-item submenu-item', className, {
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
    var subMenuClasses = (0, _classnames.default)('chicken-design-submenu', {
      'menu-opened': menuOpen
    });

    var childrenComponent = _react.default.Children.map(children, function (child, i) {
      var childElement = child;

      if (childElement.type.displayName === 'MenuItem') {
        return /*#__PURE__*/_react.default.cloneElement(childElement, {
          index: "".concat(index, "-").concat(i)
        });
      }

      console.error('Warning: SubMenu has a child which is not a MenuItem component');
    });

    return /*#__PURE__*/_react.default.createElement(_transition.default, {
      in: menuOpen,
      timeout: 300,
      animation: "zoom-in-bottom"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: subMenuClasses
    }, childrenComponent));
  };

  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({
    key: index,
    className: classes
  }, hoverEvents), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "submenu-title"
  }, clickEvents), title, /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: "angle-down",
    className: "arrow-icon"
  })), renderChildren());
};

SubMenu.displayName = 'SubMenu';
var _default = SubMenu;
exports.default = _default;