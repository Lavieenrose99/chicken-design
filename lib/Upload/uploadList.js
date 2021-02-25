"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UploadList = void 0;

var _react = _interopRequireDefault(require("react"));

var _icon = _interopRequireDefault(require("../Icon/icon"));

var _progress = _interopRequireDefault(require("../Progress/progress"));

/*
 * @Author: your name
 * @Date: 2021-02-25 11:50:32
 * @LastEditTime: 2021-02-25 11:52:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Upload/uploadList.tsx
 */
var UploadList = function UploadList(props) {
  var fileList = props.fileList,
      onRemove = props.onRemove;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "chicken-design-upload-list"
  }, fileList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "chicken-design-upload-list-item",
      key: item.uid
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "file-name file-name-".concat(item.status)
    }, /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "file-alt",
      theme: "secondary"
    }), item.name), /*#__PURE__*/_react.default.createElement("span", {
      className: "file-status"
    }, (item.status === 'uploading' || item.status === 'ready') && /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "spinner",
      spin: true,
      theme: "primary"
    }), item.status === 'success' && /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "check-circle",
      theme: "success"
    }), item.status === 'error' && /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "times-circle",
      theme: "danger"
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: "file-actions"
    }, /*#__PURE__*/_react.default.createElement(_icon.default, {
      icon: "times",
      onClick: function onClick() {
        onRemove(item);
      }
    })), item.status === 'uploading' && /*#__PURE__*/_react.default.createElement(_progress.default, {
      percent: item.percent || 0
    }));
  }));
};

exports.UploadList = UploadList;
var _default = UploadList;
exports.default = _default;