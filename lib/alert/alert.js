var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import t from 'prop-types';
var prefixCls = 'happy-alert';
var kinds = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warning: '#FFA502',
};
var Alert = function (_a) {
    var children = _a.children, _b = _a.kind, kind = _b === void 0 ? 'info' : _b, rest = __rest(_a, ["children", "kind"]);
    return (React.createElement("div", __assign({ className: prefixCls, style: {
            background: kinds[kind],
        } }, rest), children));
};
Alert.propTypes = {
    kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};
export default Alert;
