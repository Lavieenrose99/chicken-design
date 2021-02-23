"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = _interopRequireDefault(require("../Icon/icon"));

/*
 * @Author: your name
 * @Date: 2021-02-23 21:14:51
 * @LastEditTime: 2021-02-23 21:41:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Input/input.tsx
 */

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'chicken-designship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
var Input = function Input(props) {
  var _classNames;

  var disabled = props.disabled,
      size = props.size,
      icon = props.icon,
      perfix = props.perfix,
      append = props.append,
      style = props.style,
      restProps = (0, _objectWithoutProperties2.default)(props, ["disabled", "size", "icon", "perfix", "append", "style"]);
  var cnames = (0, _classnames.default)('chicken-design-input-wrapper', (_classNames = {}, (0, _defineProperty2.default)(_classNames, "input-size-".concat(size), size), (0, _defineProperty2.default)(_classNames, 'is-disabled', disabled), (0, _defineProperty2.default)(_classNames, 'input-group', perfix || append), (0, _defineProperty2.default)(_classNames, 'input-group-append', !!append), (0, _defineProperty2.default)(_classNames, 'input-group-perfix', !!perfix), _classNames));

  var fixControlledValue = function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }

    return value;
  };

  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: cnames,
    style: style
  }, perfix && /*#__PURE__*/_react.default.createElement("div", {
    className: "chicken-design-input-group-perfix"
  }, perfix), icon && /*#__PURE__*/_react.default.createElement("div", {
    className: "icon-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: icon,
    title: "title-".concat(icon)
  })), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    className: "chicken-design-input-inner",
    disabled: disabled
  }, restProps)), append && /*#__PURE__*/_react.default.createElement("div", {
    className: "chicken-design-input-group-append"
  }, append));
};

exports.Input = Input;
var _default = Input;
exports.default = _default;