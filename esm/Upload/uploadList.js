/*
 * @Author: your name
 * @Date: 2021-02-25 11:50:32
 * @LastEditTime: 2021-02-25 14:13:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /chicken-design/components/Upload/uploadList.tsx
 */
import React from 'react';
import Icon from '../Icon/icon';
import Progress from '../Progress/progress';
export var UploadList = function UploadList(props) {
  var fileList = props.fileList,
      onRemove = props.onRemove;
  return /*#__PURE__*/React.createElement("ul", {
    className: "chicken-design-upload-list"
  }, fileList.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      className: "chicken-design-upload-list-item",
      key: item.uid
    }, /*#__PURE__*/React.createElement("span", {
      className: "file-name file-name-".concat(item.status)
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "file-alt",
      theme: "secondary"
    }), item.name), /*#__PURE__*/React.createElement("span", {
      className: "file-status"
    }, (item.status === 'uploading' || item.status === 'ready') && /*#__PURE__*/React.createElement(Icon, {
      icon: "spinner",
      spin: true,
      theme: "primary"
    }), item.status === 'success' && /*#__PURE__*/React.createElement(Icon, {
      icon: "check-circle",
      theme: "success"
    }), item.status === 'error' && /*#__PURE__*/React.createElement(Icon, {
      icon: "times-circle",
      theme: "danger"
    })), /*#__PURE__*/React.createElement("span", {
      className: "file-actions"
    }, /*#__PURE__*/React.createElement(Icon, {
      icon: "times",
      onClick: function onClick() {
        onRemove(item);
      }
    })), item.status === 'uploading' && /*#__PURE__*/React.createElement(Progress, {
      percent: item.percent || 0
    }));
  }));
};
export default UploadList;