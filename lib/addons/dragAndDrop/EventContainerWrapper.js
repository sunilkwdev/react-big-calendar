"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var dates = _interopRequireWildcard(require("../../utils/dates"));

var _reactDom = require("react-dom");

var _Selection = _interopRequireWildcard(require("../../Selection"));

var _TimeGridEvent = _interopRequireDefault(require("../../TimeGridEvent"));

var _common = require("./common");

var _NoopWrapper = _interopRequireDefault(require("../../NoopWrapper"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/addons/dragAndDrop/EventContainerWrapper.js";

const pointInColumn = (bounds, _ref) => {
  let x = _ref.x,
      y = _ref.y;
  const left = bounds.left,
        right = bounds.right,
        top = bounds.top;
  return x < right + 10 && x > left && y > top;
};

const propTypes = process.env.NODE_ENV !== "production" ? {} : {};

class EventContainerWrapper extends _react.default.Component {
  constructor() {
    super(...arguments);

    this.handleMove = (point, boundaryBox) => {
      const event = this.context.draggable.dragAndDropAction.event;
      const _this$props = this.props,
            accessors = _this$props.accessors,
            slotMetrics = _this$props.slotMetrics;

      if (!pointInColumn(boundaryBox, point)) {
        this.reset();
        return;
      }

      let currentSlot = slotMetrics.closestSlotFromPoint({
        y: point.y - this.eventOffsetTop,
        x: point.x
      }, boundaryBox);
      let eventStart = accessors.start(event);
      let eventEnd = accessors.end(event);
      let end = dates.add(currentSlot, dates.diff(eventStart, eventEnd, 'minutes'), 'minutes');
      this.update(event, slotMetrics.getRange(currentSlot, end, false, true));
    };

    this.handleDropFromOutside = (point, boundaryBox) => {
      const _this$props2 = this.props,
            slotMetrics = _this$props2.slotMetrics,
            resource = _this$props2.resource;
      let start = slotMetrics.closestSlotFromPoint({
        y: point.y,
        x: point.x
      }, boundaryBox);
      this.context.draggable.onDropFromOutside({
        start,
        end: slotMetrics.nextSlot(start),
        allDay: false,
        resource
      });
    };

    this._selectable = () => {
      let node = (0, _reactDom.findDOMNode)(this);
      let selector = this._selector = new _Selection.default(() => node.closest('.rbc-time-view'));
      selector.on('beforeSelect', point => {
        const dragAndDropAction = this.context.draggable.dragAndDropAction;
        if (!dragAndDropAction.action) return false;

        if (dragAndDropAction.action === 'resize') {
          return pointInColumn((0, _Selection.getBoundsForNode)(node), point);
        }

        const eventNode = (0, _Selection.getEventNodeFromPoint)(node, point);
        if (!eventNode) return false;
        this.eventOffsetTop = point.y - (0, _Selection.getBoundsForNode)(eventNode).top;
      });
      selector.on('selecting', box => {
        const bounds = (0, _Selection.getBoundsForNode)(node);
        const dragAndDropAction = this.context.draggable.dragAndDropAction;
        if (dragAndDropAction.action === 'move') this.handleMove(box, bounds);
        if (dragAndDropAction.action === 'resize') this.handleResize(box, bounds);
      });
      selector.on('dropFromOutside', point => {
        if (!this.context.draggable.onDropFromOutside) return;
        const bounds = (0, _Selection.getBoundsForNode)(node);
        if (!pointInColumn(bounds, point)) return;
        this.handleDropFromOutside(point, bounds);
      });
      selector.on('dragOver', point => {
        if (!this.context.draggable.dragFromOutsideItem) return;
        const bounds = (0, _Selection.getBoundsForNode)(node);
        this.handleDropFromOutside(point, bounds);
      });
      selector.on('selectStart', () => this.context.draggable.onStart());
      selector.on('select', point => {
        const bounds = (0, _Selection.getBoundsForNode)(node);
        if (!this.state.event || !pointInColumn(bounds, point)) return;
        this.handleInteractionEnd();
      });
      selector.on('click', () => this.context.draggable.onEnd(null));
      selector.on('reset', () => {
        this.reset();
        this.context.draggable.onEnd(null);
      });
    };

    this.handleInteractionEnd = () => {
      const resource = this.props.resource;
      const event = this.state.event;
      this.reset();
      this.context.draggable.onEnd({
        start: event.start,
        end: event.end,
        resourceId: resource
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
    if (this.state.event) this.setState({
      event: null,
      top: null,
      height: null
    });
  }

  update(event, _ref2) {
    let startDate = _ref2.startDate,
        endDate = _ref2.endDate,
        top = _ref2.top,
        height = _ref2.height;
    const lastEvent = this.state.event;

    if (lastEvent && startDate === lastEvent.start && endDate === lastEvent.end) {
      return;
    }

    this.setState({
      top,
      height,
      event: (0, _extends2.default)({}, event, {
        start: startDate,
        end: endDate
      })
    });
  }

  handleResize(point, boundaryBox) {
    let start, end;
    const _this$props3 = this.props,
          accessors = _this$props3.accessors,
          slotMetrics = _this$props3.slotMetrics;
    const _this$context$draggab = this.context.draggable.dragAndDropAction,
          event = _this$context$draggab.event,
          direction = _this$context$draggab.direction;
    let currentSlot = slotMetrics.closestSlotFromPoint(point, boundaryBox);

    if (direction === 'UP') {
      end = accessors.end(event);
      start = dates.min(currentSlot, slotMetrics.closestSlotFromDate(end, -1));
    } else if (direction === 'DOWN') {
      start = accessors.start(event);
      end = dates.max(currentSlot, slotMetrics.closestSlotFromDate(start));
    }

    this.update(event, slotMetrics.getRange(start, end));
  }

  render() {
    const _this$props4 = this.props,
          children = _this$props4.children,
          accessors = _this$props4.accessors,
          components = _this$props4.components,
          getters = _this$props4.getters,
          slotMetrics = _this$props4.slotMetrics,
          localizer = _this$props4.localizer;
    let _this$state = this.state,
        event = _this$state.event,
        top = _this$state.top,
        height = _this$state.height;
    if (!event) return children;
    const events = children.props.children;
    const start = event.start,
          end = event.end;
    let label;
    let format = 'eventTimeRangeFormat';
    const startsBeforeDay = slotMetrics.startsBeforeDay(start);
    const startsAfterDay = slotMetrics.startsAfterDay(end);
    if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
    if (startsBeforeDay && startsAfterDay) label = localizer.messages.allDay;else label = localizer.format({
      start,
      end
    }, format);
    return _react.default.cloneElement(children, {
      children: _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, events, event && _react.default.createElement(_TimeGridEvent.default, {
        event: event,
        label: label,
        className: "rbc-addons-dnd-drag-preview",
        style: {
          top,
          height,
          width: 100
        },
        getters: getters,
        components: (0, _extends2.default)({}, components, {
          eventWrapper: _NoopWrapper.default
        }),
        accessors: (0, _extends2.default)({}, accessors, _common.dragAccessors),
        continuesEarlier: startsBeforeDay,
        continuesLater: startsAfterDay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }))
    });
  }

}

EventContainerWrapper.contextTypes = {
  draggable: _propTypes.default.shape({
    onStart: _propTypes.default.func,
    onEnd: _propTypes.default.func,
    onDropFromOutside: _propTypes.default.func,
    onBeginAction: _propTypes.default.func,
    dragAndDropAction: _propTypes.default.object,
    dragFromOutsideItem: _propTypes.default.func
  })
};
EventContainerWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  slotMetrics: _propTypes.default.object.isRequired,
  resource: _propTypes.default.any
} : {};
EventContainerWrapper.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = EventContainerWrapper;
exports.default = _default;
module.exports = exports["default"];