"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _requestAnimationFrame = _interopRequireDefault(require("dom-helpers/util/requestAnimationFrame"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _DayColumn = _interopRequireDefault(require("./DayColumn"));

var _TimeGutter = _interopRequireDefault(require("./TimeGutter"));

var _width = _interopRequireDefault(require("dom-helpers/query/width"));

var _TimeGridHeader = _interopRequireDefault(require("./TimeGridHeader"));

var _helpers = require("./utils/helpers");

var _eventLevels = require("./utils/eventLevels");

var _Resources = _interopRequireDefault(require("./utils/Resources"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/TimeGrid.js";

class TimeGrid extends _react.Component {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    this.handleScroll = e => {
      if (this.scrollRef.current) {
        this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };

    this.handleResize = () => {
      _requestAnimationFrame.default.cancel(this.rafHandle);

      this.rafHandle = (0, _requestAnimationFrame.default)(this.checkOverflow);
    };

    this.gutterRef = ref => {
      this.gutter = ref && (0, _reactDom.findDOMNode)(ref);
    };

    this.handleSelectAlldayEvent = function () {
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    this.handleSelectAllDaySlot = (slots, slotInfo) => {
      const onSelectSlot = this.props.onSelectSlot;
      (0, _helpers.notify)(onSelectSlot, {
        slots,
        start: slots[0],
        end: slots[slots.length - 1],
        action: slotInfo.action
      });
    };

    this.checkOverflow = () => {
      if (this._updatingOverflow) return;
      const content = this.contentRef.current;
      let isOverflowing = content.scrollHeight > content.clientHeight;

      if (this.state.isOverflowing !== isOverflowing) {
        this._updatingOverflow = true;
        this.setState({
          isOverflowing
        }, () => {
          this._updatingOverflow = false;
        });
      }
    };

    this.memoizedResources = (0, _memoizeOne.default)((resources, accessors) => (0, _Resources.default)(resources, accessors));
    this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    this.scrollRef = _react.default.createRef();
    this.contentRef = _react.default.createRef();
  }

  componentWillMount() {
    this.calculateScroll();
  }

  componentDidMount() {
    this.checkOverflow();

    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);

    _requestAnimationFrame.default.cancel(this.rafHandle);

    if (this.measureGutterAnimationFrameRequest) {
      window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }
  }

  componentDidUpdate() {
    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll(); //this.checkOverflow()
  }

  componentWillReceiveProps(nextProps) {
    const _this$props = this.props,
          range = _this$props.range,
          scrollToTime = _this$props.scrollToTime; // When paginating, reset scroll

    if (!dates.eq(nextProps.range[0], range[0], 'minute') || !dates.eq(nextProps.scrollToTime, scrollToTime, 'minute')) {
      this.calculateScroll(nextProps);
    }
  }

  renderEvents(range, events, now) {
    let _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max,
        components = _this$props2.components,
        accessors = _this$props2.accessors,
        localizer = _this$props2.localizer;
    const resources = this.memoizedResources(this.props.resources, accessors);
    const groupedEvents = resources.groupEvents(events);
    return resources.map((_ref, i) => {
      let id = _ref[0],
          resource = _ref[1];
      return range.map((date, jj) => {
        let daysEvents = (groupedEvents.get(id) || []).filter(event => dates.inRange(date, accessors.start(event), accessors.end(event), 'day'));
        return _react.default.createElement(_DayColumn.default, (0, _extends2.default)({}, this.props, {
          localizer: localizer,
          min: dates.merge(date, min),
          max: dates.merge(date, max),
          resource: resource && id,
          components: components,
          isNow: dates.eq(date, now, 'day'),
          key: i + '-' + jj,
          date: date,
          events: daysEvents,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }));
      });
    });
  }

  render() {
    let _this$props3 = this.props,
        events = _this$props3.events,
        range = _this$props3.range,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        selected = _this$props3.selected,
        getNow = _this$props3.getNow,
        resources = _this$props3.resources,
        components = _this$props3.components,
        accessors = _this$props3.accessors,
        getters = _this$props3.getters,
        localizer = _this$props3.localizer,
        min = _this$props3.min,
        max = _this$props3.max,
        showMultiDayTimes = _this$props3.showMultiDayTimes,
        longPressThreshold = _this$props3.longPressThreshold;
    width = width || this.state.gutterWidth;
    let start = range[0],
        end = range[range.length - 1];
    this.slots = range.length;
    let allDayEvents = [],
        rangeEvents = [];
    events.forEach(event => {
      if ((0, _eventLevels.inRange)(event, start, end, accessors)) {
        let eStart = accessors.start(event),
            eEnd = accessors.end(event);

        if (accessors.allDay(event) || dates.isJustDate(eStart) && dates.isJustDate(eEnd) || !showMultiDayTimes && !dates.eq(eStart, eEnd, 'day')) {
          allDayEvents.push(event);
        } else {
          rangeEvents.push(event);
        }
      }
    });
    allDayEvents.sort((a, b) => (0, _eventLevels.sortEvents)(a, b, accessors));
    return _react.default.createElement("div", {
      className: (0, _classnames.default)('rbc-time-view', resources && 'rbc-time-view-resources'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, _react.default.createElement(_TimeGridHeader.default, {
      range: range,
      events: allDayEvents,
      width: width,
      rtl: rtl,
      getNow: getNow,
      localizer: localizer,
      selected: selected,
      resources: this.memoizedResources(resources, accessors),
      selectable: this.props.selectable,
      accessors: accessors,
      getters: getters,
      components: components,
      scrollRef: this.scrollRef,
      isOverflowing: this.state.isOverflowing,
      longPressThreshold: longPressThreshold,
      onSelectSlot: this.handleSelectAllDaySlot,
      onSelectEvent: this.handleSelectAlldayEvent,
      onDoubleClickEvent: this.props.onDoubleClickEvent,
      onDrillDown: this.props.onDrillDown,
      getDrilldownView: this.props.getDrilldownView,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }), _react.default.createElement("div", {
      ref: this.contentRef,
      className: "rbc-time-content",
      onScroll: this.handleScroll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, _react.default.createElement(_TimeGutter.default, {
      date: start,
      ref: this.gutterRef,
      localizer: localizer,
      min: dates.merge(start, min),
      max: dates.merge(start, max),
      step: this.props.step,
      getNow: this.props.getNow,
      timeslots: this.props.timeslots,
      components: components,
      className: "rbc-time-gutter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }), this.renderEvents(range, rangeEvents, getNow())));
  }

  clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  }

  measureGutter() {
    if (this.measureGutterAnimationFrameRequest) {
      window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
    }

    this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(() => {
      const width = (0, _width.default)(this.gutter);

      if (width && this.state.gutterWidth !== width) {
        this.setState({
          gutterWidth: width
        });
      }
    });
  }

  applyScroll() {
    if (this._scrollRatio) {
      const content = this.contentRef.current;
      content.scrollTop = content.scrollHeight * this._scrollRatio; // Only do this once

      this._scrollRatio = null;
    }
  }

  calculateScroll(props) {
    if (props === void 0) {
      props = this.props;
    }

    const _props = props,
          min = _props.min,
          max = _props.max,
          scrollToTime = _props.scrollToTime;
    const diffMillis = scrollToTime - dates.startOf(scrollToTime, 'day');
    const totalMillis = dates.diff(max, min);
    this._scrollRatio = diffMillis / totalMillis;
  }

}

exports.default = TimeGrid;
TimeGrid.propTypes = process.env.NODE_ENV !== "production" ? {
  events: _propTypes.default.array.isRequired,
  resources: _propTypes.default.array,
  step: _propTypes.default.number,
  timeslots: _propTypes.default.number,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  min: _propTypes.default.instanceOf(Date),
  max: _propTypes.default.instanceOf(Date),
  getNow: _propTypes.default.func.isRequired,
  scrollToTime: _propTypes.default.instanceOf(Date),
  showMultiDayTimes: _propTypes.default.bool,
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
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  onSelectEvent: _propTypes.default.func,
  onDoubleClickEvent: _propTypes.default.func,
  onDrillDown: _propTypes.default.func,
  getDrilldownView: _propTypes.default.func.isRequired
} : {};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  min: dates.startOf(new Date(), 'day'),
  max: dates.endOf(new Date(), 'day'),
  scrollToTime: dates.startOf(new Date(), 'day')
};
module.exports = exports["default"];