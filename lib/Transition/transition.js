"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

/*
 * @Author: your name
 * @Date: 2021-02-03 00:49:51
 * @LastEditTime: 2021-02-12 22:03:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Transition/transition.tsx
 */
var Transition = function Transition(props) {
  var children = props.children,
      classNames = props.classNames,
      animation = props.animation,
      wrapper = props.wrapper,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "classNames", "animation", "wrapper"]);
  return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, (0, _extends2.default)({
    classNames: classNames || animation
  }, restProps), wrapper ? /*#__PURE__*/_react.default.createElement("div", null, children) : children);
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
};
var _default = Transition;
exports.default = _default;