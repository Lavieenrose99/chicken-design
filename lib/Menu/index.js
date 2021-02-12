"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("./menu"));

var _subMenu = _interopRequireDefault(require("./subMenu"));

var _menuItem = _interopRequireDefault(require("./menuItem"));

var TransMenu = _menu.default;
TransMenu.Item = _menuItem.default;
TransMenu.SubMenu = _subMenu.default;
var _default = TransMenu;
exports.default = _default;