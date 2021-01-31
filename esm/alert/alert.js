import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 17:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
import React from 'react';
import t from 'prop-types';
import classNames from 'classnames';
var prefixCls = 'chicken-design-alert';
export var AlertClassName = {
  title: "".concat(prefixCls, "-title")
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'success' : _ref$kind,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "title", "kind", "className"]);

  var classes = classNames('chicken-design-alert', className, _defineProperty({}, "alert-".concat(kind), kind));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: AlertClassName.title
  }, title), children);
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning', 'success'])
};
export default Alert;