"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AlertClassName = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

/*
 * @Author: your name
 * @Date: 2020-06-15 10:39:04
 * @LastEditTime: 2021-02-15 17:43:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/alert/alert.tsx
 */
var prefixCls = 'chicken-design-alert';
var AlertClassName = {
  title: "".concat(prefixCls, "-title")
};
exports.AlertClassName = AlertClassName;

var Alert = function Alert(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'success' : _ref$kind,
      _ref$closeable = _ref.closeable,
      closeable = _ref$closeable === void 0 ? false : _ref$closeable,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children", "title", "kind", "closeable", "className"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      close = _useState2[0],
      setClose = _useState2[1];

  var classes = (0, _classnames.default)('chicken-design-alert', className, (0, _defineProperty2.default)({}, "alert-".concat(kind), kind), closeable && close && 'closeable');
  return closeable ? /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: classes
  }, rest), /*#__PURE__*/_react.default.createElement("span", {
    className: AlertClassName.title
  }, title, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      float: 'right'
    },
    onClick: function onClick() {
      return setClose(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    icon: "window-close",
    className: "close-icons",
    size: "sm"
  }))), children) : /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: classes
  }, rest), /*#__PURE__*/_react.default.createElement("span", {
    className: AlertClassName.title
  }, title), children);
};

Alert.propTypes = {
  kind: _propTypes.default.oneOf(['info', 'positive', 'negative', 'warning', 'success'])
};
var _default = Alert;
exports.default = _default;