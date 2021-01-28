import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/*
 * @Author: your name
 * @Date: 2021-01-28 17:34:47
 * @LastEditTime: 2021-01-28 17:38:18
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Button/button.tsx
 */
import React from 'react';
import classNames from 'classnames';

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export var Button = function Button(props) {
  var _classNames;

  var btnType = props.btnType,
      className = props.className,
      disabled = props.disabled,
      size = props.size,
      children = props.children,
      href = props.href,
      restProps = _objectWithoutProperties(props, ["btnType", "className", "disabled", "size", "children", "href"]); // btn, btn-lg, btn-primary


  var classes = classNames('btn', className, (_classNames = {}, _defineProperty(_classNames, "btn-".concat(btnType), btnType), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, "disabled", btnType === 'link' && disabled), _classNames));

  if (btnType === 'link' && href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: classes,
      href: href
    }, restProps), children);
  }

  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    disabled: disabled
  }, restProps), children);
};
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
};
export default Button;