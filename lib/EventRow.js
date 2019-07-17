"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _EventRowMixin = _interopRequireDefault(require("./EventRowMixin"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/EventRow.js";

class EventRow extends _react.default.Component {
  render() {
    let _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className;
    let lastEnd = 1;
    return _react.default.createElement("div", {
      className: (0, _classnames.default)(className, 'rbc-row'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, segments.reduce((row, _ref, li) => {
      let event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
      let key = '_lvl_' + li;
      let gap = left - lastEnd;

      let content = _EventRowMixin.default.renderEvent(this.props, event);

      if (gap) row.push(_EventRowMixin.default.renderSpan(slots, gap, key + "_gap"));
      row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
      lastEnd = right + 1;
      return row;
    }, []));
  }

}

EventRow.propTypes = process.env.NODE_ENV !== "production" ? (0, _extends2.default)({
  segments: _propTypes.default.array
}, _EventRowMixin.default.propTypes) : {};
EventRow.defaultProps = (0, _extends2.default)({}, _EventRowMixin.default.defaultProps);
var _default = EventRow;
exports.default = _default;
module.exports = exports["default"];