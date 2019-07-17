"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/Header.js";

const Header = (_ref) => {
  let label = _ref.label;
  return _react.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: void 0
  }, label);
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes.default.node
} : {};
var _default = Header;
exports.default = _default;
module.exports = exports["default"];