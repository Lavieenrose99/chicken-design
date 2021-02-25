/*
 * @Author: your name
 * @Date: 2021-02-25 11:50:51
 * @LastEditTime: 2021-02-25 12:46:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Progress/progress.tsx
 */
import React from 'react';

var Progress = function Progress(props) {
  var percent = props.percent,
      strokeHeight = props.strokeHeight,
      showText = props.showText,
      styles = props.styles,
      theme = props.theme;
  return /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-progress-bar",
    style: styles
  }, /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-progress-bar-outer",
    style: {
      height: "".concat(strokeHeight, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-progress-bar-inner color-".concat(theme),
    style: {
      width: "".concat(percent, "%")
    }
  }, showText && /*#__PURE__*/React.createElement("span", {
    className: "inner-text"
  }, "".concat(percent, "%")))));
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary'
};
export default Progress;