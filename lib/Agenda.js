"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _class = _interopRequireDefault(require("dom-helpers/class"));

var _width = _interopRequireDefault(require("dom-helpers/query/width"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _constants = require("./utils/constants");

var _eventLevels = require("./utils/eventLevels");

var _selection = require("./utils/selection");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/Agenda.js";

class Agenda extends _react.default.Component {
  constructor(props) {
    super(props);

    this.renderDay = (day, events, dayKey) => {
      let _this$props = this.props,
          selected = _this$props.selected,
          getters = _this$props.getters,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          _this$props$component = _this$props.components,
          Event = _this$props$component.event,
          AgendaDate = _this$props$component.date;
      events = events.filter(e => (0, _eventLevels.inRange)(e, dates.startOf(day, 'day'), dates.endOf(day, 'day'), accessors));
      return events.map((event, idx) => {
        let title = accessors.title(event);
        let end = accessors.end(event);
        let start = accessors.start(event);
        const userProps = getters.eventProp(event, start, end, (0, _selection.isSelected)(event, selected));
        let dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
        let first = idx === 0 ? _react.default.createElement("td", {
          rowSpan: events.length,
          className: "rbc-agenda-date-cell",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, AgendaDate ? _react.default.createElement(AgendaDate, {
          day: day,
          label: dateLabel,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }) : dateLabel) : false;
        return _react.default.createElement("tr", {
          key: dayKey + '_' + idx,
          className: userProps.className,
          style: userProps.style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, first, _react.default.createElement("td", {
          className: "rbc-agenda-time-cell",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, this.timeRangeLabel(day, event)), _react.default.createElement("td", {
          className: "rbc-agenda-event-cell",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, Event ? _react.default.createElement(Event, {
          event: event,
          title: title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }) : title));
      }, []);
    };

    this.timeRangeLabel = (day, event) => {
      let _this$props2 = this.props,
          accessors = _this$props2.accessors,
          localizer = _this$props2.localizer,
          components = _this$props2.components;
      let labelClass = '',
          TimeComponent = components.time,
          label = localizer.messages.allDay;
      let end = accessors.end(event);
      let start = accessors.start(event);

      if (!accessors.allDay(event)) {
        if (dates.eq(start, end)) {
          label = localizer.format(start, 'agendaTimeFormat');
        } else if (dates.eq(start, end, 'day')) {
          label = localizer.format({
            start,
            end
          }, 'agendaTimeRangeFormat');
        } else if (dates.eq(day, start, 'day')) {
          label = localizer.format(start, 'agendaTimeFormat');
        } else if (dates.eq(day, end, 'day')) {
          label = localizer.format(end, 'agendaTimeFormat');
        }
      }

      if (dates.gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
      if (dates.lt(day, end, 'day')) labelClass += ' rbc-continues-after';
      return _react.default.createElement("span", {
        className: labelClass.trim(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, TimeComponent ? _react.default.createElement(TimeComponent, {
        event: event,
        day: day,
        label: label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }) : label);
    };

    this._adjustHeader = () => {
      if (!this.tbodyRef.current) return;
      let header = this.headerRef.current;
      let firstRow = this.tbodyRef.current.firstChild;
      if (!firstRow) return;
      let isOverflowing = this.contentRef.current.scrollHeight > this.contentRef.current.clientHeight;
      let widths = this._widths || [];
      this._widths = [(0, _width.default)(firstRow.children[0]), (0, _width.default)(firstRow.children[1])];

      if (widths[0] !== this._widths[0] || widths[1] !== this._widths[1]) {
        this.dateColRef.current.style.width = this._widths[0] + 'px';
        this.timeColRef.current.style.width = this._widths[1] + 'px';
      }

      if (isOverflowing) {
        _class.default.addClass(header, 'rbc-header-overflowing');

        header.style.marginRight = (0, _scrollbarSize.default)() + 'px';
      } else {
        _class.default.removeClass(header, 'rbc-header-overflowing');
      }
    };

    this.headerRef = _react.default.createRef();
    this.dateColRef = _react.default.createRef();
    this.timeColRef = _react.default.createRef();
    this.contentRef = _react.default.createRef();
    this.tbodyRef = _react.default.createRef();
  }

  componentDidMount() {
    this._adjustHeader();
  }

  componentDidUpdate() {
    this._adjustHeader();
  }

  render() {
    let _this$props3 = this.props,
        length = _this$props3.length,
        date = _this$props3.date,
        events = _this$props3.events,
        accessors = _this$props3.accessors,
        localizer = _this$props3.localizer;
    let messages = localizer.messages;
    let end = dates.add(date, length, 'day');
    let range = dates.range(date, end, 'day');
    events = events.filter(event => (0, _eventLevels.inRange)(event, date, end, accessors));
    events.sort((a, b) => +accessors.start(a) - +accessors.start(b));
    return _react.default.createElement("div", {
      className: "rbc-agenda-view",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, events.length !== 0 ? _react.default.createElement(_react.default.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, _react.default.createElement("table", {
      ref: this.headerRef,
      className: "rbc-agenda-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, _react.default.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, _react.default.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, _react.default.createElement("th", {
      className: "rbc-header",
      ref: this.dateColRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, messages.date), _react.default.createElement("th", {
      className: "rbc-header",
      ref: this.timeColRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, messages.time), _react.default.createElement("th", {
      className: "rbc-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, messages.event)))), _react.default.createElement("div", {
      className: "rbc-agenda-content",
      ref: this.contentRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, _react.default.createElement("table", {
      className: "rbc-agenda-table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, _react.default.createElement("tbody", {
      ref: this.tbodyRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, range.map((day, idx) => this.renderDay(day, events, idx)))))) : _react.default.createElement("span", {
      className: "rbc-agenda-empty",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, messages.noEventsInRange));
  }

}

Agenda.propTypes = process.env.NODE_ENV !== "production" ? {
  events: _propTypes.default.array,
  date: _propTypes.default.instanceOf(Date),
  length: _propTypes.default.number.isRequired,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired
} : {};
Agenda.defaultProps = {
  length: 30
};

Agenda.range = (start, _ref) => {
  let _ref$length = _ref.length,
      length = _ref$length === void 0 ? Agenda.defaultProps.length : _ref$length;
  let end = dates.add(start, length, 'day');
  return {
    start,
    end
  };
};

Agenda.navigate = (date, action, _ref2) => {
  let _ref2$length = _ref2.length,
      length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length;

  switch (action) {
    case _constants.navigate.PREVIOUS:
      return dates.add(date, -length, 'day');

    case _constants.navigate.NEXT:
      return dates.add(date, length, 'day');

    default:
      return date;
  }
};

Agenda.title = (start, _ref3) => {
  let _ref3$length = _ref3.length,
      length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
      localizer = _ref3.localizer;
  let end = dates.add(start, length, 'day');
  return localizer.format({
    start,
    end
  }, 'agendaHeaderFormat');
};

var _default = Agenda;
exports.default = _default;
module.exports = exports["default"];