"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/DateHeader.js";

const DateHeader = (_ref) => {
  let label = _ref.label,
      drilldownView = _ref.drilldownView,
      onDrillDown = _ref.onDrillDown;

  if (!drilldownView) {
    return _react.default.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: void 0
    }, label);
  }

  return _react.default.createElement("a", {
    href: "#",
    onClick: onDrillDown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: void 0
  }, label);
};

DateHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes.default.node,
  date: _propTypes.default.instanceOf(Date),
  drilldownView: _propTypes.default.string,
  onDrillDown: _propTypes.default.func,
  isOffRange: _propTypes.default.bool
} : {};
var _default = DateHeader;
exports.default = _default;
module.exports = exports["default"];