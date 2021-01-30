"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AlertClassName = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-01-31 01:09:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
var prefixCls = 'chicken-design-alert';
var AlertClassName = {
  title: "".concat(prefixCls, "-title")
};
exports.AlertClassName = AlertClassName;
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
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "title", "kind"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), /*#__PURE__*/_react.default.createElement("h4", {
    className: AlertClassName.title
  }, title), children);
};

Alert.propTypes = {
  kind: _propTypes.default.oneOf(['info', 'positive', 'negative', 'warning'])
};
var _default = Alert;
exports.default = _default;