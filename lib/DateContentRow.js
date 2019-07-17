"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _height = _interopRequireDefault(require("dom-helpers/query/height"));

var _querySelectorAll = _interopRequireDefault(require("dom-helpers/query/querySelectorAll"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var dates = _interopRequireWildcard(require("./utils/dates"));

var _BackgroundCells = _interopRequireDefault(require("./BackgroundCells"));

var _EventRow = _interopRequireDefault(require("./EventRow"));

var _EventEndingRow = _interopRequireDefault(require("./EventEndingRow"));

var DateSlotMetrics = _interopRequireWildcard(require("./utils/DateSlotMetrics"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/DateContentRow.js";

class DateContentRow extends _react.default.Component {
  constructor() {
    super(...arguments);

    this.handleSelectSlot = slot => {
      const _this$props = this.props,
            range = _this$props.range,
            onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
    };

    this.handleShowMore = (slot, target) => {
      const _this$props2 = this.props,
            range = _this$props2.range,
            onShowMore = _this$props2.onShowMore;
      let metrics = this.slotMetrics(this.props);
      let row = (0, _querySelectorAll.default)((0, _reactDom.findDOMNode)(this), '.rbc-row-bg')[0];
      let cell;
      if (row) cell = row.children[slot - 1];
      let events = metrics.getEventsForSlot(slot);
      onShowMore(events, range[slot - 1], cell, slot, target);
    };

    this.createHeadingRef = r => {
      this.headingRow = r;
    };

    this.createEventRef = r => {
      this.eventRow = r;
    };

    this.getContainer = () => {
      const container = this.props.container;
      return container ? container() : (0, _reactDom.findDOMNode)(this);
    };

    this.renderHeadingCell = (date, index) => {
      let _this$props3 = this.props,
          renderHeader = _this$props3.renderHeader,
          getNow = _this$props3.getNow;
      return renderHeader({
        date,
        key: "header_" + index,
        className: (0, _classnames.default)('rbc-date-cell', dates.eq(date, getNow(), 'day') && 'rbc-now')
      });
    };

    this.renderDummy = () => {
      let _this$props4 = this.props,
          className = _this$props4.className,
          range = _this$props4.range,
          renderHeader = _this$props4.renderHeader;
      return _react.default.createElement("div", {
        className: className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "rbc-row-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, renderHeader && _react.default.createElement("div", {
        className: "rbc-row",
        ref: this.createHeadingRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, range.map(this.renderHeadingCell)), _react.default.createElement("div", {
        className: "rbc-row",
        ref: this.createEventRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "rbc-row-segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "rbc-event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, _react.default.createElement("div", {
        className: "rbc-event-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "\xA0"))))));
    };

    this.slotMetrics = DateSlotMetrics.getSlotMetrics();
  }

  getRowLimit() {
    let eventHeight = (0, _height.default)(this.eventRow);
    let headingHeight = this.headingRow ? (0, _height.default)(this.headingRow) : 0;
    let eventSpace = (0, _height.default)((0, _reactDom.findDOMNode)(this)) - headingHeight; // return Math.max(Math.floor(eventSpace / eventHeight), 1)

    return Math.floor(eventHeight * 10);
  }

  render() {
    const _this$props5 = this.props,
          date = _this$props5.date,
          rtl = _this$props5.rtl,
          range = _this$props5.range,
          className = _this$props5.className,
          selected = _this$props5.selected,
          selectable = _this$props5.selectable,
          renderForMeasure = _this$props5.renderForMeasure,
          accessors = _this$props5.accessors,
          getters = _this$props5.getters,
          components = _this$props5.components,
          getNow = _this$props5.getNow,
          renderHeader = _this$props5.renderHeader,
          onSelect = _this$props5.onSelect,
          localizer = _this$props5.localizer,
          onSelectStart = _this$props5.onSelectStart,
          onSelectEnd = _this$props5.onSelectEnd,
          onDoubleClick = _this$props5.onDoubleClick,
          resourceId = _this$props5.resourceId,
          longPressThreshold = _this$props5.longPressThreshold,
          isAllDay = _this$props5.isAllDay;
    if (renderForMeasure) return this.renderDummy();
    let metrics = this.slotMetrics(this.props);
    let levels = metrics.levels,
        extra = metrics.extra;
    let WeekWrapper = components.weekWrapper;
    const eventRowProps = {
      selected,
      accessors,
      getters,
      localizer,
      components,
      onSelect,
      onDoubleClick,
      resourceId,
      slotMetrics: metrics
    };
    return _react.default.createElement("div", {
      className: className,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, _react.default.createElement(_BackgroundCells.default, {
      date: date,
      getNow: getNow,
      rtl: rtl,
      range: range,
      selectable: selectable,
      container: this.getContainer,
      getters: getters,
      onSelectStart: onSelectStart,
      onSelectEnd: onSelectEnd,
      onSelectSlot: this.handleSelectSlot,
      components: components,
      longPressThreshold: longPressThreshold,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), _react.default.createElement("div", {
      className: "rbc-row-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, renderHeader && _react.default.createElement("div", {
      className: "rbc-row ",
      ref: this.createHeadingRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, range.map(this.renderHeadingCell)), _react.default.createElement(WeekWrapper, (0, _extends2.default)({
      isAllDay: isAllDay
    }, eventRowProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), levels.map((segs, idx) => _react.default.createElement(_EventRow.default, (0, _extends2.default)({
      key: idx,
      segments: segs
    }, eventRowProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }))), !!extra.length && _react.default.createElement(_EventEndingRow.default, (0, _extends2.default)({
      segments: extra,
      onShowMore: this.handleShowMore
    }, eventRowProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    })))));
  }

}

DateContentRow.propTypes = process.env.NODE_ENV !== "production" ? {
  date: _propTypes.default.instanceOf(Date),
  events: _propTypes.default.array.isRequired,
  range: _propTypes.default.array.isRequired,
  rtl: _propTypes.default.bool,
  resourceId: _propTypes.default.any,
  renderForMeasure: _propTypes.default.bool,
  renderHeader: _propTypes.default.func,
  container: _propTypes.default.func,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onShowMore: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  dayPropGetter: _propTypes.default.func,
  getNow: _propTypes.default.func.isRequired,
  isAllDay: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  minRows: _propTypes.default.number.isRequired,
  maxRows: _propTypes.default.number.isRequired
} : {};
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var _default = DateContentRow;
exports.default = _default;
module.exports = exports["default"];