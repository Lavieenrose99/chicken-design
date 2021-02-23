import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/*
 * @Author: your name
 * @Date: 2021-02-23 21:14:51
 * @LastEditTime: 2021-02-23 21:41:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Input/input.tsx
 */
import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'chicken-designship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export var Input = function Input(props) {
  var _classNames;

  var disabled = props.disabled,
      size = props.size,
      icon = props.icon,
      perfix = props.perfix,
      append = props.append,
      style = props.style,
      restProps = _objectWithoutProperties(props, ["disabled", "size", "icon", "perfix", "append", "style"]);

  var cnames = classNames('chicken-design-input-wrapper', (_classNames = {}, _defineProperty(_classNames, "input-size-".concat(size), size), _defineProperty(_classNames, 'is-disabled', disabled), _defineProperty(_classNames, 'input-group', perfix || append), _defineProperty(_classNames, 'input-group-append', !!append), _defineProperty(_classNames, 'input-group-perfix', !!perfix), _classNames));

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

  return /*#__PURE__*/React.createElement("div", {
    className: cnames,
    style: style
  }, perfix && /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-input-group-perfix"
  }, perfix), icon && /*#__PURE__*/React.createElement("div", {
    className: "icon-wrapper"
  }, /*#__PURE__*/React.createElement(Icon, {
    icon: icon,
    title: "title-".concat(icon)
  })), /*#__PURE__*/React.createElement("input", _extends({
    className: "chicken-design-input-inner",
    disabled: disabled
  }, restProps)), append && /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-input-group-append"
  }, append));
};
export default Input;