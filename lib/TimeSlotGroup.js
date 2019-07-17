"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _BackgroundWrapper = _interopRequireDefault(require("./BackgroundWrapper"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/TimeSlotGroup.js";

class TimeSlotGroup extends _react.Component {
  render() {
    const _this$props = this.props,
          renderSlot = _this$props.renderSlot,
          resource = _this$props.resource,
          group = _this$props.group,
          getters = _this$props.getters,
          _this$props$component = _this$props.components,
          _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component,
          _this$props$component3 = _this$props$component2.timeSlotWrapper,
          Wrapper = _this$props$component3 === void 0 ? _BackgroundWrapper.default : _this$props$component3;

    return _react.default.createElement("div", {
      className: "rbc-timeslot-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, group.map((value, idx) => {
      const slotProps = getters ? getters.slotProp(value, resource) : {};
      return _react.default.createElement(Wrapper, {
        key: idx,
        value: value,
        resource: resource,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, _react.default.createElement("div", (0, _extends2.default)({}, slotProps, {
        className: (0, _classnames.default)('rbc-time-slot', slotProps.className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), renderSlot && renderSlot(value, idx)));
    }));
  }

}

exports.default = TimeSlotGroup;
TimeSlotGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  renderSlot: _propTypes.default.func,
  group: _propTypes.default.array.isRequired,
  resource: _propTypes.default.any,
  components: _propTypes.default.object,
  getters: _propTypes.default.object
} : {};
module.exports = exports["default"];