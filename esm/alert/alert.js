import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 01:09:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
import React from 'react';
import t from 'prop-types';
var prefixCls = 'chicken-design-alert';
export var AlertClassName = {
  title: "".concat(prefixCls, "-title")
};
var kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'info' : _ref$kind,
      rest = _objectWithoutProperties(_ref, ["children", "title", "kind"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), /*#__PURE__*/React.createElement("h4", {
    className: AlertClassName.title
  }, title), children);
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
};
export default Alert;