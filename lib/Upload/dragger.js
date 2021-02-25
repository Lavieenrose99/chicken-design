"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Dragger = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Dragger = function Dragger(props) {
  var onFile = props.onFile,
      children = props.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      dragOver = _useState2[0],
      setDragOver = _useState2[1];

  var klass = (0, _classnames.default)('chicken-design-uploader-dragger', {
    'is-dragover': dragOver
  });

  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };

  var handleDrag = function handleDrag(e, over) {
    e.preventDefault();
    setDragOver(over);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: klass,
    onDragOver: function onDragOver(e) {
      handleDrag(e, true);
    },
    onDragLeave: function onDragLeave(e) {
      handleDrag(e, false);
    },
    onDrop: handleDrop
  }, children);
};

exports.Dragger = Dragger;
var _default = Dragger;
exports.default = _default;