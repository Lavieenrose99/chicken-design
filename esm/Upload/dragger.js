import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import classNames from 'classnames';
export var Dragger = function Dragger(props) {
  var onFile = props.onFile,
      children = props.children;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dragOver = _useState2[0],
      setDragOver = _useState2[1];

  var klass = classNames('chicken-design-uploader-dragger', {
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

  return /*#__PURE__*/React.createElement("div", {
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
export default Dragger;