"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = require("../../utils/propTypes");

var _accessors = require("../../utils/accessors");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/addons/dragAndDrop/EventWrapper.js";

class EventWrapper extends _react.default.Component {
  constructor() {
    super(...arguments);

    this.handleResizeUp = e => {
      if (e.button !== 0) return;
      e.stopPropagation();
      this.context.draggable.onBeginAction(this.props.event, 'resize', 'UP');
    };

    this.handleResizeDown = e => {
      if (e.button !== 0) return;
      e.stopPropagation();
      this.context.draggable.onBeginAction(this.props.event, 'resize', 'DOWN');
    };

    this.handleResizeLeft = e => {
      if (e.button !== 0) return;
      e.stopPropagation();
      this.context.draggable.onBeginAction(this.props.event, 'resize', 'LEFT');
    };

    this.handleResizeRight = e => {
      if (e.button !== 0) return;
      e.stopPropagation();
      this.context.draggable.onBeginAction(this.props.event, 'resize', 'RIGHT');
    };

    this.handleStartDragging = e => {
      if (e.button === 0) {
        this.context.draggable.onBeginAction(this.props.event, 'move');
      }
    };
  }

  renderAnchor(direction) {
    const cls = direction === 'Up' || direction === 'Down' ? 'ns' : 'ew';
    return _react.default.createElement("div", {
      className: "rbc-addons-dnd-resize-" + cls + "-anchor",
      onMouseDown: this["handleResize" + direction],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, _react.default.createElement("div", {
      className: "rbc-addons-dnd-resize-" + cls + "-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }

  render() {
    const _this$props = this.props,
          event = _this$props.event,
          type = _this$props.type,
          continuesPrior = _this$props.continuesPrior,
          continuesAfter = _this$props.continuesAfter;
    let children = this.props.children;
    if (event.__isPreview) return _react.default.cloneElement(children, {
      className: (0, _classnames.default)(children.props.className, 'rbc-addons-dnd-drag-preview')
    });
    const draggable = this.context.draggable;
    const draggableAccessor = draggable.draggableAccessor,
          resizableAccessor = draggable.resizableAccessor;
    const isDraggable = draggableAccessor ? !!(0, _accessors.accessor)(event, draggableAccessor) : true;
    /* Event is not draggable, no need to wrap it */

    if (!isDraggable) {
      return children;
    }
    /*
    * The resizability of events depends on whether they are
    * allDay events and how they are displayed.
    *
    * 1. If the event is being shown in an event row (because
    * it is an allDay event shown in the header row or because as
    * in month view the view is showing all events as rows) then we
    * allow east-west resizing.
    *
    * 2. Otherwise the event is being displayed
    * normally, we can drag it north-south to resize the times.
    *
    * See `DropWrappers` for handling of the drop of such events.
    *
    * Notwithstanding the above, we never show drag anchors for
    * events which continue beyond current component. This happens
    * in the middle of events when showMultiDay is true, and to
    * events at the edges of the calendar's min/max location.
    */


    const isResizable = resizableAccessor ? !!(0, _accessors.accessor)(event, resizableAccessor) : true;

    if (isResizable || isDraggable) {
      /*
      * props.children is the singular <Event> component.
      * BigCalendar positions the Event abolutely and we
      * need the anchors to be part of that positioning.
      * So we insert the anchors inside the Event's children
      * rather than wrap the Event here as the latter approach
      * would lose the positioning.
      */
      const newProps = {
        onMouseDown: this.handleStartDragging,
        onTouchStart: this.handleStartDragging
      };

      if (isResizable) {
        // replace original event child with anchor-embellished child
        let StartAnchor = null;
        let EndAnchor = null;

        if (type === 'date') {
          StartAnchor = !continuesPrior && this.renderAnchor('Left');
          EndAnchor = !continuesAfter && this.renderAnchor('Right');
        } else {
          StartAnchor = !continuesPrior && this.renderAnchor('Up');
          EndAnchor = !continuesAfter && this.renderAnchor('Down');
        }

        newProps.children = _react.default.createElement("div", {
          className: "rbc-addons-dnd-resizable",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, StartAnchor, children.props.children, EndAnchor);
      }

      if (draggable.dragAndDropAction.interacting && // if an event is being dragged right now
      draggable.dragAndDropAction.event === event // and it's the current event
      ) {
          // add a new class to it
          newProps.className = (0, _classnames.default)(children.props.className, 'rbc-addons-dnd-dragged-event');
        }

      children = _react.default.cloneElement(children, newProps);
    }

    return children;
  }

}

EventWrapper.contextTypes = {
  draggable: _propTypes.default.shape({
    onStart: _propTypes.default.func,
    onEnd: _propTypes.default.func,
    onBeginAction: _propTypes.default.func,
    draggableAccessor: _propTypes2.accessor,
    resizableAccessor: _propTypes2.accessor,
    dragAndDropAction: _propTypes.default.object
  })
};
EventWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes.default.oneOf(['date', 'time']),
  event: _propTypes.default.object.isRequired,
  draggable: _propTypes.default.bool,
  allDay: _propTypes.default.bool,
  isRow: _propTypes.default.bool,
  continuesPrior: _propTypes.default.bool,
  continuesAfter: _propTypes.default.bool,
  isDragging: _propTypes.default.bool,
  isResizing: _propTypes.default.bool
} : {};
var _default = EventWrapper;
exports.default = _default;
module.exports = exports["default"];