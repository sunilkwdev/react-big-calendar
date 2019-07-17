"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/TimeGridEvent.js";

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  const style = props.style,
        className = props.className,
        event = props.event,
        accessors = props.accessors,
        rtl = props.rtl,
        selected = props.selected,
        label = props.label,
        continuesEarlier = props.continuesEarlier,
        continuesLater = props.continuesLater,
        getters = props.getters,
        onClick = props.onClick,
        onDoubleClick = props.onDoubleClick,
        _props$components = props.components,
        Event = _props$components.event,
        EventWrapper = _props$components.eventWrapper;
  let title = accessors.title(event);
  let tooltip = accessors.tooltip(event);
  let end = accessors.end(event);
  let start = accessors.start(event);
  let userProps = getters.eventProp(event, start, end, selected);
  let height = style.height,
      top = style.top,
      width = style.width,
      xOffset = style.xOffset;
  const inner = [_react.default.createElement("div", {
    key: "1",
    className: "rbc-event-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, label), _react.default.createElement("div", {
    key: "2",
    className: "rbc-event-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, Event ? _react.default.createElement(Event, {
    event: event,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }) : title)];
  return _react.default.createElement(EventWrapper, (0, _extends2.default)({
    type: "time"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), _react.default.createElement("div", {
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    style: (0, _extends2.default)({}, userProps.style, {
      top: top + "%",
      height: height + "%",
      [rtl ? 'right' : 'left']: Math.max(0, xOffset) + "%",
      width: width + "%"
    }),
    title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
    className: (0, _classnames.default)('rbc-event', className, userProps.className, {
      'rbc-selected': selected,
      'rbc-event-continues-earlier': continuesEarlier,
      'rbc-event-continues-later': continuesLater
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, inner));
}

var _default = TimeGridEvent;
exports.default = _default;
module.exports = exports["default"];