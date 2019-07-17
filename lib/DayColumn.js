"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _Selection = _interopRequireWildcard(require("./Selection"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var TimeSlotUtils = _interopRequireWildcard(require("./utils/TimeSlots"));

var _selection = require("./utils/selection");

var _helpers = require("./utils/helpers");

var DayEventLayout = _interopRequireWildcard(require("./utils/DayEventLayout"));

var _TimeSlotGroup = _interopRequireDefault(require("./TimeSlotGroup"));

var _TimeGridEvent = _interopRequireDefault(require("./TimeGridEvent"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/DayColumn.js";

class DayColumn extends _react.default.Component {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    this.intervalTriggered = false;

    this.renderEvents = () => {
      let _this$props = this.props,
          events = _this$props.events,
          rtl = _this$props.rtl,
          selected = _this$props.selected,
          accessors = _this$props.accessors,
          localizer = _this$props.localizer,
          getters = _this$props.getters,
          components = _this$props.components,
          step = _this$props.step,
          timeslots = _this$props.timeslots;
      const slotMetrics = this.slotMetrics;
      const messages = localizer.messages;
      let styledEvents = DayEventLayout.getStyledEvents({
        events,
        accessors,
        slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2)
      });
      return styledEvents.map((_ref, idx) => {
        let event = _ref.event,
            style = _ref.style;
        let end = accessors.end(event);
        let start = accessors.start(event);
        let format = 'eventTimeRangeFormat';
        let label;
        const startsBeforeDay = slotMetrics.startsBeforeDay(start);
        const startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
        if (startsBeforeDay && startsAfterDay) label = messages.allDay;else label = localizer.format({
          start,
          end
        }, format);
        let continuesEarlier = startsBeforeDay || slotMetrics.startsBefore(start);
        let continuesLater = startsAfterDay || slotMetrics.startsAfter(end);
        return _react.default.createElement(_TimeGridEvent.default, {
          style: style,
          event: event,
          label: label,
          key: 'evt_' + idx,
          getters: getters,
          rtl: rtl,
          components: components,
          continuesEarlier: continuesEarlier,
          continuesLater: continuesLater,
          accessors: accessors,
          selected: (0, _selection.isSelected)(event, selected),
          onClick: e => this._select(event, e),
          onDoubleClick: e => this._doubleClick(event, e),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        });
      });
    };

    this._selectable = () => {
      let node = (0, _reactDom.findDOMNode)(this);
      let selector = this._selector = new _Selection.default(() => (0, _reactDom.findDOMNode)(this), {
        longPressThreshold: this.props.longPressThreshold
      });

      let maybeSelect = box => {
        let onSelecting = this.props.onSelecting;
        let current = this.state || {};
        let state = selectionState(box);
        let start = state.startDate,
            end = state.endDate;

        if (onSelecting) {
          if (dates.eq(current.startDate, start, 'minutes') && dates.eq(current.endDate, end, 'minutes') || onSelecting({
            start,
            end
          }) === false) return;
        }

        if (this.state.start !== state.start || this.state.end !== state.end || this.state.selecting !== state.selecting) {
          this.setState(state);
        }
      };

      let selectionState = point => {
        let currentSlot = this.slotMetrics.closestSlotFromPoint(point, (0, _Selection.getBoundsForNode)(node));
        if (!this.state.selecting) this._initialSlot = currentSlot;
        let initialSlot = this._initialSlot;
        if (initialSlot === currentSlot) currentSlot = this.slotMetrics.nextSlot(initialSlot);
        const selectRange = this.slotMetrics.getRange(dates.min(initialSlot, currentSlot), dates.max(initialSlot, currentSlot));
        return (0, _extends2.default)({}, selectRange, {
          selecting: true,
          top: selectRange.top + "%",
          height: selectRange.height + "%"
        });
      };

      let selectorClicksHandler = (box, actionType) => {
        if (!(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(this), box)) {
          const _selectionState = selectionState(box),
                startDate = _selectionState.startDate,
                endDate = _selectionState.endDate;

          this._selectSlot({
            startDate,
            endDate,
            action: actionType,
            box
          });
        }

        this.setState({
          selecting: false
        });
      };

      selector.on('selecting', maybeSelect);
      selector.on('selectStart', maybeSelect);
      selector.on('beforeSelect', box => {
        if (this.props.selectable !== 'ignoreEvents') return;
        return !(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(this), box);
      });
      selector.on('click', box => selectorClicksHandler(box, 'click'));
      selector.on('doubleClick', box => selectorClicksHandler(box, 'doubleClick'));
      selector.on('select', bounds => {
        if (this.state.selecting) {
          this._selectSlot((0, _extends2.default)({}, this.state, {
            action: 'select',
            bounds
          }));

          this.setState({
            selecting: false
          });
        }
      });
      selector.on('reset', () => {
        if (this.state.selecting) {
          this.setState({
            selecting: false
          });
        }
      });
    };

    this._teardownSelectable = () => {
      if (!this._selector) return;

      this._selector.teardown();

      this._selector = null;
    };

    this._selectSlot = (_ref2) => {
      let startDate = _ref2.startDate,
          endDate = _ref2.endDate,
          action = _ref2.action,
          bounds = _ref2.bounds,
          box = _ref2.box;
      let current = startDate,
          slots = [];

      while (dates.lte(current, endDate)) {
        slots.push(current);
        current = dates.add(current, this.props.step, 'minutes');
      }

      (0, _helpers.notify)(this.props.onSelectSlot, {
        slots,
        start: startDate,
        end: endDate,
        resourceId: this.props.resource,
        action,
        bounds,
        box
      });
    };

    this._select = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    this._doubleClick = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      (0, _helpers.notify)(_this.props.onDoubleClickEvent, args);
    };

    this.slotMetrics = TimeSlotUtils.getSlotMetrics(this.props);
  }

  componentDidMount() {
    this.props.selectable && this._selectable();

    if (this.props.isNow) {
      this.setTimeIndicatorPositionUpdateInterval();
    }
  }

  componentWillUnmount() {
    this._teardownSelectable();

    this.clearTimeIndicatorInterval();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
    this.slotMetrics = this.slotMetrics.update(nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    const getNowChanged = !dates.eq(prevProps.getNow(), this.props.getNow(), 'minutes');

    if (prevProps.isNow !== this.props.isNow || getNowChanged) {
      this.clearTimeIndicatorInterval();

      if (this.props.isNow) {
        const tail = !getNowChanged && dates.eq(prevProps.date, this.props.date, 'minutes') && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
        this.setTimeIndicatorPositionUpdateInterval(tail);
      }
    } else if (this.props.isNow && (!dates.eq(prevProps.min, this.props.min, 'minutes') || !dates.eq(prevProps.max, this.props.max, 'minutes'))) {
      this.positionTimeIndicator();
    }
  }

  /**
   * @param tail {Boolean} - whether `positionTimeIndicator` call should be
   *   deferred or called upon setting interval (`true` - if deferred);
   */
  setTimeIndicatorPositionUpdateInterval(tail) {
    if (tail === void 0) {
      tail = false;
    }

    if (!this.intervalTriggered && !tail) {
      this.positionTimeIndicator();
    }

    this._timeIndicatorTimeout = window.setTimeout(() => {
      this.intervalTriggered = true;
      this.positionTimeIndicator();
      this.setTimeIndicatorPositionUpdateInterval();
    }, 60000);
  }

  clearTimeIndicatorInterval() {
    this.intervalTriggered = false;
    window.clearTimeout(this._timeIndicatorTimeout);
  }

  positionTimeIndicator() {
    const _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          getNow = _this$props2.getNow;
    const current = getNow();

    if (current >= min && current <= max) {
      const _this$slotMetrics$get = this.slotMetrics.getRange(current, current),
            top = _this$slotMetrics$get.top;

      this.setState({
        timeIndicatorPosition: top
      });
    } else {
      this.clearTimeIndicatorInterval();
    }
  }

  render() {
    const _this$props3 = this.props,
          max = _this$props3.max,
          rtl = _this$props3.rtl,
          isNow = _this$props3.isNow,
          resource = _this$props3.resource,
          accessors = _this$props3.accessors,
          localizer = _this$props3.localizer,
          _this$props3$getters = _this$props3.getters,
          dayProp = _this$props3$getters.dayProp,
          getters = (0, _objectWithoutPropertiesLoose2.default)(_this$props3$getters, ["dayProp"]),
          _this$props3$componen = _this$props3.components,
          EventContainer = _this$props3$componen.eventContainerWrapper,
          components = (0, _objectWithoutPropertiesLoose2.default)(_this$props3$componen, ["eventContainerWrapper"]);
    let slotMetrics = this.slotMetrics;
    let _this$state = this.state,
        selecting = _this$state.selecting,
        top = _this$state.top,
        height = _this$state.height,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
    let selectDates = {
      start: startDate,
      end: endDate
    };

    const _dayProp = dayProp(max),
          className = _dayProp.className,
          style = _dayProp.style;

    return _react.default.createElement("div", {
      style: style,
      className: (0, _classnames.default)(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today', // WHY
      selecting && 'rbc-slot-selecting'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, slotMetrics.groups.map((grp, idx) => _react.default.createElement(_TimeSlotGroup.default, {
      key: idx,
      group: grp,
      resource: resource,
      getters: getters,
      components: components,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    })), _react.default.createElement(EventContainer, {
      localizer: localizer,
      resource: resource,
      accessors: accessors,
      getters: getters,
      components: components,
      slotMetrics: slotMetrics,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)('rbc-events-container', rtl && 'rtl'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, this.renderEvents())), selecting && _react.default.createElement("div", {
      className: "rbc-slot-selection",
      style: {
        top,
        height
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, _react.default.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, localizer.format(selectDates, 'selectRangeFormat'))), isNow && _react.default.createElement("div", {
      className: "rbc-current-time-indicator",
      style: {
        top: this.state.timeIndicatorPosition + "%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }));
  }

}

DayColumn.propTypes = process.env.NODE_ENV !== "production" ? {
  events: _propTypes.default.array.isRequired,
  step: _propTypes.default.number.isRequired,
  date: _propTypes.default.instanceOf(Date).isRequired,
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  getNow: _propTypes.default.func.isRequired,
  isNow: _propTypes.default.bool,
  rtl: _propTypes.default.bool,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  showMultiDayTimes: _propTypes.default.bool,
  culture: _propTypes.default.string,
  timeslots: _propTypes.default.number,
  selected: _propTypes.default.object,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  eventOffset: _propTypes.default.number,
  longPressThreshold: _propTypes.default.number,
  onSelecting: _propTypes.default.func,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEvent: _propTypes.default.func.isRequired,
  onDoubleClickEvent: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  dragThroughEvents: _propTypes.default.bool,
  resource: _propTypes.default.any
} : {};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var _default = DayColumn;
exports.default = _default;
module.exports = exports["default"];