"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/*
 * @Author: your name
 * @Date: 2021-02-25 11:50:51
 * @LastEditTime: 2021-02-25 12:46:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Progress/progress.tsx
 */
var Progress = function Progress(props) {
  var percent = props.percent,
      strokeHeight = props.strokeHeight,
      showText = props.showText,
      styles = props.styles,
      theme = props.theme;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "chicken-design-progress-bar",
    style: styles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "chicken-design-progress-bar-outer",
    style: {
      height: "".concat(strokeHeight, "px")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "chicken-design-progress-bar-inner color-".concat(theme),
    style: {
      width: "".concat(percent, "%")
    }
  }, showText && /*#__PURE__*/_react.default.createElement("span", {
    className: "inner-text"
  }, "".concat(percent, "%")))));
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
};
var _default = Progress;
exports.default = _default;