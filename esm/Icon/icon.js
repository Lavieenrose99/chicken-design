import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var Icon = function Icon(props) {
  // icon-primary
  var className = props.className,
      theme = props.theme,
      restProps = _objectWithoutProperties(props, ["className", "theme"]);

  var classes = classNames('chicken-design-icon', className, _defineProperty({}, "icon-".concat(theme), theme));
  return /*#__PURE__*/React.createElement(FontAwesomeIcon, _extends({
    className: classes
  }, restProps));
};

export default Icon;