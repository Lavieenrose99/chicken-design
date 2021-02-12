import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { CSSTransition } from 'react-transition-group';

var Transition = function Transition(props) {
  var children = props.children,
      classNames = props.classNames,
      animation = props.animation,
      wrapper = props.wrapper,
      restProps = _objectWithoutProperties(props, ["children", "classNames", "animation", "wrapper"]);

  return /*#__PURE__*/React.createElement(CSSTransition, _extends({
    classNames: classNames ? classNames : animation
  }, restProps), wrapper ? /*#__PURE__*/React.createElement("div", null, children) : children);
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true
};
export default Transition;