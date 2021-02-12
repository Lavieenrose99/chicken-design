"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var Icon = function Icon(props) {
  // icon-primary
  var className = props.className,
      theme = props.theme,
      restProps = (0, _objectWithoutProperties2.default)(props, ["className", "theme"]);
  var classes = (0, _classnames.default)('viking-icon', className, (0, _defineProperty2.default)({}, "icon-".concat(theme), theme));
  return /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, (0, _extends2.default)({
    className: classes
  }, restProps));
};

var _default = Icon;
exports.default = _default;