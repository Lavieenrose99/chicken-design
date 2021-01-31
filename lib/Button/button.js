"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

/*
 * @Author: your name
 * @Date: 2021-01-28 17:34:47
 * @LastEditTime: 2021-01-31 11:05:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Button/button.tsx
 */

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 */
var Button = function Button(props) {
  var _classNames;

  var btnType = props.btnType,
      className = props.className,
      disabled = props.disabled,
      size = props.size,
      children = props.children,
      href = props.href,
      restProps = (0, _objectWithoutProperties2.default)(props, ["btnType", "className", "disabled", "size", "children", "href"]); // btn, btn-lg, btn-primary

  var classes = (0, _classnames.default)('btn', className, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "btn-".concat(btnType), btnType), (0, _defineProperty2.default)(_classNames, "btn-".concat(size), size), (0, _defineProperty2.default)(_classNames, "disabled", btnType === 'link' && disabled), _classNames));

  if (btnType === 'link' && href) {
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      className: classes,
      href: href
    }, restProps), children);
  }

  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: classes,
    disabled: disabled
  }, restProps, {
    type: "button"
  }), children);
};

exports.Button = Button;
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
};
var _default = Button;
exports.default = _default;