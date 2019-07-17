"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _constants = require("./utils/constants");

var _helpers = require("./utils/helpers");

var _position = _interopRequireDefault(require("dom-helpers/query/position"));

var _requestAnimationFrame = _interopRequireDefault(require("dom-helpers/util/requestAnimationFrame"));

var _Popup = _interopRequireDefault(require("./Popup"));

var _Overlay = _interopRequireDefault(require("react-overlays/Overlay"));

var _DateContentRow = _interopRequireDefault(require("./DateContentRow"));

var _Header = _interopRequireDefault(require("./Header"));

var _DateHeader = _interopRequireDefault(require("./DateHeader"));

var _eventLevels = require("./utils/eventLevels");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/Month.js";

let eventsForWeek = (evts, start, end, accessors) => evts.filter(e => (0, _eventLevels.inRange)(e, start, end, accessors));

class MonthView extends _react.default.Component {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    this.getContainer = () => {
      return (0, _reactDom.findDOMNode)(this);
    };

    this.renderWeek = (week, weekIdx) => {
      let _this$props = this.props,
          events = _this$props.events,
          components = _this$props.components,
          selectable = _this$props.selectable,
          getNow = _this$props.getNow,
          selected = _this$props.selected,
          date = _this$props.date,
          localizer = _this$props.localizer,
          longPressThreshold = _this$props.longPressThreshold,
          accessors = _this$props.accessors,
          getters = _this$props.getters;
      const _this$state = this.state,
            needLimitMeasure = _this$state.needLimitMeasure,
            rowLimit = _this$state.rowLimit;
      events = eventsForWeek(events, week[0], week[week.length - 1], accessors);
      events.sort((a, b) => (0, _eventLevels.sortEvents)(a, b, accessors));
      return _react.default.createElement(_DateContentRow.default, {
        key: weekIdx,
        ref: weekIdx === 0 ? this.slotRowRef : undefined,
        container: this.getContainer,
        className: "rbc-month-row",
        getNow: getNow,
        date: date,
        range: week,
        events: events,
        maxRows: rowLimit,
        selected: selected,
        selectable: selectable,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        renderHeader: this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: this.handleShowMore,
        onSelect: this.handleSelectEvent,
        onDoubleClick: this.handleDoubleClickEvent,
        onSelectSlot: this.handleSelectSlot,
        longPressThreshold: longPressThreshold,
        rtl: this.props.rtl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      });
    };

    this.readerDateHeading = (_ref) => {
      let date = _ref.date,
          className = _ref.className,
          props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["date", "className"]);
      let _this$props2 = this.props,
          currentDate = _this$props2.date,
          getDrilldownView = _this$props2.getDrilldownView,
          localizer = _this$props2.localizer;
      let isOffRange = dates.month(date) !== dates.month(currentDate);
      let isCurrent = dates.eq(date, currentDate, 'day');
      let drilldownView = getDrilldownView(date);
      let label = localizer.format(date, 'dateFormat');
      let DateHeaderComponent = this.props.components.dateHeader || _DateHeader.default;
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), _react.default.createElement(DateHeaderComponent, {
        label: label,
        date: date,
        drilldownView: drilldownView,
        isOffRange: isOffRange,
        onDrillDown: e => this.handleHeadingClick(date, drilldownView, e),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }));
    };

    this.handleSelectSlot = (range, slotInfo) => {
      this._pendingSelection = this._pendingSelection.concat(range);
      clearTimeout(this._selectTimer);
      this._selectTimer = setTimeout(() => this.selectDates(slotInfo));
    };

    this.handleHeadingClick = (date, view, e) => {
      e.preventDefault();
      this.clearSelection();
      (0, _helpers.notify)(this.props.onDrillDown, [date, view]);
    };

    this.handleSelectEvent = function () {
      _this.clearSelection();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    this.handleDoubleClickEvent = function () {
      _this.clearSelection();

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (0, _helpers.notify)(_this.props.onDoubleClickEvent, args);
    };

    this.handleShowMore = (events, date, cell, slot, target) => {
      const _this$props3 = this.props,
            popup = _this$props3.popup,
            onDrillDown = _this$props3.onDrillDown,
            onShowMore = _this$props3.onShowMore,
            getDrilldownView = _this$props3.getDrilldownView; //cancel any pending selections so only the event click goes through.

      this.clearSelection();

      if (popup) {
        let position = (0, _position.default)(cell, (0, _reactDom.findDOMNode)(this));
        this.setState({
          overlay: {
            date,
            events,
            position,
            target
          }
        });
      } else {
        (0, _helpers.notify)(onDrillDown, [date, getDrilldownView(date) || _constants.views.DAY]);
      }

      (0, _helpers.notify)(onShowMore, [events, date, slot]);
    };

    this._bgRows = [];
    this._pendingSelection = [];
    this.slotRowRef = _react.default.createRef();
    this.state = {
      rowLimit: 5,
      needLimitMeasure: true
    };
  }

  componentWillReceiveProps(_ref2) {
    let date = _ref2.date;
    this.setState({
      needLimitMeasure: !dates.eq(date, this.props.date, 'month')
    });
  }

  componentDidMount() {
    let running;
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    window.addEventListener('resize', this._resizeListener = () => {
      if (!running) {
        (0, _requestAnimationFrame.default)(() => {
          running = false;
          this.setState({
            needLimitMeasure: true
          }); //eslint-disable-line
        });
      }
    }, false);
  }

  componentDidUpdate() {
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resizeListener, false);
  }

  render() {
    let _this$props4 = this.props,
        date = _this$props4.date,
        localizer = _this$props4.localizer,
        className = _this$props4.className,
        month = dates.visibleDays(date, localizer),
        weeks = (0, _chunk.default)(month, 7);
    this._weekCount = weeks.length;
    return _react.default.createElement("div", {
      className: (0, _classnames.default)('rbc-month-view', className),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, _react.default.createElement("div", {
      className: "rbc-row rbc-month-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
  }

  renderHeaders(row) {
    let _this$props5 = this.props,
        localizer = _this$props5.localizer,
        components = _this$props5.components;
    let first = row[0];
    let last = row[row.length - 1];
    let HeaderComponent = components.header || _Header.default;
    return dates.range(first, last, 'day').map((day, idx) => _react.default.createElement("div", {
      key: 'header_' + idx,
      className: "rbc-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, _react.default.createElement(HeaderComponent, {
      date: day,
      localizer: localizer,
      label: localizer.format(day, 'weekdayFormat'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    })));
  }

  renderOverlay() {
    let overlay = this.state && this.state.overlay || {};
    let _this$props6 = this.props,
        accessors = _this$props6.accessors,
        localizer = _this$props6.localizer,
        components = _this$props6.components,
        getters = _this$props6.getters,
        selected = _this$props6.selected;
    return _react.default.createElement(_Overlay.default, {
      rootClose: true,
      placement: "bottom",
      container: this,
      show: !!overlay.position,
      onHide: () => this.setState({
        overlay: null
      }),
      target: () => overlay.target,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, (_ref3) => {
      let props = _ref3.props;
      return _react.default.createElement(_Popup.default, (0, _extends2.default)({}, props, {
        accessors: accessors,
        getters: getters,
        selected: selected,
        components: components,
        localizer: localizer,
        position: overlay.position,
        events: overlay.events,
        slotStart: overlay.date,
        slotEnd: overlay.end,
        onSelect: this.handleSelectEvent,
        onDoubleClick: this.handleDoubleClickEvent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }));
    });
  }

  measureRowLimit() {
    this.setState({
      needLimitMeasure: false,
      rowLimit: this.slotRowRef.current.getRowLimit()
    });
  }

  selectDates(slotInfo) {
    let slots = this._pendingSelection.slice();

    this._pendingSelection = [];
    slots.sort((a, b) => +a - +b);
    (0, _helpers.notify)(this.props.onSelectSlot, {
      slots,
      start: slots[0],
      end: slots[slots.length - 1],
      action: slotInfo.action,
      bounds: slotInfo.bounds,
      box: slotInfo.box
    });
  }

  clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  }

}

MonthView.propTypes = process.env.NODE_ENV !== "production" ? {
  events: _propTypes.default.array.isRequired,
  date: _propTypes.default.instanceOf(Date),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  step: _propTypes.default.number,
  getNow: _propTypes.default.func.isRequired,
  scrollToTime: _propTypes.default.instanceOf(Date),
  rtl: _propTypes.default.bool,
  width: _propTypes.default.number,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onNavigate: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onShowMore: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired,
  popup: _propTypes.default.bool,
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })])
} : {};

MonthView.range = (date, _ref4) => {
  let localizer = _ref4.localizer;
  let start = dates.firstVisibleDay(date, localizer);
  let end = dates.lastVisibleDay(date, localizer);
  return {
    start,
    end
  };
};

MonthView.navigate = (date, action) => {
  switch (action) {
    case _constants.navigate.PREVIOUS:
      return dates.add(date, -1, 'month');

    case _constants.navigate.NEXT:
      return dates.add(date, 1, 'month');

    default:
      return date;
  }
};

MonthView.title = (date, _ref5) => {
  let localizer = _ref5.localizer;
  return localizer.format(date, 'monthHeaderFormat');
};

var _default = MonthView;
exports.default = _default;
module.exports = exports["default"];