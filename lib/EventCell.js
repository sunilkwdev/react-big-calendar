"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/EventCell.js";

class EventCell extends _react.default.Component {
  render() {
    let _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        isAllDay = _this$props.isAllDay,
        onSelect = _this$props.onSelect,
        _onDoubleClick = _this$props.onDoubleClick,
        localizer = _this$props.localizer,
        continuesPrior = _this$props.continuesPrior,
        continuesAfter = _this$props.continuesAfter,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        children = _this$props.children,
        _this$props$component = _this$props.components,
        Event = _this$props$component.event,
        EventWrapper = _this$props$component.eventWrapper,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"]);
    let title = accessors.title(event);
    let tooltip = accessors.tooltip(event);
    let end = accessors.end(event);
    let start = accessors.start(event);
    let allDay = accessors.allDay(event);
    let showAsAllDay = isAllDay || allDay || dates.diff(start, dates.ceil(end, 'day'), 'day') > 1;
    let userProps = getters.eventProp(event, start, end, selected);

    const content = _react.default.createElement("div", {
      className: "rbc-event-content",
      title: tooltip || undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, Event ? _react.default.createElement(Event, {
      event: event,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      title: title,
      isAllDay: allDay,
      localizer: localizer,
      slotStart: slotStart,
      slotEnd: slotEnd,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }) : title);

    return _react.default.createElement(EventWrapper, (0, _extends2.default)({}, this.props, {
      type: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), _react.default.createElement("div", (0, _extends2.default)({}, props, {
      tabIndex: 0,
      style: (0, _extends2.default)({}, userProps.style, style),
      className: (0, _classnames.default)('rbc-event', className, userProps.className, {
        'rbc-selected': selected,
        'rbc-event-allday': showAsAllDay,
        'rbc-event-continues-prior': continuesPrior,
        'rbc-event-continues-after': continuesAfter
      }),
      onClick: e => onSelect && onSelect(event, e),
      onDoubleClick: e => _onDoubleClick && _onDoubleClick(event, e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), typeof children === 'function' ? children(content) : content));
  }

}

EventCell.propTypes = process.env.NODE_ENV !== "production" ? {
  event: _propTypes.default.object.isRequired,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.instanceOf(Date),
  selected: _propTypes.default.bool,
  isAllDay: _propTypes.default.bool,
  continuesPrior: _propTypes.default.bool,
  continuesAfter: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object,
  onSelect: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func
} : {};
var _default = EventCell;
exports.default = _default;
module.exports = exports["default"];