"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function useClickOutside(ref, handler) {
  (0, _react.useEffect)(function () {
    var listener = function listener(event) {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);
    return function () {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
}

var _default = useClickOutside;
exports.default = _default;