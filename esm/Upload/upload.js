import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useRef, useState } from 'react';
import axios from 'axios';
import UploadList from './uploadList';
import Dragger from './dragger';
export var Upload = function Upload(props) {
  var action = props.action,
      defaultFileList = props.defaultFileList,
      beforeUpload = props.beforeUpload,
      onProgress = props.onProgress,
      onSuccess = props.onSuccess,
      onError = props.onError,
      onChange = props.onChange,
      onRemove = props.onRemove,
      name = props.name,
      headers = props.headers,
      data = props.data,
      withCredentials = props.withCredentials,
      accept = props.accept,
      multiple = props.multiple,
      children = props.children,
      drag = props.drag;
  var fileInput = useRef(null);

  var _useState = useState(defaultFileList || []),
      _useState2 = _slicedToArray(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var updateFileList = function updateFileList(updateFile, updateObj) {
    setFileList(function (prevList) {
      return prevList.map(function (file) {
        if (file.uid === updateFile.uid) {
          return _objectSpread(_objectSpread({}, file), updateObj);
        }

        return file;
      });
    });
  };

  var handleClick = function handleClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  var handleFileChange = function handleFileChange(e) {
    var files = e.target.files;

    if (!files) {
      return;
    }

    uploadFiles(files);

    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  var handleRemove = function handleRemove(file) {
    setFileList(function (prevList) {
      return prevList.filter(function (item) {
        return item.uid !== file.uid;
      });
    });

    if (onRemove) {
      onRemove(file);
    }
  };

  var uploadFiles = function uploadFiles(files) {
    var postFiles = Array.from(files);
    postFiles.forEach(function (file) {
      if (!beforeUpload) {
        post(file);
      } else {
        var result = beforeUpload(file);

        if (result && result instanceof Promise) {
          result.then(function (processedFile) {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };

  var post = function post(file) {
    var _file = {
      uid: "".concat(Date.now(), "upload-file"),
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }; // setFileList([_file, ...fileList])

    setFileList(function (prevList) {
      return [_file].concat(_toConsumableArray(prevList));
    });
    var formData = new FormData();
    formData.append(name || 'file', file);

    if (data) {
      Object.keys(data).forEach(function (key) {
        formData.append(key, data[key]);
      });
    }

    axios.post(action, formData, {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        'Content-Type': 'multipart/form-data'
      }),
      withCredentials: withCredentials,
      onUploadProgress: function onUploadProgress(e) {
        var percentage = Math.round(e.loaded * 100 / e.total) || 0;

        if (percentage < 100) {
          updateFileList(_file, {
            percent: percentage,
            status: 'uploading'
          });

          if (onProgress) {
            onProgress(percentage, file);
          }
        }
      }
    }).then(function (resp) {
      updateFileList(_file, {
        status: 'success',
        response: resp.data
      });

      if (onSuccess) {
        onSuccess(resp.data, file);
      }

      if (onChange) {
        onChange(file);
      }
    }).catch(function (err) {
      updateFileList(_file, {
        status: 'error',
        error: err
      });

      if (onError) {
        onError(err, file);
      }

      if (onChange) {
        onChange(file);
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-upload-component"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chicken-design-upload-input",
    style: {
      display: 'inline-block'
    },
    onClick: handleClick
  }, drag ? /*#__PURE__*/React.createElement(Dragger, {
    onFile: function onFile(files) {
      uploadFiles(files);
    }
  }, children) : children, /*#__PURE__*/React.createElement("input", {
    className: "chicken-design-file-input",
    style: {
      display: 'none'
    },
    ref: fileInput,
    onChange: handleFileChange,
    type: "file",
    accept: accept,
    multiple: multiple
  })), /*#__PURE__*/React.createElement(UploadList, {
    fileList: fileList,
    onRemove: handleRemove
  }));
};
Upload.defaultProps = {
  name: 'file'
};
export default Upload;