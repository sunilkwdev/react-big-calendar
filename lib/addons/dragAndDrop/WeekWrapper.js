"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var dates = _interopRequireWildcard(require("../../utils/dates"));

var _selection = require("../../utils/selection");

var _reactDom = require("react-dom");

var _eventLevels = require("../../utils/eventLevels");

var _Selection = _interopRequireWildcard(require("../../Selection"));

var _EventRow = _interopRequireDefault(require("../../EventRow"));

var _common = require("./common");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/addons/dragAndDrop/WeekWrapper.js";
const propTypes = process.env.NODE_ENV !== "production" ? {} : {};

const eventTimes = (event, accessors) => {
  let start = accessors.start(event);
  let end = accessors.end(event);
  const isZeroDuration = dates.eq(start, end, 'minutes') && start.getMinutes() === 0; // make zero duration midnight events at least one day long

  if (isZeroDuration) end = dates.add(end, 1, 'day');
  return {
    start,
    end
  };
};

class WeekWrapper extends _react.default.Component {
  constructor() {
    super(...arguments);

    this.handleMove = (_ref, node, draggedEvent) => {
      let x = _ref.x,
          y = _ref.y;
      const _this$context$draggab = this.context.draggable.dragAndDropAction.event,
            event = _this$context$draggab === void 0 ? draggedEvent : _this$context$draggab;
      const metrics = this.props.slotMetrics;
      const accessors = this.props.accessors;
      if (!event) return;
      let rowBox = (0, _Selection.getBoundsForNode)(node);

      if (!(0, _selection.pointInBox)(rowBox, {
        x,
        y
      })) {
        this.reset();
        return;
      } // Make sure to maintain the time of the start date while moving it to the new slot


      let start = dates.merge(metrics.getDateForSlot((0, _selection.getSlotAtX)(rowBox, x, false, metrics.slots)), accessors.start(event));
      let end = dates.add(start, dates.diff(accessors.start(event), accessors.end(event), 'minutes'), 'minutes');
      this.update(event, start, end);
    };

    this.handleDropFromOutside = (point, rowBox) => {
      if (!this.context.draggable.onDropFromOutside) return;
      const metrics = this.props.slotMetrics;
      let start = metrics.getDateForSlot((0, _selection.getSlotAtX)(rowBox, point.x, false, metrics.slots));
      this.context.draggable.onDropFromOutside({
        start,
        end: dates.add(start, 1, 'day'),
        allDay: false
      });
    };

    this.handleDragOverFromOutside = (_ref2, node) => {
      let x = _ref2.x,
          y = _ref2.y;
      if (!this.context.draggable.dragFromOutsideItem) return;
      this.handleMove({
        x,
        y
      }, node, this.context.draggable.dragFromOutsideItem());
    };

    this._selectable = () => {
      let node = (0, _reactDom.findDOMNode)(this).closest('.rbc-month-row, .rbc-allday-cell');
      let container = node.closest('.rbc-month-view, .rbc-time-view');
      let selector = this._selector = new _Selection.default(() => container);
      selector.on('beforeSelect', point => {
        const isAllDay = this.props.isAllDay;
        const action = this.context.draggable.dragAndDropAction.action;
        return action === 'move' || action === 'resize' && (!isAllDay || (0, _selection.pointInBox)((0, _Selection.getBoundsForNode)(node), point));
      });
      selector.on('selecting', box => {
        const bounds = (0, _Selection.getBoundsForNode)(node);
        const dragAndDropAction = this.context.draggable.dragAndDropAction;
        if (dragAndDropAction.action === 'move') this.handleMove(box, bounds);
        if (dragAndDropAction.action === 'resize') this.handleResize(box, bounds);
      });
      selector.on('selectStart', () => this.context.draggable.onStart());
      selector.on('select', point => {
        const bounds = (0, _Selection.getBoundsForNode)(node);
        if (!this.state.segment || !(0, _selection.pointInBox)(bounds, point)) return;
        this.handleInteractionEnd();
      });
      selector.on('dropFromOutside', point => {
        if (!this.context.draggable.onDropFromOutside) return;
        const bounds = (0, _Selection.getBoundsForNode)(node);
        if (!(0, _selection.pointInBox)(bounds, point)) return;
        this.handleDropFromOutside(point, bounds);
      });
      selector.on('dragOverFromOutside', point => {
        if (!this.context.draggable.dragFromOutsideItem) return;
        const bounds = (0, _Selection.getBoundsForNode)(node);
        this.handleDragOverFromOutside(point, bounds);
      });
      selector.on('click', () => this.context.draggable.onEnd(null));
      selector.on('reset', () => {
        this.reset();
        this.context.draggable.onEnd(null);
      });
    };

    this.handleInteractionEnd = () => {
      const _this$props = this.props,
            resourceId = _this$props.resourceId,
            isAllDay = _this$props.isAllDay;
      const event = this.state.segment.event;
      this.reset();
      this.context.draggable.onEnd({
        start: event.start,
        end: event.end,
        resourceId,
        isAllDay
      });
    };

    this._teardownSelectable = () => {
      if (!this._selector) return;

      this._selector.teardown();

      this._selector = null;
    };

    this.state = {};
  }

  componentDidMount() {
    this._selectable();
  }

  componentWillUnmount() {
    this._teardownSelectable();
  }

  reset() {
    if (this.state.segment) this.setState({
      segment: null
    });
  }

  update(event, start, end) {
    const segment = (0, _eventLevels.eventSegments)((0, _extends2.default)({}, event, {
      end,
      start,
      __isPreview: true
    }), this.props.slotMetrics.range, _common.dragAccessors);
    const lastSegment = this.state.segment;

    if (lastSegment && segment.span === lastSegment.span && segment.left === lastSegment.left && segment.right === lastSegment.right) {
      return;
    }

    this.setState({
      segment
    });
  }

  handleResize(point, node) {
    const _this$context$draggab2 = this.context.draggable.dragAndDropAction,
          event = _this$context$draggab2.event,
          direction = _this$context$draggab2.direction;
    const _this$props2 = this.props,
          accessors = _this$props2.accessors,
          metrics = _this$props2.slotMetrics;

    let _eventTimes = eventTimes(event, accessors),
        start = _eventTimes.start,
        end = _eventTimes.end;

    let rowBox = (0, _Selection.getBoundsForNode)(node);
    let cursorInRow = (0, _selection.pointInBox)(rowBox, point);

    if (direction === 'RIGHT') {
      if (cursorInRow) {
        if (metrics.last < start) return this.reset(); // add min

        end = dates.add(metrics.getDateForSlot((0, _selection.getSlotAtX)(rowBox, point.x, false, metrics.slots)), 1, 'day');
      } else if (dates.inRange(start, metrics.first, metrics.last) || rowBox.bottom < point.y && +metrics.first > +start) {
        end = dates.add(metrics.last, 1, 'milliseconds');
      } else {
        this.setState({
          segment: null
        });
        return;
      }

      end = dates.max(end, dates.add(start, 1, 'day'));
    } else if (direction === 'LEFT') {
      // inbetween Row
      if (cursorInRow) {
        if (metrics.first > end) return this.reset();
        start = metrics.getDateForSlot((0, _selection.getSlotAtX)(rowBox, point.x, false, metrics.slots));
      } else if (dates.inRange(end, metrics.first, metrics.last) || rowBox.top > point.y && +metrics.last < +end) {
        start = dates.add(metrics.first, -1, 'milliseconds');
      } else {
        this.reset();
        return;
      }

      start = dates.min(dates.add(end, -1, 'day'), start);
    }

    this.update(event, start, end);
  }

  render() {
    const _this$props3 = this.props,
          children = _this$props3.children,
          accessors = _this$props3.accessors;
    let segment = this.state.segment;
    return _react.default.createElement("div", {
      className: "rbc-addons-dnd-row-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, children, segment && _react.default.createElement(_EventRow.default, (0, _extends2.default)({}, this.props, {
      selected: null,
      className: "rbc-addons-dnd-drag-row",
      segments: [segment],
      accessors: (0, _extends2.default)({}, accessors, _common.dragAccessors),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    })));
  }

}

WeekWrapper.contextTypes = {
  draggable: _propTypes.default.shape({
    onStart: _propTypes.default.func,
    onEnd: _propTypes.default.func,
    dragAndDropAction: _propTypes.default.object,
    onDropFromOutside: _propTypes.default.func,
    onBeginAction: _propTypes.default.func,
    dragFromOutsideItem: _propTypes.default.func
  })
};
WeekWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  isAllDay: _propTypes.default.bool,
  slotMetrics: _propTypes.default.object.isRequired,
  accessors: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  resourceId: _propTypes.default.any
} : {};
WeekWrapper.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = WeekWrapper;
exports.default = _default;
module.exports = exports["default"];