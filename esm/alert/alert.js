import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 23:25:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
import React, { useState } from 'react';
import t from 'prop-types';
import classNames from 'classnames';
import { IconFont } from '../src/iconfont';
var prefixCls = 'chicken-design-alert';
export var AlertClassName = {
  title: "".concat(prefixCls, "-title")
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'success' : _ref$kind,
      _ref$closeable = _ref.closeable,
      closeable = _ref$closeable === void 0 ? false : _ref$closeable,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "title", "kind", "closeable", "className"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      close = _useState2[0],
      setClose = _useState2[1];

  var classes = classNames('chicken-design-alert', className, _defineProperty({}, "alert-".concat(kind), kind), closeable && close && 'closeable');
  return closeable ? /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: AlertClassName.title
  }, title, /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'right'
    },
    onClick: function onClick() {
      return setClose(true);
    }
  }, /*#__PURE__*/React.createElement(IconFont, {
    type: "icon-close"
  }))), children) : /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: AlertClassName.title
  }, title), children);
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning', 'success'])
};
export default Alert;