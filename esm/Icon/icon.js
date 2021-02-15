import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/*
 * @Author: your name
 * @Date: 2021-02-03 00:50:16
 * @LastEditTime: 2021-02-15 17:37:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Icon/icon.tsx
 */
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

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