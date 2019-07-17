"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));

var _react = _interopRequireDefault(require("react"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _DateContentRow = _interopRequireDefault(require("./DateContentRow"));

var _Header = _interopRequireDefault(require("./Header"));

var _ResourceHeader = _interopRequireDefault(require("./ResourceHeader"));

var _helpers = require("./utils/helpers");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/TimeGridHeader.js";

class TimeGridHeader extends _react.default.Component {
  constructor() {
    super(...arguments);

    this.handleHeaderClick = (date, view, e) => {
      e.preventDefault();
      (0, _helpers.notify)(this.props.onDrillDown, [date, view]);
    };

    this.renderRow = resource => {
      let _this$props = this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          range = _this$props.range,
          getters = _this$props.getters,
          localizer = _this$props.localizer,
          accessors = _this$props.accessors,
          components = _this$props.components;
      const resourceId = accessors.resourceId(resource);
      let eventsToDisplay = resource ? events.filter(event => accessors.resource(event) === resourceId) : events;
      return _react.default.createElement(_DateContentRow.default, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2,
        range: range,
        events: eventsToDisplay,
        resourceId: resourceId,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: this.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: this.props.onSelectEvent,
        onDoubleClick: this.props.onDoubleClickEvent,
        onSelectSlot: this.props.onSelectSlot,
        longPressThreshold: this.props.longPressThreshold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      });
    };
  }

  renderHeaderCells(range) {
    let _this$props2 = this.props,
        localizer = _this$props2.localizer,
        getDrilldownView = _this$props2.getDrilldownView,
        getNow = _this$props2.getNow,
        dayProp = _this$props2.getters.dayProp,
        _this$props2$componen = _this$props2.components.header,
        HeaderComponent = _this$props2$componen === void 0 ? _Header.default : _this$props2$componen;
    const today = getNow();
    return range.map((date, i) => {
      let drilldownView = getDrilldownView(date);
      let label = localizer.format(date, 'dayFormat');

      const _dayProp = dayProp(date),
            className = _dayProp.className,
            style = _dayProp.style;

      let header = _react.default.createElement(HeaderComponent, {
        date: date,
        label: label,
        localizer: localizer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });

      return _react.default.createElement("div", {
        key: i,
        style: style,
        className: (0, _classnames.default)('rbc-header', className, dates.eq(date, today, 'day') && 'rbc-today'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, drilldownView ? _react.default.createElement("a", {
        href: "#",
        onClick: e => this.handleHeaderClick(date, drilldownView, e),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, header) : _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, header));
    });
  }

  render() {
    let _this$props3 = this.props,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        resources = _this$props3.resources,
        range = _this$props3.range,
        events = _this$props3.events,
        getNow = _this$props3.getNow,
        accessors = _this$props3.accessors,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        getters = _this$props3.getters,
        scrollRef = _this$props3.scrollRef,
        localizer = _this$props3.localizer,
        isOverflowing = _this$props3.isOverflowing,
        _this$props3$componen = _this$props3.components,
        TimeGutterHeader = _this$props3$componen.timeGutterHeader,
        _this$props3$componen2 = _this$props3$componen.resourceHeader,
        ResourceHeaderComponent = _this$props3$componen2 === void 0 ? _ResourceHeader.default : _this$props3$componen2;
    let style = {};

    if (isOverflowing) {
      style[rtl ? 'marginLeft' : 'marginRight'] = (0, _scrollbarSize.default)() + "px";
    }

    const groupedEvents = resources.groupEvents(events);
    return _react.default.createElement("div", {
      style: style,
      ref: scrollRef,
      className: (0, _classnames.default)('rbc-time-header', isOverflowing && 'rbc-overflowing'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, _react.default.createElement("div", {
      className: "rbc-label rbc-time-header-gutter",
      style: {
        width,
        minWidth: width,
        maxWidth: width
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, TimeGutterHeader && _react.default.createElement(TimeGutterHeader, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    })), resources.map((_ref, idx) => {
      let id = _ref[0],
          resource = _ref[1];
      return _react.default.createElement("div", {
        className: "rbc-time-header-content",
        key: id || idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, resource && _react.default.createElement("div", {
        className: "rbc-row rbc-row-resource",
        key: "resource_" + idx,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "rbc-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, _react.default.createElement(ResourceHeaderComponent, {
        index: idx,
        label: accessors.resourceTitle(resource),
        resource: resource,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }))), _react.default.createElement("div", {
        className: "rbc-row rbc-time-header-cell" + (range.length <= 1 ? ' rbc-time-header-cell-single-day' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, this.renderHeaderCells(range)), _react.default.createElement(_DateContentRow.default, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2,
        range: range,
        events: groupedEvents.get(id) || [],
        resourceId: resource && id,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: this.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: this.props.onSelectEvent,
        onDoubleClick: this.props.onDoubleClickEvent,
        onSelectSlot: this.props.onSelectSlot,
        longPressThreshold: this.props.longPressThreshold,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }));
    }));
  }

}

TimeGridHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  range: _propTypes.default.array.isRequired,
  events: _propTypes.default.array.isRequired,
  resources: _propTypes.default.object,
  getNow: _propTypes.default.func.isRequired,
  isOverflowing: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  localizer: _propTypes.default.object.isRequired,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onSelectSlot: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  scrollRef: _propTypes.default.any
} : {};
var _default = TimeGridHeader;
exports.default = _default;
module.exports = exports["default"];