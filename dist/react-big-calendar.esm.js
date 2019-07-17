import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { uncontrollable } from 'uncontrollable';
import cn from 'classnames';
import warning from 'warning';
import invariant from 'invariant';
import { findDOMNode } from 'react-dom';
import { eq, add, startOf, endOf, lte, hours, minutes, seconds, milliseconds, lt, gte, month, max, min, gt, inRange as inRange$1 } from 'date-arithmetic';
import chunk from 'lodash-es/chunk';
import getPosition from 'dom-helpers/query/position';
import raf from 'dom-helpers/util/requestAnimationFrame';
import getOffset from 'dom-helpers/query/offset';
import getScrollTop from 'dom-helpers/query/scrollTop';
import getScrollLeft from 'dom-helpers/query/scrollLeft';
import Overlay from 'react-overlays/Overlay';
import getHeight from 'dom-helpers/query/height';
import qsa from 'dom-helpers/query/querySelectorAll';
import contains from 'dom-helpers/query/contains';
import closest from 'dom-helpers/query/closest';
import events from 'dom-helpers/events';
import findIndex from 'lodash-es/findIndex';
import range$1 from 'lodash-es/range';
import memoize from 'memoize-one';
import sortBy from 'lodash-es/sortBy';
import getWidth from 'dom-helpers/query/width';
import scrollbarSize from 'dom-helpers/util/scrollbarSize';
import classes from 'dom-helpers/class';
import omit from 'lodash-es/omit';
import defaults from 'lodash-es/defaults';
import transform from 'lodash-es/transform';
import mapValues from 'lodash-es/mapValues';

function NoopWrapper(props) {
  return props.children;
}

let navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};
let views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda'
};

let viewNames = Object.keys(views).map(k => views[k]);
let accessor = PropTypes.oneOfType([PropTypes.string, PropTypes.func]);
let dateFormat = PropTypes.any;
let dateRangeFormat = PropTypes.func;
/**
 * accepts either an array of builtin view names:
 *
 * ```
 * views={['month', 'day', 'agenda']}
 * ```
 *
 * or an object hash of the view name and the component (or boolean for builtin)
 *
 * ```
 * views={{
 *   month: true,
 *   week: false,
 *   workweek: WorkWeekViewComponent,
 * }}
 * ```
 */

let views$1 = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOf(viewNames)), PropTypes.objectOf(function (prop, key) {
  let isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean';

  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return PropTypes.elementType(prop, key, ...args);
  }
})]);

function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}

const localePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func]);

function _format(localizer, formatter, value, format, culture) {
  let result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  !(result == null || typeof result === 'string') ? process.env.NODE_ENV !== "production" ? invariant(false, '`localizer format(..)` must return a string, null, or undefined') : invariant(false) : void 0;
  return result;
}

class DateLocalizer {
  constructor(spec) {
    var _this = this;

    !(typeof spec.format === 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'date localizer `format(..)` must be a function') : invariant(false) : void 0;
    !(typeof spec.firstOfWeek === 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'date localizer `firstOfWeek(..)` must be a function') : invariant(false) : void 0;
    this.propType = spec.propType || localePropType;
    this.startOfWeek = spec.firstOfWeek;
    this.formats = spec.formats;

    this.format = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _format(_this, spec.format, ...args);
    };
  }

}
function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
  const formats = _extends({}, localizer.formats, formatOverrides);

  return _extends({}, localizer, {
    messages,
    startOfWeek: () => localizer.startOfWeek(culture),
    format: (value, _format2) => localizer.format(value, formats[_format2] || _format2, culture)
  });
}

let defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: total => "+" + total + " more"
};
function messages(msgs) {
  return _extends({}, defaultMessages, msgs);
}

/* eslint no-fallthrough: off */
const MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24
};
function firstVisibleDay(date, localizer) {
  let firstOfMonth = startOf(date, 'month');
  return startOf(firstOfMonth, 'week', localizer.startOfWeek());
}
function lastVisibleDay(date, localizer) {
  let endOfMonth = endOf(date, 'month');
  return endOf(endOfMonth, 'week', localizer.startOfWeek());
}
function visibleDays(date, localizer) {
  let current = firstVisibleDay(date, localizer),
      last = lastVisibleDay(date, localizer),
      days = [];

  while (lte(current, last, 'day')) {
    days.push(current);
    current = add(current, 1, 'day');
  }

  return days;
}
function ceil(date, unit) {
  let floor = startOf(date, unit);
  return eq(floor, date) ? floor : add(floor, 1, unit);
}
function range(start, end, unit) {
  if (unit === void 0) {
    unit = 'day';
  }

  let current = start,
      days = [];

  while (lte(current, end, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }

  return days;
}
function merge(date, time) {
  if (time == null && date == null) return null;
  if (time == null) time = new Date();
  if (date == null) date = new Date();
  date = startOf(date, 'day');
  date = hours(date, hours(time));
  date = minutes(date, minutes(time));
  date = seconds(date, seconds(time));
  return milliseconds(date, milliseconds(time));
}
function isJustDate(date) {
  return hours(date) === 0 && minutes(date) === 0 && seconds(date) === 0 && milliseconds(date) === 0;
}
function diff(dateA, dateB, unit) {
  if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB); // the .round() handles an edge case
  // with DST where the total won't be exact
  // since one day in the range may be shorter/longer by an hour

  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/EventCell.js";

class EventCell extends React.Component {
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
        props = _objectWithoutPropertiesLoose(_this$props, ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"]);

    let title = accessors.title(event);
    let tooltip = accessors.tooltip(event);
    let end = accessors.end(event);
    let start = accessors.start(event);
    let allDay = accessors.allDay(event);
    let showAsAllDay = isAllDay || allDay || diff(start, ceil(end, 'day'), 'day') > 1;
    let userProps = getters.eventProp(event, start, end, selected);
    const content = React.createElement("div", {
      className: "rbc-event-content",
      title: tooltip || undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, Event ? React.createElement(Event, {
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
    return React.createElement(EventWrapper, _extends({}, this.props, {
      type: "date",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), React.createElement("div", _extends({}, props, {
      tabIndex: 0,
      style: _extends({}, userProps.style, style),
      className: cn('rbc-event', className, userProps.className, {
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
  event: PropTypes.object.isRequired,
  slotStart: PropTypes.instanceOf(Date),
  slotEnd: PropTypes.instanceOf(Date),
  selected: PropTypes.bool,
  isAllDay: PropTypes.bool,
  continuesPrior: PropTypes.bool,
  continuesAfter: PropTypes.bool,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object,
  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func
} : {};

function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return [].concat(selected).indexOf(event) !== -1;
}
function slotWidth(rowBox, slots) {
  let rowWidth = rowBox.right - rowBox.left;
  let cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  const cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  let x = _ref.x,
      y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start, rowBox, box, slots, rtl) {
  let startIdx = -1;
  let endIdx = -1;
  let lastSlotIdx = slots - 1;
  let cellWidth = slotWidth(rowBox, slots); // cell under the mouse

  let currentSlot = getSlotAtX(rowBox, box.x, rtl, slots); // Identify row as either the initial row
  // or the row under the current mouse point

  let isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  let isStartRow = rowBox.top < start.y && rowBox.bottom > start.y; // this row's position relative to the start point

  let isAboveStart = start.y > rowBox.bottom;
  let isBelowStart = rowBox.top > start.y;
  let isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom; // this row is between the current and start rows, so entirely selected

  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }

  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }

  if (isStartRow) {
    // select the cell under the initial point
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);

    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;else endIdx = currentSlot; //select current range
    } else if (start.y < box.y) {
      // the current row is below start row
      // select cells to the right of the start cell
      endIdx = lastSlotIdx;
    } else {
      // select cells to the left of the start cell
      startIdx = 0;
    }
  }

  return {
    startIdx,
    endIdx
  };
}

var _jsxFileName$1 = "/Users/guilherme/work/react-big-calendar/src/Popup.js";

class Popup extends React.Component {
  componentDidMount() {
    let _this$props = this.props,
        _this$props$popupOffs = _this$props.popupOffset,
        popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
        popperRef = _this$props.popperRef,
        _getOffset = getOffset(popperRef.current),
        top = _getOffset.top,
        left = _getOffset.left,
        width = _getOffset.width,
        height = _getOffset.height,
        viewBottom = window.innerHeight + getScrollTop(window),
        viewRight = window.innerWidth + getScrollLeft(window),
        bottom = top + height,
        right = left + width;

    if (bottom > viewBottom || right > viewRight) {
      let topOffset, leftOffset;
      if (bottom > viewBottom) topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0);
      if (right > viewRight) leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0);
      this.setState({
        topOffset,
        leftOffset
      }); //eslint-disable-line
    }
  }

  render() {
    let _this$props2 = this.props,
        events = _this$props2.events,
        selected = _this$props2.selected,
        getters = _this$props2.getters,
        accessors = _this$props2.accessors,
        components = _this$props2.components,
        onSelect = _this$props2.onSelect,
        onDoubleClick = _this$props2.onDoubleClick,
        slotStart = _this$props2.slotStart,
        slotEnd = _this$props2.slotEnd,
        localizer = _this$props2.localizer,
        popperRef = _this$props2.popperRef;
    let _this$props$position = this.props.position,
        left = _this$props$position.left,
        width = _this$props$position.width,
        top = _this$props$position.top,
        topOffset = (this.state || {}).topOffset || 0,
        leftOffset = (this.state || {}).leftOffset || 0;
    let style = {
      top: Math.max(0, top - topOffset),
      left: left - leftOffset,
      minWidth: width + width / 2
    };
    return React.createElement("div", {
      style: style,
      className: "rbc-overlay",
      ref: popperRef,
      __source: {
        fileName: _jsxFileName$1,
        lineNumber: 58
      },
      __self: this
    }, React.createElement("div", {
      className: "rbc-overlay-header",
      __source: {
        fileName: _jsxFileName$1,
        lineNumber: 59
      },
      __self: this
    }, localizer.format(slotStart, 'dayHeaderFormat')), events.map((event, idx) => React.createElement(EventCell, {
      key: idx,
      type: "popup",
      event: event,
      getters: getters,
      onSelect: onSelect,
      accessors: accessors,
      components: components,
      onDoubleClick: onDoubleClick,
      continuesPrior: lt(accessors.end(event), slotStart, 'day'),
      continuesAfter: gte(accessors.start(event), slotEnd, 'day'),
      slotStart: slotStart,
      slotEnd: slotEnd,
      selected: isSelected(event, selected),
      __source: {
        fileName: _jsxFileName$1,
        lineNumber: 63
      },
      __self: this
    })));
  }

}

Popup.propTypes = process.env.NODE_ENV !== "production" ? {
  position: PropTypes.object,
  popupOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })]),
  events: PropTypes.array,
  selected: PropTypes.object,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  slotStart: PropTypes.instanceOf(Date),
  slotEnd: PropTypes.number,
  popperRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.Element
  })])
  /**
   * The Overlay component, of react-overlays, creates a ref that is passed to the Popup, and
   * requires proper ref forwarding to be used without error
   */

} : {};
var Popup$1 = React.forwardRef((props, ref) => React.createElement(Popup, _extends({
  popperRef: ref
}, props, {
  __source: {
    fileName: _jsxFileName$1,
    lineNumber: 115
  },
  __self: undefined
})));

function addEventListener(type, handler, target) {
  if (target === void 0) {
    target = document;
  }

  events.on(target, type, handler, {
    passive: false
  });
  return {
    remove() {
      events.off(target, type, handler);
    }

  };
}

function isOverContainer(container, x, y) {
  return !container || contains(container, document.elementFromPoint(x, y));
}

function getEventNodeFromPoint(node, _ref) {
  let clientX = _ref.clientX,
      clientY = _ref.clientY;
  let target = document.elementFromPoint(clientX, clientY);
  return closest(target, '.rbc-event', node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}

function getEventCoordinates(e) {
  let target = e;

  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }

  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}

const clickTolerance = 5;
const clickInterval = 250;

class Selection {
  constructor(node, _temp) {
    let _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$global = _ref2.global,
        global = _ref2$global === void 0 ? false : _ref2$global,
        _ref2$longPressThresh = _ref2.longPressThreshold,
        longPressThreshold = _ref2$longPressThresh === void 0 ? 250 : _ref2$longPressThresh;

    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this); // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
    // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356

    this._onTouchMoveWindowListener = addEventListener('touchmove', () => {}, window);
    this._onKeyDownListener = addEventListener('keydown', this._keyListener);
    this._onKeyUpListener = addEventListener('keyup', this._keyListener);
    this._onDropFromOutsideListener = addEventListener('drop', this._dropFromOutsideListener);
    this._onDragOverfromOutisde = addEventListener('dragover', this._dragOverFromOutsideListener);

    this._addInitialEventListener();
  }

  on(type, handler) {
    let handlers = this._listeners[type] || (this._listeners[type] = []);
    handlers.push(handler);
    return {
      remove() {
        let idx = handlers.indexOf(handler);
        if (idx !== -1) handlers.splice(idx, 1);
      }

    };
  }

  emit(type) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    let result;
    let handlers = this._listeners[type] || [];
    handlers.forEach(fn => {
      if (result === undefined) result = fn(...args);
    });
    return result;
  }

  teardown() {
    this.isDetached = true;
    this.listeners = Object.create(null);
    this._onTouchMoveWindowListener && this._onTouchMoveWindowListener.remove();
    this._onInitialEventListener && this._onInitialEventListener.remove();
    this._onEndListener && this._onEndListener.remove();
    this._onEscListener && this._onEscListener.remove();
    this._onMoveListener && this._onMoveListener.remove();
    this._onKeyUpListener && this._onKeyUpListener.remove();
    this._onKeyDownListener && this._onKeyDownListener.remove();
    this._onDropFromOutsideListener && this._onDragOverfromOutisde.remove();
  }

  isSelected(node) {
    let box = this._selectRect;
    if (!box || !this.selecting) return false;
    return objectsCollide(box, getBoundsForNode(node));
  }

  filter(items) {
    let box = this._selectRect; //not selecting

    if (!box || !this.selecting) return [];
    return items.filter(this.isSelected, this);
  } // Adds a listener that will call the handler only after the user has pressed on the screen
  // without moving their finger for 250ms.


  _addLongPressListener(handler, initialEvent) {
    let timer = null;
    let touchMoveListener = null;
    let touchEndListener = null;

    const handleTouchStart = initialEvent => {
      timer = setTimeout(() => {
        cleanup();
        handler(initialEvent);
      }, this.longPressThreshold);
      touchMoveListener = addEventListener('touchmove', () => cleanup());
      touchEndListener = addEventListener('touchend', () => cleanup());
    };

    const touchStartListener = addEventListener('touchstart', handleTouchStart);

    const cleanup = () => {
      if (timer) {
        clearTimeout(timer);
      }

      if (touchMoveListener) {
        touchMoveListener.remove();
      }

      if (touchEndListener) {
        touchEndListener.remove();
      }

      timer = null;
      touchMoveListener = null;
      touchEndListener = null;
    };

    if (initialEvent) {
      handleTouchStart(initialEvent);
    }

    return {
      remove() {
        cleanup();
        touchStartListener.remove();
      }

    };
  } // Listen for mousedown and touchstart events. When one is received, disable the other and setup
  // future event handling based on the type of event.


  _addInitialEventListener() {
    const mouseDownListener = addEventListener('mousedown', e => {
      this._onInitialEventListener.remove();

      this._handleInitialEvent(e);

      this._onInitialEventListener = addEventListener('mousedown', this._handleInitialEvent);
    });
    const touchStartListener = addEventListener('touchstart', e => {
      this._onInitialEventListener.remove();

      this._onInitialEventListener = this._addLongPressListener(this._handleInitialEvent, e);
    });
    this._onInitialEventListener = {
      remove() {
        mouseDownListener.remove();
        touchStartListener.remove();
      }

    };
  }

  _dropFromOutsideListener(e) {
    const _getEventCoordinates = getEventCoordinates(e),
          pageX = _getEventCoordinates.pageX,
          pageY = _getEventCoordinates.pageY,
          clientX = _getEventCoordinates.clientX,
          clientY = _getEventCoordinates.clientY;

    this.emit('dropFromOutside', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
    e.preventDefault();
  }

  _dragOverFromOutsideListener(e) {
    const _getEventCoordinates2 = getEventCoordinates(e),
          pageX = _getEventCoordinates2.pageX,
          pageY = _getEventCoordinates2.pageY,
          clientX = _getEventCoordinates2.clientX,
          clientY = _getEventCoordinates2.clientY;

    this.emit('dragOverFromOutside', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
    e.preventDefault();
  }

  _handleInitialEvent(e) {
    if (this.isDetached) {
      return;
    }

    const _getEventCoordinates3 = getEventCoordinates(e),
          clientX = _getEventCoordinates3.clientX,
          clientY = _getEventCoordinates3.clientY,
          pageX = _getEventCoordinates3.pageX,
          pageY = _getEventCoordinates3.pageY;

    let node = this.container(),
        collides,
        offsetData; // Right clicks

    if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;

    if (!this.globalMouse && node && !contains(node, e.target)) {
      let _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right;

      offsetData = getBoundsForNode(node);
      collides = objectsCollide({
        top: offsetData.top - top,
        left: offsetData.left - left,
        bottom: offsetData.bottom + bottom,
        right: offsetData.right + right
      }, {
        top: pageY,
        left: pageX
      });
      if (!collides) return;
    }

    let result = this.emit('beforeSelect', this._initialEventData = {
      isTouch: /^touch/.test(e.type),
      x: pageX,
      y: pageY,
      clientX,
      clientY
    });
    if (result === false) return;

    switch (e.type) {
      case 'mousedown':
        this._onEndListener = addEventListener('mouseup', this._handleTerminatingEvent);
        this._onEscListener = addEventListener('keydown', this._handleTerminatingEvent);
        this._onMoveListener = addEventListener('mousemove', this._handleMoveEvent);
        break;

      case 'touchstart':
        this._handleMoveEvent(e);

        this._onEndListener = addEventListener('touchend', this._handleTerminatingEvent);
        this._onMoveListener = addEventListener('touchmove', this._handleMoveEvent);
        break;

      default:
        break;
    }
  }

  _handleTerminatingEvent(e) {
    const _getEventCoordinates4 = getEventCoordinates(e),
          pageX = _getEventCoordinates4.pageX,
          pageY = _getEventCoordinates4.pageY;

    this.selecting = false;
    this._onEndListener && this._onEndListener.remove();
    this._onMoveListener && this._onMoveListener.remove();
    if (!this._initialEventData) return;
    let inRoot = !this.container || contains(this.container(), e.target);
    let bounds = this._selectRect;
    let click = this.isClick(pageX, pageY);
    this._initialEventData = null;

    if (e.key === 'Escape') {
      return this.emit('reset');
    }

    if (!inRoot) {
      return this.emit('reset');
    }

    if (click && inRoot) {
      return this._handleClickEvent(e);
    } // User drag-clicked in the Selectable area


    if (!click) return this.emit('select', bounds);
  }

  _handleClickEvent(e) {
    const _getEventCoordinates5 = getEventCoordinates(e),
          pageX = _getEventCoordinates5.pageX,
          pageY = _getEventCoordinates5.pageY,
          clientX = _getEventCoordinates5.clientX,
          clientY = _getEventCoordinates5.clientY;

    const now = new Date().getTime();

    if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
      // Double click event
      this._lastClickData = null;
      return this.emit('doubleClick', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
    } // Click event


    this._lastClickData = {
      timestamp: now
    };
    return this.emit('click', {
      x: pageX,
      y: pageY,
      clientX: clientX,
      clientY: clientY
    });
  }

  _handleMoveEvent(e) {
    if (this._initialEventData === null || this.isDetached) {
      return;
    }

    let _this$_initialEventDa = this._initialEventData,
        x = _this$_initialEventDa.x,
        y = _this$_initialEventDa.y;

    const _getEventCoordinates6 = getEventCoordinates(e),
          pageX = _getEventCoordinates6.pageX,
          pageY = _getEventCoordinates6.pageY;

    let w = Math.abs(x - pageX);
    let h = Math.abs(y - pageY);
    let left = Math.min(pageX, x),
        top = Math.min(pageY, y),
        old = this.selecting; // Prevent emitting selectStart event until mouse is moved.
    // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.

    if (this.isClick(pageX, pageY) && !old && !(w || h)) {
      return;
    }

    this.selecting = true;
    this._selectRect = {
      top,
      left,
      x: pageX,
      y: pageY,
      right: left + w,
      bottom: top + h
    };

    if (!old) {
      this.emit('selectStart', this._initialEventData);
    }

    if (!this.isClick(pageX, pageY)) this.emit('selecting', this._selectRect);
    e.preventDefault();
  }

  _keyListener(e) {
    this.ctrl = e.metaKey || e.ctrlKey;
  }

  isClick(pageX, pageY) {
    let _this$_initialEventDa2 = this._initialEventData,
        x = _this$_initialEventDa2.x,
        y = _this$_initialEventDa2.y,
        isTouch = _this$_initialEventDa2.isTouch;
    return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
  }

}
/**
 * Resolve the disance prop from either an Int or an Object
 * @return {Object}
 */


function normalizeDistance(distance) {
  if (distance === void 0) {
    distance = 0;
  }

  if (typeof distance !== 'object') distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}
/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */


function objectsCollide(nodeA, nodeB, tolerance) {
  if (tolerance === void 0) {
    tolerance = 0;
  }

  let _getBoundsForNode = getBoundsForNode(nodeA),
      aTop = _getBoundsForNode.top,
      aLeft = _getBoundsForNode.left,
      _getBoundsForNode$rig = _getBoundsForNode.right,
      aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
      _getBoundsForNode$bot = _getBoundsForNode.bottom,
      aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;

  let _getBoundsForNode2 = getBoundsForNode(nodeB),
      bTop = _getBoundsForNode2.top,
      bLeft = _getBoundsForNode2.left,
      _getBoundsForNode2$ri = _getBoundsForNode2.right,
      bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
      _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
      bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;

  return !( // 'a' bottom doesn't touch 'b' top
  aBottom - tolerance < bTop || // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom || // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft || // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}
/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */

function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  let rect = node.getBoundingClientRect(),
      left = rect.left + pageOffset('left'),
      top = rect.top + pageOffset('top');
  return {
    top,
    left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}

function pageOffset(dir) {
  if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
}

var _jsxFileName$2 = "/Users/guilherme/work/react-big-calendar/src/BackgroundCells.js";

class BackgroundCells extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selecting: false
    };
  }

  componentDidMount() {
    this.props.selectable && this._selectable();
  }

  componentWillUnmount() {
    this._teardownSelectable();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();
  }

  render() {
    let _this$props = this.props,
        range = _this$props.range,
        getNow = _this$props.getNow,
        getters = _this$props.getters,
        currentDate = _this$props.date,
        Wrapper = _this$props.components.dateCellWrapper;
    let _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx;
    let current = getNow();
    return React.createElement("div", {
      className: "rbc-row-bg",
      __source: {
        fileName: _jsxFileName$2,
        lineNumber: 47
      },
      __self: this
    }, range.map((date, index) => {
      let selected = selecting && index >= startIdx && index <= endIdx;

      const _getters$dayProp = getters.dayProp(date),
            className = _getters$dayProp.className,
            style = _getters$dayProp.style;

      return React.createElement(Wrapper, {
        key: index,
        value: date,
        range: range,
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 53
        },
        __self: this
      }, React.createElement("div", {
        style: style,
        className: cn('rbc-day-bg', className, selected && 'rbc-selected-cell', eq(date, current, 'day') && 'rbc-today', currentDate && month(currentDate) !== month(date) && 'rbc-off-range-bg'),
        __source: {
          fileName: _jsxFileName$2,
          lineNumber: 54
        },
        __self: this
      }));
    }));
  }

  _selectable() {
    let node = findDOMNode(this);
    let selector = this._selector = new Selection(this.props.container, {
      longPressThreshold: this.props.longPressThreshold
    });

    let selectorClicksHandler = (point, actionType) => {
      if (!isEvent(findDOMNode(this), point)) {
        let rowBox = getBoundsForNode(node);
        let _this$props2 = this.props,
            range = _this$props2.range,
            rtl = _this$props2.rtl;

        if (pointInBox(rowBox, point)) {
          let currentCell = getSlotAtX(rowBox, point.x, rtl, range.length);

          this._selectSlot({
            startIdx: currentCell,
            endIdx: currentCell,
            action: actionType,
            box: point
          });
        }
      }

      this._initial = {};
      this.setState({
        selecting: false
      });
    };

    selector.on('selecting', box => {
      let _this$props3 = this.props,
          range = _this$props3.range,
          rtl = _this$props3.rtl;
      let startIdx = -1;
      let endIdx = -1;

      if (!this.state.selecting) {
        notify(this.props.onSelectStart, [box]);
        this._initial = {
          x: box.x,
          y: box.y
        };
      }

      if (selector.isSelected(node)) {
        let nodeBox = getBoundsForNode(node);

        var _dateCellSelection = dateCellSelection(this._initial, nodeBox, box, range.length, rtl);

        startIdx = _dateCellSelection.startIdx;
        endIdx = _dateCellSelection.endIdx;
      }

      this.setState({
        selecting: true,
        startIdx,
        endIdx
      });
    });
    selector.on('beforeSelect', box => {
      if (this.props.selectable !== 'ignoreEvents') return;
      return !isEvent(findDOMNode(this), box);
    });
    selector.on('click', point => selectorClicksHandler(point, 'click'));
    selector.on('doubleClick', point => selectorClicksHandler(point, 'doubleClick'));
    selector.on('select', bounds => {
      this._selectSlot(_extends({}, this.state, {
        action: 'select',
        bounds
      }));

      this._initial = {};
      this.setState({
        selecting: false
      });
      notify(this.props.onSelectEnd, [this.state]);
    });
  }

  _teardownSelectable() {
    if (!this._selector) return;

    this._selector.teardown();

    this._selector = null;
  }

  _selectSlot(_ref) {
    let endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action,
        bounds = _ref.bounds,
        box = _ref.box;
    if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
      start: startIdx,
      end: endIdx,
      action,
      bounds,
      box
    });
  }

}

BackgroundCells.propTypes = process.env.NODE_ENV !== "production" ? {
  date: PropTypes.instanceOf(Date),
  getNow: PropTypes.func.isRequired,
  getters: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  container: PropTypes.func,
  dayPropGetter: PropTypes.func,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,
  onSelectSlot: PropTypes.func.isRequired,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  range: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  rtl: PropTypes.bool,
  type: PropTypes.string
} : {};

var _jsxFileName$3 = "/Users/guilherme/work/react-big-calendar/src/EventRowMixin.js";
/* eslint-disable react/prop-types */

var EventRowMixin = {
  propTypes: {
    slotMetrics: PropTypes.object.isRequired,
    selected: PropTypes.object,
    isAllDay: PropTypes.bool,
    accessors: PropTypes.object.isRequired,
    localizer: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    getters: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    onDoubleClick: PropTypes.func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },

  renderEvent(props, event) {
    let selected = props.selected,
        _ = props.isAllDay,
        accessors = props.accessors,
        getters = props.getters,
        onSelect = props.onSelect,
        onDoubleClick = props.onDoubleClick,
        localizer = props.localizer,
        slotMetrics = props.slotMetrics,
        components = props.components;
    let continuesPrior = slotMetrics.continuesPrior(event);
    let continuesAfter = slotMetrics.continuesAfter(event);
    return React.createElement(EventCell, {
      event: event,
      getters: getters,
      localizer: localizer,
      accessors: accessors,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 45
      },
      __self: this
    });
  },

  renderSpan(slots, len, key, content) {
    if (content === void 0) {
      content = ' ';
    }

    let per = Math.abs(len) / slots * 100 + '%';
    return React.createElement("div", {
      key: key,
      className: "rbc-row-segment" // IE10/11 need max-width. flex-basis doesn't respect box-sizing
      ,
      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      },
      __source: {
        fileName: _jsxFileName$3,
        lineNumber: 66
      },
      __self: this
    }, content);
  }

};

var _jsxFileName$4 = "/Users/guilherme/work/react-big-calendar/src/EventRow.js";

class EventRow extends React.Component {
  render() {
    let _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className;
    let lastEnd = 1;
    return React.createElement("div", {
      className: cn(className, 'rbc-row'),
      __source: {
        fileName: _jsxFileName$4,
        lineNumber: 17
      },
      __self: this
    }, segments.reduce((row, _ref, li) => {
      let event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
      let key = '_lvl_' + li;
      let gap = left - lastEnd;
      let content = EventRowMixin.renderEvent(this.props, event);
      if (gap) row.push(EventRowMixin.renderSpan(slots, gap, key + "_gap"));
      row.push(EventRowMixin.renderSpan(slots, span, key, content));
      lastEnd = right + 1;
      return row;
    }, []));
  }

}

EventRow.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  segments: PropTypes.array
}, EventRowMixin.propTypes) : {};
EventRow.defaultProps = _extends({}, EventRowMixin.defaultProps);

function endOfRange(dateRange, unit) {
  if (unit === void 0) {
    unit = 'day';
  }

  return {
    first: dateRange[0],
    last: add(dateRange[dateRange.length - 1], 1, unit)
  };
}
function eventSegments(event, range, accessors) {
  let _endOfRange = endOfRange(range),
      first = _endOfRange.first,
      last = _endOfRange.last;

  let slots = diff(first, last, 'day');
  let start = max(startOf(accessors.start(event), 'day'), first);
  let end = min(ceil(accessors.end(event), 'day'), last);
  let padding = findIndex(range, x => eq(x, start, 'day'));
  let span = diff(start, end, 'day');
  span = Math.min(span, slots);
  span = Math.max(span, 1);
  return {
    event,
    span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }

  let i,
      j,
      seg,
      levels = [],
      extra = [];

  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];

    for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;

    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }

  for (i = 0; i < levels.length; i++) {
    levels[i].sort((a, b) => a.left - b.left); //eslint-disable-line
  }

  return {
    levels,
    extra
  };
}
function inRange(e, start, end, accessors) {
  let eStart = startOf(accessors.start(e), 'day');
  let eEnd = accessors.end(e);
  let startsBeforeEnd = lte(eStart, end, 'day'); // when the event is zero duration we need to handle a bit differently

  let endsAfterStart = !eq(eStart, eEnd, 'minutes') ? gt(eEnd, start, 'minutes') : gte(eEnd, start, 'minutes');
  return startsBeforeEnd && endsAfterStart;
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(otherSeg => otherSeg.left <= seg.right && otherSeg.right >= seg.left);
}
function sortEvents(evtA, evtB, accessors) {
  let startSort = +startOf(accessors.start(evtA), 'day') - +startOf(accessors.start(evtB), 'day');
  let durA = diff(accessors.start(evtA), ceil(accessors.end(evtA), 'day'), 'day');
  let durB = diff(accessors.start(evtB), ceil(accessors.end(evtB), 'day'), 'day');
  return startSort || // sort by start Day first
  Math.max(durB, 1) - Math.max(durA, 1) || // events spanning multiple days go first
  !!accessors.allDay(evtB) - !!accessors.allDay(evtA) || // then allDay single day events
  +accessors.start(evtA) - +accessors.start(evtB); // then sort by start time
}

var _jsxFileName$5 = "/Users/guilherme/work/react-big-calendar/src/EventEndingRow.js";

let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot;

let eventsInSlot = (segments, slot) => segments.filter(seg => isSegmentInSlot(seg, slot)).length;

class EventEndingRow extends React.Component {
  render() {
    let _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots;
    let rowSegments = eventLevels(segments).levels[0];
    let current = 1,
        lastEnd = 1,
        row = [];

    while (current <= slots) {
      let key = '_lvl_' + current;

      let _ref = rowSegments.filter(seg => isSegmentInSlot(seg, current))[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span; //eslint-disable-line


      if (!event) {
        current++;
        continue;
      }

      let gap = Math.max(0, left - lastEnd);

      if (this.canRenderSlotEvent(left, span)) {
        let content = EventRowMixin.renderEvent(this.props, event);

        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = current = right + 1;
      } else {
        if (gap) {
          row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
        lastEnd = current = current + 1;
      }
    }

    return React.createElement("div", {
      className: "rbc-row",
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 63
      },
      __self: this
    }, row);
  }

  canRenderSlotEvent(slot, span) {
    let segments = this.props.segments;
    return range$1(slot, slot + span).every(s => {
      let count = eventsInSlot(segments, s);
      return count === 1;
    });
  }

  renderShowMore(segments, slot) {
    let localizer = this.props.localizer;
    let count = eventsInSlot(segments, slot);
    return count ? React.createElement("a", {
      key: 'sm_' + slot,
      href: "#",
      className: 'rbc-show-more',
      onClick: e => this.showMore(slot, e),
      __source: {
        fileName: _jsxFileName$5,
        lineNumber: 81
      },
      __self: this
    }, localizer.messages.showMore(count)) : false;
  }

  showMore(slot, e) {
    e.preventDefault();
    this.props.onShowMore(slot, e.target);
  }

}

EventEndingRow.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  segments: PropTypes.array,
  slots: PropTypes.number,
  onShowMore: PropTypes.func
}, EventRowMixin.propTypes) : {};
EventEndingRow.defaultProps = _extends({}, EventRowMixin.defaultProps);

let isSegmentInSlot$1 = (seg, slot) => seg.left <= slot && seg.right >= slot;

const isEqual = (a, b) => a.range === b.range && a.events === b.events;

function getSlotMetrics() {
  return memoize(options => {
    const range = options.range,
          events = options.events,
          maxRows = options.maxRows,
          minRows = options.minRows,
          accessors = options.accessors;

    let _endOfRange = endOfRange(range),
        first = _endOfRange.first,
        last = _endOfRange.last;

    let segments = events.map(evt => eventSegments(evt, range, accessors));

    let _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra;

    while (levels.length < minRows) levels.push([]);

    return {
      first,
      last,
      levels,
      extra,
      range,
      slots: range.length,

      clone(args) {
        const metrics = getSlotMetrics();
        return metrics(_extends({}, options, args));
      },

      getDateForSlot(slotNumber) {
        return range[slotNumber];
      },

      getSlotForDate(date) {
        return range.find(r => eq(r, date, 'day'));
      },

      getEventsForSlot(slot) {
        return segments.filter(seg => isSegmentInSlot$1(seg, slot)).map(seg => seg.event);
      },

      continuesPrior(event) {
        return lt(accessors.start(event), first, 'day');
      },

      continuesAfter(event) {
        const eventEnd = accessors.end(event);
        const singleDayDuration = eq(accessors.start(event), eventEnd, 'minutes');
        return singleDayDuration ? gte(eventEnd, last, 'minutes') : gt(eventEnd, last, 'minutes');
      }

    };
  }, isEqual);
}

var _jsxFileName$6 = "/Users/guilherme/work/react-big-calendar/src/DateContentRow.js";

class DateContentRow extends React.Component {
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
      let row = qsa(findDOMNode(this), '.rbc-row-bg')[0];
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
      return container ? container() : findDOMNode(this);
    };

    this.renderHeadingCell = (date, index) => {
      let _this$props3 = this.props,
          renderHeader = _this$props3.renderHeader,
          getNow = _this$props3.getNow;
      return renderHeader({
        date,
        key: "header_" + index,
        className: cn('rbc-date-cell', eq(date, getNow(), 'day') && 'rbc-now')
      });
    };

    this.renderDummy = () => {
      let _this$props4 = this.props,
          className = _this$props4.className,
          range = _this$props4.range,
          renderHeader = _this$props4.renderHeader;
      return React.createElement("div", {
        className: className,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 77
        },
        __self: this
      }, React.createElement("div", {
        className: "rbc-row-content",
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 78
        },
        __self: this
      }, renderHeader && React.createElement("div", {
        className: "rbc-row",
        ref: this.createHeadingRef,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 80
        },
        __self: this
      }, range.map(this.renderHeadingCell)), React.createElement("div", {
        className: "rbc-row",
        ref: this.createEventRef,
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 84
        },
        __self: this
      }, React.createElement("div", {
        className: "rbc-row-segment",
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 85
        },
        __self: this
      }, React.createElement("div", {
        className: "rbc-event",
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 86
        },
        __self: this
      }, React.createElement("div", {
        className: "rbc-event-content",
        __source: {
          fileName: _jsxFileName$6,
          lineNumber: 87
        },
        __self: this
      }, "\xA0"))))));
    };

    this.slotMetrics = getSlotMetrics();
  }

  getRowLimit() {
    let eventHeight = getHeight(this.eventRow);
    let headingHeight = this.headingRow ? getHeight(this.headingRow) : 0;
    let eventSpace = getHeight(findDOMNode(this)) - headingHeight; // return Math.max(Math.floor(eventSpace / eventHeight), 1)

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
    return React.createElement("div", {
      className: className,
      __source: {
        fileName: _jsxFileName$6,
        lineNumber: 142
      },
      __self: this
    }, React.createElement(BackgroundCells, {
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
        fileName: _jsxFileName$6,
        lineNumber: 143
      },
      __self: this
    }), React.createElement("div", {
      className: "rbc-row-content",
      __source: {
        fileName: _jsxFileName$6,
        lineNumber: 158
      },
      __self: this
    }, renderHeader && React.createElement("div", {
      className: "rbc-row ",
      ref: this.createHeadingRef,
      __source: {
        fileName: _jsxFileName$6,
        lineNumber: 160
      },
      __self: this
    }, range.map(this.renderHeadingCell)), React.createElement(WeekWrapper, _extends({
      isAllDay: isAllDay
    }, eventRowProps, {
      __source: {
        fileName: _jsxFileName$6,
        lineNumber: 164
      },
      __self: this
    }), levels.map((segs, idx) => React.createElement(EventRow, _extends({
      key: idx,
      segments: segs
    }, eventRowProps, {
      __source: {
        fileName: _jsxFileName$6,
        lineNumber: 166
      },
      __self: this
    }))), !!extra.length && React.createElement(EventEndingRow, _extends({
      segments: extra,
      onShowMore: this.handleShowMore
    }, eventRowProps, {
      __source: {
        fileName: _jsxFileName$6,
        lineNumber: 169
      },
      __self: this
    })))));
  }

}

DateContentRow.propTypes = process.env.NODE_ENV !== "production" ? {
  date: PropTypes.instanceOf(Date),
  events: PropTypes.array.isRequired,
  range: PropTypes.array.isRequired,
  rtl: PropTypes.bool,
  resourceId: PropTypes.any,
  renderForMeasure: PropTypes.bool,
  renderHeader: PropTypes.func,
  container: PropTypes.func,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,
  onShowMore: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelect: PropTypes.func,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onDoubleClick: PropTypes.func,
  dayPropGetter: PropTypes.func,
  getNow: PropTypes.func.isRequired,
  isAllDay: PropTypes.bool,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  minRows: PropTypes.number.isRequired,
  maxRows: PropTypes.number.isRequired
} : {};
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};

var _jsxFileName$7 = "/Users/guilherme/work/react-big-calendar/src/Header.js";

const Header = (_ref) => {
  let label = _ref.label;
  return React.createElement("span", {
    __source: {
      fileName: _jsxFileName$7,
      lineNumber: 5
    },
    __self: undefined
  }, label);
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.node
} : {};

var _jsxFileName$8 = "/Users/guilherme/work/react-big-calendar/src/DateHeader.js";

const DateHeader = (_ref) => {
  let label = _ref.label,
      drilldownView = _ref.drilldownView,
      onDrillDown = _ref.onDrillDown;

  if (!drilldownView) {
    return React.createElement("span", {
      __source: {
        fileName: _jsxFileName$8,
        lineNumber: 6
      },
      __self: undefined
    }, label);
  }

  return React.createElement("a", {
    href: "#",
    onClick: onDrillDown,
    __source: {
      fileName: _jsxFileName$8,
      lineNumber: 10
    },
    __self: undefined
  }, label);
};

DateHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.node,
  date: PropTypes.instanceOf(Date),
  drilldownView: PropTypes.string,
  onDrillDown: PropTypes.func,
  isOffRange: PropTypes.bool
} : {};

var _jsxFileName$9 = "/Users/guilherme/work/react-big-calendar/src/Month.js";

let eventsForWeek = (evts, start, end, accessors) => evts.filter(e => inRange(e, start, end, accessors));

class MonthView extends React.Component {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    this.getContainer = () => {
      return findDOMNode(this);
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
      events.sort((a, b) => sortEvents(a, b, accessors));
      return React.createElement(DateContentRow, {
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
          fileName: _jsxFileName$9,
          lineNumber: 114
        },
        __self: this
      });
    };

    this.readerDateHeading = (_ref) => {
      let date = _ref.date,
          className = _ref.className,
          props = _objectWithoutPropertiesLoose(_ref, ["date", "className"]);

      let _this$props2 = this.props,
          currentDate = _this$props2.date,
          getDrilldownView = _this$props2.getDrilldownView,
          localizer = _this$props2.localizer;
      let isOffRange = month(date) !== month(currentDate);
      let isCurrent = eq(date, currentDate, 'day');
      let drilldownView = getDrilldownView(date);
      let label = localizer.format(date, 'dateFormat');
      let DateHeaderComponent = this.props.components.dateHeader || DateHeader;
      return React.createElement("div", _extends({}, props, {
        className: cn(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current'),
        __source: {
          fileName: _jsxFileName$9,
          lineNumber: 152
        },
        __self: this
      }), React.createElement(DateHeaderComponent, {
        label: label,
        date: date,
        drilldownView: drilldownView,
        isOffRange: isOffRange,
        onDrillDown: e => this.handleHeadingClick(date, drilldownView, e),
        __source: {
          fileName: _jsxFileName$9,
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
      notify(this.props.onDrillDown, [date, view]);
    };

    this.handleSelectEvent = function () {
      _this.clearSelection();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      notify(_this.props.onSelectEvent, args);
    };

    this.handleDoubleClickEvent = function () {
      _this.clearSelection();

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      notify(_this.props.onDoubleClickEvent, args);
    };

    this.handleShowMore = (events, date, cell, slot, target) => {
      const _this$props3 = this.props,
            popup = _this$props3.popup,
            onDrillDown = _this$props3.onDrillDown,
            onShowMore = _this$props3.onShowMore,
            getDrilldownView = _this$props3.getDrilldownView; //cancel any pending selections so only the event click goes through.

      this.clearSelection();

      if (popup) {
        let position = getPosition(cell, findDOMNode(this));
        this.setState({
          overlay: {
            date,
            events,
            position,
            target
          }
        });
      } else {
        notify(onDrillDown, [date, getDrilldownView(date) || views.DAY]);
      }

      notify(onShowMore, [events, date, slot]);
    };

    this._bgRows = [];
    this._pendingSelection = [];
    this.slotRowRef = React.createRef();
    this.state = {
      rowLimit: 5,
      needLimitMeasure: true
    };
  }

  componentWillReceiveProps(_ref2) {
    let date = _ref2.date;
    this.setState({
      needLimitMeasure: !eq(date, this.props.date, 'month')
    });
  }

  componentDidMount() {
    let running;
    if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    window.addEventListener('resize', this._resizeListener = () => {
      if (!running) {
        raf(() => {
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
        month = visibleDays(date, localizer),
        weeks = chunk(month, 7);
    this._weekCount = weeks.length;
    return React.createElement("div", {
      className: cn('rbc-month-view', className),
      __source: {
        fileName: _jsxFileName$9,
        lineNumber: 83
      },
      __self: this
    }, React.createElement("div", {
      className: "rbc-row rbc-month-header",
      __source: {
        fileName: _jsxFileName$9,
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
    let HeaderComponent = components.header || Header;
    return range(first, last, 'day').map((day, idx) => React.createElement("div", {
      key: 'header_' + idx,
      className: "rbc-header",
      __source: {
        fileName: _jsxFileName$9,
        lineNumber: 178
      },
      __self: this
    }, React.createElement(HeaderComponent, {
      date: day,
      localizer: localizer,
      label: localizer.format(day, 'weekdayFormat'),
      __source: {
        fileName: _jsxFileName$9,
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
    return React.createElement(Overlay, {
      rootClose: true,
      placement: "bottom",
      container: this,
      show: !!overlay.position,
      onHide: () => this.setState({
        overlay: null
      }),
      target: () => overlay.target,
      __source: {
        fileName: _jsxFileName$9,
        lineNumber: 193
      },
      __self: this
    }, (_ref3) => {
      let props = _ref3.props;
      return React.createElement(Popup$1, _extends({}, props, {
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
          fileName: _jsxFileName$9,
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
    notify(this.props.onSelectSlot, {
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
  events: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  step: PropTypes.number,
  getNow: PropTypes.func.isRequired,
  scrollToTime: PropTypes.instanceOf(Date),
  rtl: PropTypes.bool,
  width: PropTypes.number,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,
  onNavigate: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onShowMore: PropTypes.func,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,
  popup: PropTypes.bool,
  popupOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })])
} : {};

MonthView.range = (date, _ref4) => {
  let localizer = _ref4.localizer;
  let start = firstVisibleDay(date, localizer);
  let end = lastVisibleDay(date, localizer);
  return {
    start,
    end
  };
};

MonthView.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return add(date, -1, 'month');

    case navigate.NEXT:
      return add(date, 1, 'month');

    default:
      return date;
  }
};

MonthView.title = (date, _ref5) => {
  let localizer = _ref5.localizer;
  return localizer.format(date, 'monthHeaderFormat');
};

const getDstOffset = (start, end) => start.getTimezoneOffset() - end.getTimezoneOffset();

const getKey = (min, max, step, slots) => "" + +startOf(min, 'minutes') + ("" + +startOf(max, 'minutes')) + (step + "-" + slots);

function getSlotMetrics$1(_ref) {
  let start = _ref.min,
      end = _ref.max,
      step = _ref.step,
      timeslots = _ref.timeslots;
  const key = getKey(start, end, step, timeslots); // if the start is on a DST-changing day but *after* the moment of DST
  // transition we need to add those extra minutes to our minutesFromMidnight

  const daystart = startOf(start, 'day');
  const daystartdstoffset = getDstOffset(daystart, start);
  const totalMin = 1 + diff(start, end, 'minutes') + getDstOffset(start, end);
  const minutesFromMidnight = diff(daystart, start, 'minutes') + daystartdstoffset;
  const numGroups = Math.ceil(totalMin / (step * timeslots));
  const numSlots = numGroups * timeslots;
  const groups = new Array(numGroups);
  const slots = new Array(numSlots); // Each slot date is created from "zero", instead of adding `step` to
  // the previous one, in order to avoid DST oddities

  for (let grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);

    for (let slot = 0; slot < timeslots; slot++) {
      const slotIdx = grp * timeslots + slot;
      const minFromStart = slotIdx * step; // A date with total minutes calculated from the start of the day

      slots[slotIdx] = groups[grp][slot] = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + minFromStart, 0, 0);
    }
  } // Necessary to be able to select up until the last timeslot in a day


  const lastSlotMinFromStart = slots.length * step;
  slots.push(new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, minutesFromMidnight + lastSlotMinFromStart, 0, 0));

  function positionFromDate(date) {
    const diff$1 = diff(start, date, 'minutes') + getDstOffset(start, date);
    return Math.min(diff$1, totalMin);
  }

  return {
    groups,

    update(args) {
      if (getKey(args) !== key) return getSlotMetrics$1(args);
      return this;
    },

    dateIsInGroup(date, groupIndex) {
      const nextGroup = groups[groupIndex + 1];
      return inRange$1(date, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, 'minutes');
    },

    nextSlot(slot) {
      let next = slots[Math.min(slots.indexOf(slot) + 1, slots.length - 1)]; // in the case of the last slot we won't a long enough range so manually get it

      if (next === slot) next = add(slot, step, 'minutes');
      return next;
    },

    closestSlotToPosition(percent) {
      const slot = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot];
    },

    closestSlotFromPoint(point, boundaryRect) {
      let range = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range);
    },

    closestSlotFromDate(date, offset) {
      if (offset === void 0) {
        offset = 0;
      }

      if (lt(date, start, 'minutes')) return slots[0];
      const diffMins = diff(start, date, 'minutes');
      return slots[(diffMins - diffMins % step) / step + offset];
    },

    startsBeforeDay(date) {
      return lt(date, start, 'day');
    },

    startsAfterDay(date) {
      return gt(date, end, 'day');
    },

    startsBefore(date) {
      return lt(merge(start, date), start, 'minutes');
    },

    startsAfter(date) {
      return gt(merge(end, date), end, 'minutes');
    },

    getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = min(end, max(start, rangeStart));
      if (!ignoreMax) rangeEnd = min(end, max(start, rangeEnd));
      const rangeStartMin = positionFromDate(rangeStart);
      const rangeEndMin = positionFromDate(rangeEnd);
      const top = rangeEndMin - rangeStartMin < step ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top,
        height: rangeEndMin / (step * numSlots) * 100 - top,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    }

  };
}

class Event {
  constructor(data, _ref) {
    let accessors = _ref.accessors,
        slotMetrics = _ref.slotMetrics;

    const _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)),
          start = _slotMetrics$getRange.start,
          startDate = _slotMetrics$getRange.startDate,
          end = _slotMetrics$getRange.end,
          endDate = _slotMetrics$getRange.endDate,
          top = _slotMetrics$getRange.top,
          height = _slotMetrics$getRange.height;

    this.start = start;
    this.end = end;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top;
    this.height = height;
    this.data = data;
  }
  /**
   * The event's width without any overlap.
   */


  get _width() {
    // The container event's width is determined by the maximum number of
    // events in any of its rows.
    if (this.rows) {
      const columns = this.rows.reduce((max, row) => Math.max(max, row.leaves.length + 1), // add itself
      0) + 1; // add the container

      return 100 / columns;
    }

    const availableWidth = 100 - this.container._width; // The row event's width is the space left by the container, divided
    // among itself and its leaves.

    if (this.leaves) {
      return availableWidth / (this.leaves.length + 1);
    } // The leaf event's width is determined by its row's width


    return this.row._width;
  }
  /**
   * The event's calculated width, possibly with extra width added for
   * overlapping effect.
   */


  get width() {
    const noOverlap = this._width;
    const overlap = Math.min(100, this._width * 1.7); // Containers can always grow.

    if (this.rows) {
      return overlap;
    } // Rows can grow if they have leaves.


    if (this.leaves) {
      return this.leaves.length > 0 ? overlap : noOverlap;
    } // Leaves can grow unless they're the last item in a row.


    const leaves = this.row.leaves;
    const index = leaves.indexOf(this);
    return index === leaves.length - 1 ? noOverlap : overlap;
  }

  get xOffset() {
    // Containers have no offset.
    if (this.rows) return 0; // Rows always start where their container ends.

    if (this.leaves) return this.container._width; // Leaves are spread out evenly on the space left by its row.

    const _this$row = this.row,
          leaves = _this$row.leaves,
          xOffset = _this$row.xOffset,
          _width = _this$row._width;
    const index = leaves.indexOf(this) + 1;
    return xOffset + index * _width;
  }

}
/**
 * Return true if event a and b is considered to be on the same row.
 */


function onSameRow(a, b, minimumStartDifference) {
  return (// Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference || // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}

function sortByRender(events) {
  const sortedByTime = sortBy(events, ['startMs', e => -e.endMs]);
  const sorted = [];

  while (sortedByTime.length > 0) {
    const event = sortedByTime.shift();
    sorted.push(event);

    for (let i = 0; i < sortedByTime.length; i++) {
      const test = sortedByTime[i]; // Still inside this event, look for next.

      if (event.endMs > test.startMs) continue; // We've found the first event of the next event group.
      // If that event is not right next to our current event, we have to
      // move it here.

      if (i > 0) {
        const event = sortedByTime.splice(i, 1)[0];
        sorted.push(event);
      } // We've already found the next event group, so stop looking.


      break;
    }
  }

  return sorted;
}

function getStyledEvents(_ref2) {
  let events = _ref2.events,
      minimumStartDifference = _ref2.minimumStartDifference,
      slotMetrics = _ref2.slotMetrics,
      accessors = _ref2.accessors;
  // Create proxy events and order them so that we don't have
  // to fiddle with z-indexes.
  const proxies = events.map(event => new Event(event, {
    slotMetrics,
    accessors
  }));
  const eventsInRenderOrder = sortByRender(proxies); // Group overlapping events, while keeping order.
  // Every event is always one of: container, row or leaf.
  // Containers can contain rows, and rows can contain leaves.

  const containerEvents = [];

  for (let i = 0; i < eventsInRenderOrder.length; i++) {
    const event = eventsInRenderOrder[i]; // Check if this event can go into a container event.

    const container = containerEvents.find(c => c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference); // Couldn't find a container — that means this event is a container.

    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      continue;
    } // Found a container for the event.


    event.container = container; // Check if the event can be placed in an existing row.
    // Start looking from behind.

    let row = null;

    for (let j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }

    if (row) {
      // Found a row, so add it.
      row.leaves.push(event);
      event.row = row;
    } else {
      // Couldn't find a row – that means this event is a row.
      event.leaves = [];
      container.rows.push(event);
    }
  } // Return the original events, along with their styles.


  return eventsInRenderOrder.map(event => ({
    event: event.data,
    style: {
      top: event.top,
      height: event.height,
      width: event.width,
      xOffset: event.xOffset
    }
  }));
}

var _jsxFileName$a = "/Users/guilherme/work/react-big-calendar/src/TimeSlotGroup.js";
class TimeSlotGroup extends Component {
  render() {
    const _this$props = this.props,
          renderSlot = _this$props.renderSlot,
          resource = _this$props.resource,
          group = _this$props.group,
          getters = _this$props.getters,
          _this$props$component = _this$props.components,
          _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component,
          _this$props$component3 = _this$props$component2.timeSlotWrapper,
          Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;

    return React.createElement("div", {
      className: "rbc-timeslot-group",
      __source: {
        fileName: _jsxFileName$a,
        lineNumber: 18
      },
      __self: this
    }, group.map((value, idx) => {
      const slotProps = getters ? getters.slotProp(value, resource) : {};
      return React.createElement(Wrapper, {
        key: idx,
        value: value,
        resource: resource,
        __source: {
          fileName: _jsxFileName$a,
          lineNumber: 22
        },
        __self: this
      }, React.createElement("div", _extends({}, slotProps, {
        className: cn('rbc-time-slot', slotProps.className),
        __source: {
          fileName: _jsxFileName$a,
          lineNumber: 23
        },
        __self: this
      }), renderSlot && renderSlot(value, idx)));
    }));
  }

}
TimeSlotGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  renderSlot: PropTypes.func,
  group: PropTypes.array.isRequired,
  resource: PropTypes.any,
  components: PropTypes.object,
  getters: PropTypes.object
} : {};

var _jsxFileName$b = "/Users/guilherme/work/react-big-calendar/src/TimeGridEvent.js";
/* eslint-disable react/prop-types */

function TimeGridEvent(props) {
  const style = props.style,
        className = props.className,
        event = props.event,
        accessors = props.accessors,
        rtl = props.rtl,
        selected = props.selected,
        label = props.label,
        continuesEarlier = props.continuesEarlier,
        continuesLater = props.continuesLater,
        getters = props.getters,
        onClick = props.onClick,
        onDoubleClick = props.onDoubleClick,
        _props$components = props.components,
        Event = _props$components.event,
        EventWrapper = _props$components.eventWrapper;
  let title = accessors.title(event);
  let tooltip = accessors.tooltip(event);
  let end = accessors.end(event);
  let start = accessors.start(event);
  let userProps = getters.eventProp(event, start, end, selected);
  let height = style.height,
      top = style.top,
      width = style.width,
      xOffset = style.xOffset;
  const inner = [React.createElement("div", {
    key: "1",
    className: "rbc-event-label",
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 30
    },
    __self: this
  }, label), React.createElement("div", {
    key: "2",
    className: "rbc-event-content",
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 33
    },
    __self: this
  }, Event ? React.createElement(Event, {
    event: event,
    title: title,
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 34
    },
    __self: this
  }) : title)];
  return React.createElement(EventWrapper, _extends({
    type: "time"
  }, props, {
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 39
    },
    __self: this
  }), React.createElement("div", {
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    style: _extends({}, userProps.style, {
      top: top + "%",
      height: height + "%",
      [rtl ? 'right' : 'left']: Math.max(0, xOffset) + "%",
      width: width + "%"
    }),
    title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
    className: cn('rbc-event', className, userProps.className, {
      'rbc-selected': selected,
      'rbc-event-continues-earlier': continuesEarlier,
      'rbc-event-continues-later': continuesLater
    }),
    __source: {
      fileName: _jsxFileName$b,
      lineNumber: 40
    },
    __self: this
  }, inner));
}

var _jsxFileName$c = "/Users/guilherme/work/react-big-calendar/src/DayColumn.js";

class DayColumn extends React.Component {
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
      let styledEvents = getStyledEvents({
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
        return React.createElement(TimeGridEvent, {
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
          selected: isSelected(event, selected),
          onClick: e => this._select(event, e),
          onDoubleClick: e => this._doubleClick(event, e),
          __source: {
            fileName: _jsxFileName$c,
            lineNumber: 217
          },
          __self: this
        });
      });
    };

    this._selectable = () => {
      let node = findDOMNode(this);
      let selector = this._selector = new Selection(() => findDOMNode(this), {
        longPressThreshold: this.props.longPressThreshold
      });

      let maybeSelect = box => {
        let onSelecting = this.props.onSelecting;
        let current = this.state || {};
        let state = selectionState(box);
        let start = state.startDate,
            end = state.endDate;

        if (onSelecting) {
          if (eq(current.startDate, start, 'minutes') && eq(current.endDate, end, 'minutes') || onSelecting({
            start,
            end
          }) === false) return;
        }

        if (this.state.start !== state.start || this.state.end !== state.end || this.state.selecting !== state.selecting) {
          this.setState(state);
        }
      };

      let selectionState = point => {
        let currentSlot = this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
        if (!this.state.selecting) this._initialSlot = currentSlot;
        let initialSlot = this._initialSlot;
        if (initialSlot === currentSlot) currentSlot = this.slotMetrics.nextSlot(initialSlot);
        const selectRange = this.slotMetrics.getRange(min(initialSlot, currentSlot), max(initialSlot, currentSlot));
        return _extends({}, selectRange, {
          selecting: true,
          top: selectRange.top + "%",
          height: selectRange.height + "%"
        });
      };

      let selectorClicksHandler = (box, actionType) => {
        if (!isEvent(findDOMNode(this), box)) {
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
        return !isEvent(findDOMNode(this), box);
      });
      selector.on('click', box => selectorClicksHandler(box, 'click'));
      selector.on('doubleClick', box => selectorClicksHandler(box, 'doubleClick'));
      selector.on('select', bounds => {
        if (this.state.selecting) {
          this._selectSlot(_extends({}, this.state, {
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

      while (lte(current, endDate)) {
        slots.push(current);
        current = add(current, this.props.step, 'minutes');
      }

      notify(this.props.onSelectSlot, {
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

      notify(_this.props.onSelectEvent, args);
    };

    this._doubleClick = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      notify(_this.props.onDoubleClickEvent, args);
    };

    this.slotMetrics = getSlotMetrics$1(this.props);
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
    const getNowChanged = !eq(prevProps.getNow(), this.props.getNow(), 'minutes');

    if (prevProps.isNow !== this.props.isNow || getNowChanged) {
      this.clearTimeIndicatorInterval();

      if (this.props.isNow) {
        const tail = !getNowChanged && eq(prevProps.date, this.props.date, 'minutes') && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
        this.setTimeIndicatorPositionUpdateInterval(tail);
      }
    } else if (this.props.isNow && (!eq(prevProps.min, this.props.min, 'minutes') || !eq(prevProps.max, this.props.max, 'minutes'))) {
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
          getters = _objectWithoutPropertiesLoose(_this$props3$getters, ["dayProp"]),
          _this$props3$componen = _this$props3.components,
          EventContainer = _this$props3$componen.eventContainerWrapper,
          components = _objectWithoutPropertiesLoose(_this$props3$componen, ["eventContainerWrapper"]);

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

    return React.createElement("div", {
      style: style,
      className: cn(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today', // WHY
      selecting && 'rbc-slot-selecting'),
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 127
      },
      __self: this
    }, slotMetrics.groups.map((grp, idx) => React.createElement(TimeSlotGroup, {
      key: idx,
      group: grp,
      resource: resource,
      getters: getters,
      components: components,
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 139
      },
      __self: this
    })), React.createElement(EventContainer, {
      localizer: localizer,
      resource: resource,
      accessors: accessors,
      getters: getters,
      components: components,
      slotMetrics: slotMetrics,
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 147
      },
      __self: this
    }, React.createElement("div", {
      className: cn('rbc-events-container', rtl && 'rtl'),
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 155
      },
      __self: this
    }, this.renderEvents())), selecting && React.createElement("div", {
      className: "rbc-slot-selection",
      style: {
        top,
        height
      },
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 161
      },
      __self: this
    }, React.createElement("span", {
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 162
      },
      __self: this
    }, localizer.format(selectDates, 'selectRangeFormat'))), isNow && React.createElement("div", {
      className: "rbc-current-time-indicator",
      style: {
        top: this.state.timeIndicatorPosition + "%"
      },
      __source: {
        fileName: _jsxFileName$c,
        lineNumber: 166
      },
      __self: this
    }));
  }

}

DayColumn.propTypes = process.env.NODE_ENV !== "production" ? {
  events: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  min: PropTypes.instanceOf(Date).isRequired,
  max: PropTypes.instanceOf(Date).isRequired,
  getNow: PropTypes.func.isRequired,
  isNow: PropTypes.bool,
  rtl: PropTypes.bool,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  showMultiDayTimes: PropTypes.bool,
  culture: PropTypes.string,
  timeslots: PropTypes.number,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  eventOffset: PropTypes.number,
  longPressThreshold: PropTypes.number,
  onSelecting: PropTypes.func,
  onSelectSlot: PropTypes.func.isRequired,
  onSelectEvent: PropTypes.func.isRequired,
  onDoubleClickEvent: PropTypes.func.isRequired,
  className: PropTypes.string,
  dragThroughEvents: PropTypes.bool,
  resource: PropTypes.any
} : {};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};

var _jsxFileName$d = "/Users/guilherme/work/react-big-calendar/src/TimeGutter.js";
class TimeGutter extends Component {
  constructor() {
    super(...arguments);

    this.renderSlot = (value, idx) => {
      if (idx !== 0) return null;
      const _this$props = this.props,
            localizer = _this$props.localizer,
            getNow = _this$props.getNow;
      const isNow = this.slotMetrics.dateIsInGroup(getNow(), idx);
      return React.createElement("span", {
        className: cn('rbc-label', isNow && 'rbc-now'),
        __source: {
          fileName: _jsxFileName$d,
          lineNumber: 32
        },
        __self: this
      }, localizer.format(value, 'timeGutterFormat'));
    };

    const _this$props2 = this.props,
          min = _this$props2.min,
          max = _this$props2.max,
          timeslots = _this$props2.timeslots,
          step = _this$props2.step;
    this.slotMetrics = getSlotMetrics$1({
      min,
      max,
      timeslots,
      step
    });
  }

  componentWillReceiveProps(nextProps) {
    const min = nextProps.min,
          max = nextProps.max,
          timeslots = nextProps.timeslots,
          step = nextProps.step;
    this.slotMetrics = this.slotMetrics.update({
      min,
      max,
      timeslots,
      step
    });
  }

  render() {
    const _this$props3 = this.props,
          resource = _this$props3.resource,
          components = _this$props3.components;
    return React.createElement("div", {
      className: "rbc-time-gutter rbc-time-column",
      __source: {
        fileName: _jsxFileName$d,
        lineNumber: 42
      },
      __self: this
    }, this.slotMetrics.groups.map((grp, idx) => {
      return React.createElement(TimeSlotGroup, {
        key: idx,
        group: grp,
        resource: resource,
        components: components,
        renderSlot: this.renderSlot,
        __source: {
          fileName: _jsxFileName$d,
          lineNumber: 45
        },
        __self: this
      });
    }));
  }

}
TimeGutter.propTypes = process.env.NODE_ENV !== "production" ? {
  min: PropTypes.instanceOf(Date).isRequired,
  max: PropTypes.instanceOf(Date).isRequired,
  timeslots: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  getNow: PropTypes.func.isRequired,
  components: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  resource: PropTypes.string
} : {};

var _jsxFileName$e = "/Users/guilherme/work/react-big-calendar/src/ResourceHeader.js";

const ResourceHeader = (_ref) => {
  let label = _ref.label;
  return React.createElement(React.Fragment, {
    __source: {
      fileName: _jsxFileName$e,
      lineNumber: 5
    },
    __self: undefined
  }, label);
};

ResourceHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  label: PropTypes.node,
  index: PropTypes.number,
  resource: PropTypes.object
} : {};

var _jsxFileName$f = "/Users/guilherme/work/react-big-calendar/src/TimeGridHeader.js";

class TimeGridHeader extends React.Component {
  constructor() {
    super(...arguments);

    this.handleHeaderClick = (date, view, e) => {
      e.preventDefault();
      notify(this.props.onDrillDown, [date, view]);
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
      return React.createElement(DateContentRow, {
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
          fileName: _jsxFileName$f,
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
        HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
    const today = getNow();
    return range.map((date, i) => {
      let drilldownView = getDrilldownView(date);
      let label = localizer.format(date, 'dayFormat');

      const _dayProp = dayProp(date),
            className = _dayProp.className,
            style = _dayProp.style;

      let header = React.createElement(HeaderComponent, {
        date: date,
        label: label,
        localizer: localizer,
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 36
        },
        __self: this
      });
      return React.createElement("div", {
        key: i,
        style: style,
        className: cn('rbc-header', className, eq(date, today, 'day') && 'rbc-today'),
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 40
        },
        __self: this
      }, drilldownView ? React.createElement("a", {
        href: "#",
        onClick: e => this.handleHeaderClick(date, drilldownView, e),
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 50
        },
        __self: this
      }, header) : React.createElement("span", {
        __source: {
          fileName: _jsxFileName$f,
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
        ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2;
    let style = {};

    if (isOverflowing) {
      style[rtl ? 'marginLeft' : 'marginRight'] = scrollbarSize() + "px";
    }

    const groupedEvents = resources.groupEvents(events);
    return React.createElement("div", {
      style: style,
      ref: scrollRef,
      className: cn('rbc-time-header', isOverflowing && 'rbc-overflowing'),
      __source: {
        fileName: _jsxFileName$f,
        lineNumber: 134
      },
      __self: this
    }, React.createElement("div", {
      className: "rbc-label rbc-time-header-gutter",
      style: {
        width,
        minWidth: width,
        maxWidth: width
      },
      __source: {
        fileName: _jsxFileName$f,
        lineNumber: 139
      },
      __self: this
    }, TimeGutterHeader && React.createElement(TimeGutterHeader, {
      __source: {
        fileName: _jsxFileName$f,
        lineNumber: 143
      },
      __self: this
    })), resources.map((_ref, idx) => {
      let id = _ref[0],
          resource = _ref[1];
      return React.createElement("div", {
        className: "rbc-time-header-content",
        key: id || idx,
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 147
        },
        __self: this
      }, resource && React.createElement("div", {
        className: "rbc-row rbc-row-resource",
        key: "resource_" + idx,
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 149
        },
        __self: this
      }, React.createElement("div", {
        className: "rbc-header",
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 150
        },
        __self: this
      }, React.createElement(ResourceHeaderComponent, {
        index: idx,
        label: accessors.resourceTitle(resource),
        resource: resource,
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 151
        },
        __self: this
      }))), React.createElement("div", {
        className: "rbc-row rbc-time-header-cell" + (range.length <= 1 ? ' rbc-time-header-cell-single-day' : ''),
        __source: {
          fileName: _jsxFileName$f,
          lineNumber: 159
        },
        __self: this
      }, this.renderHeaderCells(range)), React.createElement(DateContentRow, {
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
          fileName: _jsxFileName$f,
          lineNumber: 166
        },
        __self: this
      }));
    }));
  }

}

TimeGridHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  range: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  resources: PropTypes.object,
  getNow: PropTypes.func.isRequired,
  isOverflowing: PropTypes.bool,
  rtl: PropTypes.bool,
  width: PropTypes.number,
  localizer: PropTypes.object.isRequired,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,
  onSelectSlot: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,
  scrollRef: PropTypes.any
} : {};

const NONE = {};
function Resources(resources, accessors) {
  return {
    map(fn) {
      if (!resources) return [fn([NONE, null], 0)];
      return resources.map((resource, idx) => fn([accessors.resourceId(resource), resource], idx));
    },

    groupEvents(events) {
      const eventsByResource = new Map();

      if (!resources) {
        // Return all events if resources are not provided
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }

      events.forEach(event => {
        const id = accessors.resource(event) || NONE;
        let resourceEvents = eventsByResource.get(id) || [];
        resourceEvents.push(event);
        eventsByResource.set(id, resourceEvents);
      });
      return eventsByResource;
    }

  };
}

var _jsxFileName$g = "/Users/guilherme/work/react-big-calendar/src/TimeGrid.js";
class TimeGrid extends Component {
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
      raf.cancel(this.rafHandle);
      this.rafHandle = raf(this.checkOverflow);
    };

    this.gutterRef = ref => {
      this.gutter = ref && findDOMNode(ref);
    };

    this.handleSelectAlldayEvent = function () {
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      notify(_this.props.onSelectEvent, args);
    };

    this.handleSelectAllDaySlot = (slots, slotInfo) => {
      const onSelectSlot = this.props.onSelectSlot;
      notify(onSelectSlot, {
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

    this.memoizedResources = memoize((resources, accessors) => Resources(resources, accessors));
    this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    this.scrollRef = React.createRef();
    this.contentRef = React.createRef();
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
    raf.cancel(this.rafHandle);

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

    if (!eq(nextProps.range[0], range[0], 'minute') || !eq(nextProps.scrollToTime, scrollToTime, 'minute')) {
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
        let daysEvents = (groupedEvents.get(id) || []).filter(event => inRange$1(date, accessors.start(event), accessors.end(event), 'day'));
        return React.createElement(DayColumn, _extends({}, this.props, {
          localizer: localizer,
          min: merge(date, min),
          max: merge(date, max),
          resource: resource && id,
          components: components,
          isNow: eq(date, now, 'day'),
          key: i + '-' + jj,
          date: date,
          events: daysEvents,
          __source: {
            fileName: _jsxFileName$g,
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
      if (inRange(event, start, end, accessors)) {
        let eStart = accessors.start(event),
            eEnd = accessors.end(event);

        if (accessors.allDay(event) || isJustDate(eStart) && isJustDate(eEnd) || !showMultiDayTimes && !eq(eStart, eEnd, 'day')) {
          allDayEvents.push(event);
        } else {
          rangeEvents.push(event);
        }
      }
    });
    allDayEvents.sort((a, b) => sortEvents(a, b, accessors));
    return React.createElement("div", {
      className: cn('rbc-time-view', resources && 'rbc-time-view-resources'),
      __source: {
        fileName: _jsxFileName$g,
        lineNumber: 189
      },
      __self: this
    }, React.createElement(TimeGridHeader, {
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
        fileName: _jsxFileName$g,
        lineNumber: 192
      },
      __self: this
    }), React.createElement("div", {
      ref: this.contentRef,
      className: "rbc-time-content",
      onScroll: this.handleScroll,
      __source: {
        fileName: _jsxFileName$g,
        lineNumber: 214
      },
      __self: this
    }, React.createElement(TimeGutter, {
      date: start,
      ref: this.gutterRef,
      localizer: localizer,
      min: merge(start, min),
      max: merge(start, max),
      step: this.props.step,
      getNow: this.props.getNow,
      timeslots: this.props.timeslots,
      components: components,
      className: "rbc-time-gutter",
      __source: {
        fileName: _jsxFileName$g,
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
      const width = getWidth(this.gutter);

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
    const diffMillis = scrollToTime - startOf(scrollToTime, 'day');
    const totalMillis = diff(max, min);
    this._scrollRatio = diffMillis / totalMillis;
  }

}
TimeGrid.propTypes = process.env.NODE_ENV !== "production" ? {
  events: PropTypes.array.isRequired,
  resources: PropTypes.array,
  step: PropTypes.number,
  timeslots: PropTypes.number,
  range: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  getNow: PropTypes.func.isRequired,
  scrollToTime: PropTypes.instanceOf(Date),
  showMultiDayTimes: PropTypes.bool,
  rtl: PropTypes.bool,
  width: PropTypes.number,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,
  onNavigate: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired
} : {};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  min: startOf(new Date(), 'day'),
  max: endOf(new Date(), 'day'),
  scrollToTime: startOf(new Date(), 'day')
};

var _jsxFileName$h = "/Users/guilherme/work/react-big-calendar/src/Day.js";

class Day extends React.Component {
  render() {
    let _this$props = this.props,
        date = _this$props.date,
        props = _objectWithoutPropertiesLoose(_this$props, ["date"]);

    let range = Day.range(date);
    return React.createElement(TimeGrid, _extends({}, props, {
      range: range,
      eventOffset: 10,
      __source: {
        fileName: _jsxFileName$h,
        lineNumber: 13
      },
      __self: this
    }));
  }

}

Day.propTypes = process.env.NODE_ENV !== "production" ? {
  date: PropTypes.instanceOf(Date).isRequired
} : {};

Day.range = date => {
  return [startOf(date, 'day')];
};

Day.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return add(date, -1, 'day');

    case navigate.NEXT:
      return add(date, 1, 'day');

    default:
      return date;
  }
};

Day.title = (date, _ref) => {
  let localizer = _ref.localizer;
  return localizer.format(date, 'dayHeaderFormat');
};

var _jsxFileName$i = "/Users/guilherme/work/react-big-calendar/src/Week.js";

class Week extends React.Component {
  render() {
    let _this$props = this.props,
        date = _this$props.date,
        props = _objectWithoutPropertiesLoose(_this$props, ["date"]);

    let range = Week.range(date, this.props);
    return React.createElement(TimeGrid, _extends({}, props, {
      range: range,
      eventOffset: 15,
      __source: {
        fileName: _jsxFileName$i,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

Week.propTypes = process.env.NODE_ENV !== "production" ? {
  date: PropTypes.instanceOf(Date).isRequired
} : {};
Week.defaultProps = TimeGrid.defaultProps;

Week.navigate = (date, action) => {
  switch (action) {
    case navigate.PREVIOUS:
      return add(date, -1, 'week');

    case navigate.NEXT:
      return add(date, 1, 'week');

    default:
      return date;
  }
};

Week.range = (date, _ref) => {
  let localizer = _ref.localizer;
  let firstOfWeek = localizer.startOfWeek();
  let start = startOf(date, 'week', firstOfWeek);
  let end = endOf(date, 'week', firstOfWeek);
  return range(start, end);
};

Week.title = (date, _ref2) => {
  let localizer = _ref2.localizer;

  let _Week$range = Week.range(date, {
    localizer
  }),
      start = _Week$range[0],
      rest = _Week$range.slice(1);

  return localizer.format({
    start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};

var _jsxFileName$j = "/Users/guilherme/work/react-big-calendar/src/WorkWeek.js";

function workWeekRange(date, options) {
  return Week.range(date, options).filter(d => [6, 0].indexOf(d.getDay()) === -1);
}

class WorkWeek extends React.Component {
  render() {
    let _this$props = this.props,
        date = _this$props.date,
        props = _objectWithoutPropertiesLoose(_this$props, ["date"]);

    let range = workWeekRange(date, this.props);
    return React.createElement(TimeGrid, _extends({}, props, {
      range: range,
      eventOffset: 15,
      __source: {
        fileName: _jsxFileName$j,
        lineNumber: 18
      },
      __self: this
    }));
  }

}

WorkWeek.propTypes = process.env.NODE_ENV !== "production" ? {
  date: PropTypes.instanceOf(Date).isRequired
} : {};
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;

WorkWeek.title = (date, _ref) => {
  let localizer = _ref.localizer;

  let _workWeekRange = workWeekRange(date, {
    localizer
  }),
      start = _workWeekRange[0],
      rest = _workWeekRange.slice(1);

  return localizer.format({
    start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};

var _jsxFileName$k = "/Users/guilherme/work/react-big-calendar/src/Agenda.js";

class Agenda extends React.Component {
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
      events = events.filter(e => inRange(e, startOf(day, 'day'), endOf(day, 'day'), accessors));
      return events.map((event, idx) => {
        let title = accessors.title(event);
        let end = accessors.end(event);
        let start = accessors.start(event);
        const userProps = getters.eventProp(event, start, end, isSelected(event, selected));
        let dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
        let first = idx === 0 ? React.createElement("td", {
          rowSpan: events.length,
          className: "rbc-agenda-date-cell",
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 101
          },
          __self: this
        }, AgendaDate ? React.createElement(AgendaDate, {
          day: day,
          label: dateLabel,
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 103
          },
          __self: this
        }) : dateLabel) : false;
        return React.createElement("tr", {
          key: dayKey + '_' + idx,
          className: userProps.className,
          style: userProps.style,
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 113
          },
          __self: this
        }, first, React.createElement("td", {
          className: "rbc-agenda-time-cell",
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 119
          },
          __self: this
        }, this.timeRangeLabel(day, event)), React.createElement("td", {
          className: "rbc-agenda-event-cell",
          __source: {
            fileName: _jsxFileName$k,
            lineNumber: 122
          },
          __self: this
        }, Event ? React.createElement(Event, {
          event: event,
          title: title,
          __source: {
            fileName: _jsxFileName$k,
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
        if (eq(start, end)) {
          label = localizer.format(start, 'agendaTimeFormat');
        } else if (eq(start, end, 'day')) {
          label = localizer.format({
            start,
            end
          }, 'agendaTimeRangeFormat');
        } else if (eq(day, start, 'day')) {
          label = localizer.format(start, 'agendaTimeFormat');
        } else if (eq(day, end, 'day')) {
          label = localizer.format(end, 'agendaTimeFormat');
        }
      }

      if (gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
      if (lt(day, end, 'day')) labelClass += ' rbc-continues-after';
      return React.createElement("span", {
        className: labelClass.trim(),
        __source: {
          fileName: _jsxFileName$k,
          lineNumber: 156
        },
        __self: this
      }, TimeComponent ? React.createElement(TimeComponent, {
        event: event,
        day: day,
        label: label,
        __source: {
          fileName: _jsxFileName$k,
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
      this._widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];

      if (widths[0] !== this._widths[0] || widths[1] !== this._widths[1]) {
        this.dateColRef.current.style.width = this._widths[0] + 'px';
        this.timeColRef.current.style.width = this._widths[1] + 'px';
      }

      if (isOverflowing) {
        classes.addClass(header, 'rbc-header-overflowing');
        header.style.marginRight = scrollbarSize() + 'px';
      } else {
        classes.removeClass(header, 'rbc-header-overflowing');
      }
    };

    this.headerRef = React.createRef();
    this.dateColRef = React.createRef();
    this.timeColRef = React.createRef();
    this.contentRef = React.createRef();
    this.tbodyRef = React.createRef();
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
    let end = add(date, length, 'day');
    let range$1 = range(date, end, 'day');
    events = events.filter(event => inRange(event, date, end, accessors));
    events.sort((a, b) => +accessors.start(a) - +accessors.start(b));
    return React.createElement("div", {
      className: "rbc-agenda-view",
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 42
      },
      __self: this
    }, events.length !== 0 ? React.createElement(React.Fragment, {
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 44
      },
      __self: this
    }, React.createElement("table", {
      ref: this.headerRef,
      className: "rbc-agenda-table",
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 45
      },
      __self: this
    }, React.createElement("thead", {
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 46
      },
      __self: this
    }, React.createElement("tr", {
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 47
      },
      __self: this
    }, React.createElement("th", {
      className: "rbc-header",
      ref: this.dateColRef,
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 48
      },
      __self: this
    }, messages.date), React.createElement("th", {
      className: "rbc-header",
      ref: this.timeColRef,
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 51
      },
      __self: this
    }, messages.time), React.createElement("th", {
      className: "rbc-header",
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 54
      },
      __self: this
    }, messages.event)))), React.createElement("div", {
      className: "rbc-agenda-content",
      ref: this.contentRef,
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 58
      },
      __self: this
    }, React.createElement("table", {
      className: "rbc-agenda-table",
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 59
      },
      __self: this
    }, React.createElement("tbody", {
      ref: this.tbodyRef,
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 60
      },
      __self: this
    }, range$1.map((day, idx) => this.renderDay(day, events, idx)))))) : React.createElement("span", {
      className: "rbc-agenda-empty",
      __source: {
        fileName: _jsxFileName$k,
        lineNumber: 67
      },
      __self: this
    }, messages.noEventsInRange));
  }

}

Agenda.propTypes = process.env.NODE_ENV !== "production" ? {
  events: PropTypes.array,
  date: PropTypes.instanceOf(Date),
  length: PropTypes.number.isRequired,
  selected: PropTypes.object,
  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired
} : {};
Agenda.defaultProps = {
  length: 30
};

Agenda.range = (start, _ref) => {
  let _ref$length = _ref.length,
      length = _ref$length === void 0 ? Agenda.defaultProps.length : _ref$length;
  let end = add(start, length, 'day');
  return {
    start,
    end
  };
};

Agenda.navigate = (date, action, _ref2) => {
  let _ref2$length = _ref2.length,
      length = _ref2$length === void 0 ? Agenda.defaultProps.length : _ref2$length;

  switch (action) {
    case navigate.PREVIOUS:
      return add(date, -length, 'day');

    case navigate.NEXT:
      return add(date, length, 'day');

    default:
      return date;
  }
};

Agenda.title = (start, _ref3) => {
  let _ref3$length = _ref3.length,
      length = _ref3$length === void 0 ? Agenda.defaultProps.length : _ref3$length,
      localizer = _ref3.localizer;
  let end = add(start, length, 'day');
  return localizer.format({
    start,
    end
  }, 'agendaHeaderFormat');
};

const VIEWS = {
  [views.MONTH]: MonthView,
  [views.WEEK]: Week,
  [views.WORK_WEEK]: WorkWeek,
  [views.DAY]: Day,
  [views.AGENDA]: Agenda
};

function moveDate(View, _ref) {
  let action = _ref.action,
      date = _ref.date,
      today = _ref.today,
      props = _objectWithoutPropertiesLoose(_ref, ["action", "date", "today"]);

  View = typeof View === 'string' ? VIEWS[View] : View;

  switch (action) {
    case navigate.TODAY:
      date = today || new Date();
      break;

    case navigate.DATE:
      break;

    default:
      !(View && typeof View.navigate === 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'Calendar View components must implement a static `.navigate(date, action)` method.s') : invariant(false) : void 0;
      date = View.navigate(date, action, props);
  }

  return date;
}

var _jsxFileName$l = "/Users/guilherme/work/react-big-calendar/src/Toolbar.js";

class Toolbar extends React.Component {
  constructor() {
    super(...arguments);

    this.navigate = action => {
      this.props.onNavigate(action);
    };

    this.view = view => {
      this.props.onView(view);
    };
  }

  render() {
    let _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
    return React.createElement("div", {
      className: "rbc-toolbar",
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 14
      },
      __self: this
    }, React.createElement("span", {
      className: "rbc-btn-group",
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 15
      },
      __self: this
    }, React.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, navigate.TODAY),
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 16
      },
      __self: this
    }, messages.today), React.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, navigate.PREVIOUS),
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 22
      },
      __self: this
    }, messages.previous), React.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, navigate.NEXT),
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 28
      },
      __self: this
    }, messages.next)), React.createElement("span", {
      className: "rbc-toolbar-label",
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 36
      },
      __self: this
    }, label), React.createElement("span", {
      className: "rbc-btn-group",
      __source: {
        fileName: _jsxFileName$l,
        lineNumber: 38
      },
      __self: this
    }, this.viewNamesGroup(messages)));
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views;
    const view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map(name => React.createElement("button", {
        type: "button",
        key: name,
        className: cn({
          'rbc-active': view === name
        }),
        onClick: this.view.bind(null, name),
        __source: {
          fileName: _jsxFileName$l,
          lineNumber: 57
        },
        __self: this
      }, messages[name]));
    }
  }

}

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  view: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.node.isRequired,
  localizer: PropTypes.object,
  onNavigate: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired
} : {};

/**
 * Retrieve via an accessor-like property
 *
 *    accessor(obj, 'name')   // => retrieves obj['name']
 *    accessor(data, func)    // => retrieves func(data)
 *    ... otherwise null
 */
function accessor$1(data, field) {
  var value = null;
  if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && typeof data === 'object' && data != null && field in data) value = data[field];
  return value;
}
const wrapAccessor = acc => data => accessor$1(data, acc);

var _jsxFileName$m = "/Users/guilherme/work/react-big-calendar/src/Calendar.js";

function viewNames$1(_views) {
  return !Array.isArray(_views) ? Object.keys(_views) : _views;
}

function isValidView(view, _ref) {
  let _views = _ref.views;
  let names = viewNames$1(_views);
  return names.indexOf(view) !== -1;
}
/**
 * react-big-calendar is a full featured Calendar component for managing events and dates. It uses
 * modern `flexbox` for layout, making it super responsive and performant. Leaving most of the layout heavy lifting
 * to the browser. __note:__ The default styles use `height: 100%` which means your container must set an explicit
 * height (feel free to adjust the styles to suit your specific needs).
 *
 * Big Calendar is unopiniated about editing and moving events, preferring to let you implement it in a way that makes
 * the most sense to your app. It also tries not to be prescriptive about your event data structures, just tell it
 * how to find the start and end datetimes and you can pass it whatever you want.
 *
 * One thing to note is that, `react-big-calendar` treats event start/end dates as an _exclusive_ range.
 * which means that the event spans up to, but not including, the end date. In the case
 * of displaying events on whole days, end dates are rounded _up_ to the next day. So an
 * event ending on `Apr 8th 12:00:00 am` will not appear on the 8th, whereas one ending
 * on `Apr 8th 12:01:00 am` will. If you want _inclusive_ ranges consider providing a
 * function `endAccessor` that returns the end date + 1 day for those events that end at midnight.
 */


class Calendar extends React.Component {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;

    this.getViews = () => {
      const views = this.props.views;

      if (Array.isArray(views)) {
        return transform(views, (obj, name) => obj[name] = VIEWS[name], {});
      }

      if (typeof views === 'object') {
        return mapValues(views, (value, key) => {
          if (value === true) {
            return VIEWS[key];
          }

          return value;
        });
      }

      return VIEWS;
    };

    this.getView = () => {
      const views = this.getViews();
      return views[this.props.view];
    };

    this.getDrilldownView = date => {
      const _this$props = this.props,
            view = _this$props.view,
            drilldownView = _this$props.drilldownView,
            getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date, view, Object.keys(this.getViews()));
    };

    this.handleRangeChange = (date, viewComponent, view) => {
      let _this$props2 = this.props,
          onRangeChange = _this$props2.onRangeChange,
          localizer = _this$props2.localizer;

      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date, {
            localizer
          }), view);
        } else {
          process.env.NODE_ENV !== "production" ? warning(true, 'onRangeChange prop not supported for this view') : void 0;
        }
      }
    };

    this.handleNavigate = (action, newDate) => {
      let _this$props3 = this.props,
          view = _this$props3.view,
          date = _this$props3.date,
          getNow = _this$props3.getNow,
          onNavigate = _this$props3.onNavigate,
          props = _objectWithoutPropertiesLoose(_this$props3, ["view", "date", "getNow", "onNavigate"]);

      let ViewComponent = this.getView();
      let today = getNow();
      date = moveDate(ViewComponent, _extends({}, props, {
        action,
        date: newDate || date || today,
        today
      }));
      onNavigate(date, view, action);
      this.handleRangeChange(date, ViewComponent);
    };

    this.handleViewChange = view => {
      if (view !== this.props.view && isValidView(view, this.props)) {
        this.props.onView(view);
      }

      let views = this.getViews();
      this.handleRangeChange(this.props.date || this.props.getNow(), views[view], view);
    };

    this.handleSelectEvent = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      notify(_this.props.onSelectEvent, args);
    };

    this.handleDoubleClickEvent = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      notify(_this.props.onDoubleClickEvent, args);
    };

    this.handleSelectSlot = slotInfo => {
      notify(this.props.onSelectSlot, slotInfo);
    };

    this.handleDrillDown = (date, view) => {
      const onDrillDown = this.props.onDrillDown;

      if (onDrillDown) {
        onDrillDown(date, view, this.drilldownView);
        return;
      }

      if (view) this.handleViewChange(view);
      this.handleNavigate(navigate.DATE, date);
    };

    this.state = {
      context: this.getContext(this.props)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      context: this.getContext(nextProps)
    });
  }

  getContext(_ref2) {
    let startAccessor = _ref2.startAccessor,
        endAccessor = _ref2.endAccessor,
        allDayAccessor = _ref2.allDayAccessor,
        tooltipAccessor = _ref2.tooltipAccessor,
        titleAccessor = _ref2.titleAccessor,
        resourceAccessor = _ref2.resourceAccessor,
        resourceIdAccessor = _ref2.resourceIdAccessor,
        resourceTitleAccessor = _ref2.resourceTitleAccessor,
        eventPropGetter = _ref2.eventPropGetter,
        slotPropGetter = _ref2.slotPropGetter,
        dayPropGetter = _ref2.dayPropGetter,
        view = _ref2.view,
        views = _ref2.views,
        localizer = _ref2.localizer,
        culture = _ref2.culture,
        _ref2$messages = _ref2.messages,
        messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
        _ref2$components = _ref2.components,
        components = _ref2$components === void 0 ? {} : _ref2$components,
        _ref2$formats = _ref2.formats,
        formats = _ref2$formats === void 0 ? {} : _ref2$formats;
    let names = viewNames$1(views);
    const msgs = messages(messages$1);
    return {
      viewNames: names,
      localizer: mergeWithDefaults(localizer, culture, formats, msgs),
      getters: {
        eventProp: function eventProp() {
          return eventPropGetter && eventPropGetter(...arguments) || {};
        },
        slotProp: function slotProp() {
          return slotPropGetter && slotPropGetter(...arguments) || {};
        },
        dayProp: function dayProp() {
          return dayPropGetter && dayPropGetter(...arguments) || {};
        }
      },
      components: defaults(components[view] || {}, omit(components, names), {
        eventWrapper: NoopWrapper,
        eventContainerWrapper: NoopWrapper,
        dateCellWrapper: NoopWrapper,
        weekWrapper: NoopWrapper,
        timeSlotWrapper: NoopWrapper
      }),
      accessors: {
        start: wrapAccessor(startAccessor),
        end: wrapAccessor(endAccessor),
        allDay: wrapAccessor(allDayAccessor),
        tooltip: wrapAccessor(tooltipAccessor),
        title: wrapAccessor(titleAccessor),
        resource: wrapAccessor(resourceAccessor),
        resourceId: wrapAccessor(resourceIdAccessor),
        resourceTitle: wrapAccessor(resourceTitleAccessor)
      }
    };
  }

  render() {
    let _this$props4 = this.props,
        view = _this$props4.view,
        toolbar = _this$props4.toolbar,
        events = _this$props4.events,
        style = _this$props4.style,
        className = _this$props4.className,
        elementProps = _this$props4.elementProps,
        current = _this$props4.date,
        getNow = _this$props4.getNow,
        length = _this$props4.length,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        onShowMore = _this$props4.onShowMore,
        _0 = _this$props4.components,
        _1 = _this$props4.formats,
        _2 = _this$props4.messages,
        _3 = _this$props4.culture,
        props = _objectWithoutPropertiesLoose(_this$props4, ["view", "toolbar", "events", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "components", "formats", "messages", "culture"]);

    current = current || getNow();
    let View = this.getView();
    const _this$state$context = this.state.context,
          accessors = _this$state$context.accessors,
          components = _this$state$context.components,
          getters = _this$state$context.getters,
          localizer = _this$state$context.localizer,
          viewNames = _this$state$context.viewNames;
    let CalToolbar = components.toolbar || Toolbar;
    const label = View.title(current, {
      localizer,
      length
    });
    return React.createElement("div", _extends({}, elementProps, {
      className: cn(className, 'rbc-calendar', props.rtl && 'rbc-rtl'),
      style: style,
      __source: {
        fileName: _jsxFileName$m,
        lineNumber: 879
      },
      __self: this
    }), toolbar && React.createElement(CalToolbar, {
      date: current,
      view: view,
      views: viewNames,
      label: label,
      onView: this.handleViewChange,
      onNavigate: this.handleNavigate,
      localizer: localizer,
      __source: {
        fileName: _jsxFileName$m,
        lineNumber: 885
      },
      __self: this
    }), React.createElement(View, _extends({}, props, {
      events: events,
      date: current,
      getNow: getNow,
      length: length,
      localizer: localizer,
      getters: getters,
      components: components,
      accessors: accessors,
      showMultiDayTimes: showMultiDayTimes,
      getDrilldownView: this.getDrilldownView,
      onNavigate: this.handleNavigate,
      onDrillDown: this.handleDrillDown,
      onSelectEvent: this.handleSelectEvent,
      onDoubleClickEvent: this.handleDoubleClickEvent,
      onSelectSlot: this.handleSelectSlot,
      onShowMore: onShowMore,
      __source: {
        fileName: _jsxFileName$m,
        lineNumber: 895
      },
      __self: this
    })));
  }
  /**
   *
   * @param date
   * @param viewComponent
   * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
   * parameter. It appears when range change on view changing. It could be handy
   * when you need to have both: range and view type at once, i.e. for manage rbc
   * state via url
   */


}

Calendar.defaultProps = {
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views.MONTH,
  views: [views.MONTH, views.WEEK, views.DAY, views.AGENDA],
  step: 30,
  length: 30,
  drilldownView: views.DAY,
  titleAccessor: 'title',
  tooltipAccessor: 'title',
  allDayAccessor: 'allDay',
  startAccessor: 'start',
  endAccessor: 'end',
  resourceAccessor: 'resourceId',
  resourceIdAccessor: 'id',
  resourceTitleAccessor: 'title',
  longPressThreshold: 250,
  getNow: () => new Date()
};
Calendar.propTypes = process.env.NODE_ENV !== "production" ? {
  localizer: PropTypes.object.isRequired,

  /**
   * Props passed to main calendar `<div>`.
   *
   */
  elementProps: PropTypes.object,

  /**
   * The current date value of the calendar. Determines the visible view range.
   * If `date` is omitted then the result of `getNow` is used; otherwise the
   * current date is used.
   *
   * @controllable onNavigate
   */
  date: PropTypes.instanceOf(Date),

  /**
   * The current view of the calendar.
   *
   * @default 'month'
   * @controllable onView
   */
  view: PropTypes.string,

  /**
   * The initial view set for the Calendar.
   * @type Calendar.Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @default 'month'
   */
  defaultView: PropTypes.string,

  /**
   * An array of event objects to display on the calendar. Events objects
   * can be any shape, as long as the Calendar knows how to retrieve the
   * following details of the event:
   *
   *  - start time
   *  - end time
   *  - title
   *  - whether its an "all day" event or not
   *  - any resource the event may be related to
   *
   * Each of these properties can be customized or generated dynamically by
   * setting the various "accessor" props. Without any configuration the default
   * event should look like:
   *
   * ```js
   * Event {
   *   title: string,
   *   start: Date,
   *   end: Date,
   *   allDay?: boolean
   *   resource?: any,
   * }
   * ```
   */
  events: PropTypes.arrayOf(PropTypes.object),

  /**
   * Accessor for the event title, used to display event information. Should
   * resolve to a `renderable` value.
   *
   * ```js
   * string | (event: Object) => string
   * ```
   *
   * @type {(func|string)}
   */
  titleAccessor: accessor,

  /**
   * Accessor for the event tooltip. Should
   * resolve to a `renderable` value. Removes the tooltip if null.
   *
   * ```js
   * string | (event: Object) => string
   * ```
   *
   * @type {(func|string)}
   */
  tooltipAccessor: accessor,

  /**
   * Determines whether the event should be considered an "all day" event and ignore time.
   * Must resolve to a `boolean` value.
   *
   * ```js
   * string | (event: Object) => boolean
   * ```
   *
   * @type {(func|string)}
   */
  allDayAccessor: accessor,

  /**
   * The start date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  startAccessor: accessor,

  /**
   * The end date/time of the event. Must resolve to a JavaScript `Date` object.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  endAccessor: accessor,

  /**
   * Returns the id of the `resource` that the event is a member of. This
   * id should match at least one resource in the `resources` array.
   *
   * ```js
   * string | (event: Object) => Date
   * ```
   *
   * @type {(func|string)}
   */
  resourceAccessor: accessor,

  /**
   * An array of resource objects that map events to a specific resource.
   * Resource objects, like events, can be any shape or have any properties,
   * but should be uniquly identifiable via the `resourceIdAccessor`, as
   * well as a "title" or name as provided by the `resourceTitleAccessor` prop.
   */
  resources: PropTypes.arrayOf(PropTypes.object),

  /**
   * Provides a unique identifier for each resource in the `resources` array
   *
   * ```js
   * string | (resource: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  resourceIdAccessor: accessor,

  /**
   * Provides a human readable name for the resource object, used in headers.
   *
   * ```js
   * string | (resource: Object) => any
   * ```
   *
   * @type {(func|string)}
   */
  resourceTitleAccessor: accessor,

  /**
   * Determines the current date/time which is highlighted in the views.
   *
   * The value affects which day is shaded and which time is shown as
   * the current time. It also affects the date used by the Today button in
   * the toolbar.
   *
   * Providing a value here can be useful when you are implementing time zones
   * using the `startAccessor` and `endAccessor` properties.
   *
   * @type {func}
   * @default () => new Date()
   */
  getNow: PropTypes.func,

  /**
   * Callback fired when the `date` value changes.
   *
   * @controllable date
   */
  onNavigate: PropTypes.func,

  /**
   * Callback fired when the `view` value changes.
   *
   * @controllable view
   */
  onView: PropTypes.func,

  /**
   * Callback fired when date header, or the truncated events links are clicked
   *
   */
  onDrillDown: PropTypes.func,

  /**
   *
   * ```js
   * (dates: Date[] | { start: Date; end: Date }, view?: 'month'|'week'|'work_week'|'day'|'agenda') => void
   * ```
   *
   * Callback fired when the visible date range changes. Returns an Array of dates
   * or an object with start and end dates for BUILTIN views. Optionally new `view`
   * will be returned when callback called after view change.
   *
   * Custom views may return something different.
   */
  onRangeChange: PropTypes.func,

  /**
   * A callback fired when a date selection is made. Only fires when `selectable` is `true`.
   *
   * ```js
   * (
   *   slotInfo: {
   *     start: Date,
   *     end: Date,
   *     slots: Array<Date>,
   *     action: "select" | "click" | "doubleClick",
   *     bounds: ?{ // For "select" action
   *       x: number,
   *       y: number,
   *       top: number,
   *       right: number,
   *       left: number,
   *       bottom: number,
   *     },
   *     box: ?{ // For "click" or "doubleClick" actions
   *       clientX: number,
   *       clientY: number,
   *       x: number,
   *       y: number,
   *     },
   *   }
   * ) => any
   * ```
   */
  onSelectSlot: PropTypes.func,

  /**
   * Callback fired when a calendar event is selected.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => any
   * ```
   *
   * @controllable selected
   */
  onSelectEvent: PropTypes.func,

  /**
   * Callback fired when a calendar event is clicked twice.
   *
   * ```js
   * (event: Object, e: SyntheticEvent) => void
   * ```
   */
  onDoubleClickEvent: PropTypes.func,

  /**
   * Callback fired when dragging a selection in the Time views.
   *
   * Returning `false` from the handler will prevent a selection.
   *
   * ```js
   * (range: { start: Date, end: Date }) => ?boolean
   * ```
   */
  onSelecting: PropTypes.func,

  /**
   * Callback fired when a +{count} more is clicked
   *
   * ```js
   * (events: Object, date: Date) => any
   * ```
   */
  onShowMore: PropTypes.func,

  /**
   * The selected event, if any.
   */
  selected: PropTypes.object,

  /**
   * An array of built-in view names to allow the calendar to display.
   * accepts either an array of builtin view names,
   *
   * ```jsx
   * views={['month', 'day', 'agenda']}
   * ```
   * or an object hash of the view name and the component (or boolean for builtin).
   *
   * ```jsx
   * views={{
   *   month: true,
   *   week: false,
   *   myweek: WorkWeekViewComponent,
   * }}
   * ```
   *
   * Custom views can be any React component, that implements the following
   * interface:
   *
   * ```js
   * interface View {
   *   static title(date: Date, { formats: DateFormat[], culture: string?, ...props }): string
   *   static navigate(date: Date, action: 'PREV' | 'NEXT' | 'DATE'): Date
   * }
   * ```
   *
   * @type Views ('month'|'week'|'work_week'|'day'|'agenda')
   * @View
   ['month', 'week', 'day', 'agenda']
   */
  views: views$1,

  /**
   * The string name of the destination view for drill-down actions, such
   * as clicking a date header, or the truncated events links. If
   * `getDrilldownView` is also specified it will be used instead.
   *
   * Set to `null` to disable drill-down actions.
   *
   * ```js
   * <Calendar
   *   drilldownView="agenda"
   * />
   * ```
   */
  drilldownView: PropTypes.string,

  /**
   * Functionally equivalent to `drilldownView`, but accepts a function
   * that can return a view name. It's useful for customizing the drill-down
   * actions depending on the target date and triggering view.
   *
   * Return `null` to disable drill-down actions.
   *
   * ```js
   * <Calendar
   *   getDrilldownView={(targetDate, currentViewName, configuredViewNames) =>
   *     if (currentViewName === 'month' && configuredViewNames.includes('week'))
   *       return 'week'
   *
   *     return null;
   *   }}
   * />
   * ```
   */
  getDrilldownView: PropTypes.func,

  /**
   * Determines the end date from date prop in the agenda view
   * date prop + length (in number of days) = end date
   */
  length: PropTypes.number,

  /**
   * Determines whether the toolbar is displayed
   */
  toolbar: PropTypes.bool,

  /**
   * Show truncated events in an overlay when you click the "+_x_ more" link.
   */
  popup: PropTypes.bool,

  /**
   * Distance in pixels, from the edges of the viewport, the "show more" overlay should be positioned.
   *
   * ```jsx
   * <Calendar popupOffset={30}/>
   * <Calendar popupOffset={{x: 30, y: 20}}/>
   * ```
   */
  popupOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })]),

  /**
   * Allows mouse selection of ranges of dates/times.
   *
   * The 'ignoreEvents' option prevents selection code from running when a
   * drag begins over an event. Useful when you want custom event click or drag
   * logic
   */
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),

  /**
   * Specifies the number of miliseconds the user must press and hold on the screen for a touch
   * to be considered a "long press." Long presses are used for time slot selection on touch
   * devices.
   *
   * @type {number}
   * @default 250
   */
  longPressThreshold: PropTypes.number,

  /**
   * Determines the selectable time increments in week and day views
   */
  step: PropTypes.number,

  /**
   * The number of slots per "section" in the time grid views. Adjust with `step`
   * to change the default of 1 hour long groups, with 30 minute slots.
   */
  timeslots: PropTypes.number,

  /**
   *Switch the calendar to a `right-to-left` read direction.
   */
  rtl: PropTypes.bool,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the event node.
   *
   * ```js
   * (
   * 	event: Object,
   * 	start: Date,
   * 	end: Date,
   * 	isSelected: boolean
   * ) => { className?: string, style?: Object }
   * ```
   */
  eventPropGetter: PropTypes.func,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the time-slot node. Caution! Styles that change layout or
   * position may break the calendar in unexpected ways.
   *
   * ```js
   * (date: Date, resourceId: (number|string)) => { className?: string, style?: Object }
   * ```
   */
  slotPropGetter: PropTypes.func,

  /**
   * Optionally provide a function that returns an object of className or style props
   * to be applied to the the day background. Caution! Styles that change layout or
   * position may break the calendar in unexpected ways.
   *
   * ```js
   * (date: Date) => { className?: string, style?: Object }
   * ```
   */
  dayPropGetter: PropTypes.func,

  /**
   * Support to show multi-day events with specific start and end times in the
   * main time grid (rather than in the all day header).
   *
   * **Note: This may cause calendars with several events to look very busy in
   * the week and day views.**
   */
  showMultiDayTimes: PropTypes.bool,

  /**
   * Constrains the minimum _time_ of the Day and Week views.
   */
  min: PropTypes.instanceOf(Date),

  /**
   * Constrains the maximum _time_ of the Day and Week views.
   */
  max: PropTypes.instanceOf(Date),

  /**
   * Determines how far down the scroll pane is initially scrolled down.
   */
  scrollToTime: PropTypes.instanceOf(Date),

  /**
   * Specify a specific culture code for the Calendar.
   *
   * **Note: it's generally better to handle this globally via your i18n library.**
   */
  culture: PropTypes.string,

  /**
   * Localizer specific formats, tell the Calendar how to format and display dates.
   *
   * `format` types are dependent on the configured localizer; both Moment and Globalize
   * accept strings of tokens according to their own specification, such as: `'DD mm yyyy'`.
   *
   * ```jsx
   * let formats = {
   *   dateFormat: 'dd',
   *
   *   dayFormat: (date, , localizer) =>
   *     localizer.format(date, 'DDD', culture),
   *
   *   dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
   *     localizer.format(start, { date: 'short' }, culture) + ' – ' +
   *     localizer.format(end, { date: 'short' }, culture)
   * }
   *
   * <Calendar formats={formats} />
   * ```
   *
   * All localizers accept a function of
   * the form `(date: Date, culture: ?string, localizer: Localizer) -> string`
   */
  formats: PropTypes.shape({
    /**
     * Format for the day of the month heading in the Month view.
     * e.g. "01", "02", "03", etc
     */
    dateFormat,

    /**
     * A day of the week format for Week and Day headings,
     * e.g. "Wed 01/04"
     *
     */
    dayFormat: dateFormat,

    /**
     * Week day name format for the Month week day headings,
     * e.g: "Sun", "Mon", "Tue", etc
     *
     */
    weekdayFormat: dateFormat,

    /**
     * The timestamp cell formats in Week and Time views, e.g. "4:00 AM"
     */
    timeGutterFormat: dateFormat,

    /**
     * Toolbar header format for the Month view, e.g "2015 April"
     *
     */
    monthHeaderFormat: dateFormat,

    /**
     * Toolbar header format for the Week views, e.g. "Mar 29 - Apr 04"
     */
    dayRangeHeaderFormat: dateRangeFormat,

    /**
     * Toolbar header format for the Day view, e.g. "Wednesday Apr 01"
     */
    dayHeaderFormat: dateFormat,

    /**
     * Toolbar header format for the Agenda view, e.g. "4/1/2015 – 5/1/2015"
     */
    agendaHeaderFormat: dateRangeFormat,

    /**
     * A time range format for selecting time slots, e.g "8:00am – 2:00pm"
     */
    selectRangeFormat: dateRangeFormat,
    agendaDateFormat: dateFormat,
    agendaTimeFormat: dateFormat,
    agendaTimeRangeFormat: dateRangeFormat,

    /**
     * Time range displayed on events.
     */
    eventTimeRangeFormat: dateRangeFormat,

    /**
     * An optional event time range for events that continue onto another day
     */
    eventTimeRangeStartFormat: dateFormat,

    /**
     * An optional event time range for events that continue from another day
     */
    eventTimeRangeEndFormat: dateFormat
  }),

  /**
   * Customize how different sections of the calendar render by providing custom Components.
   * In particular the `Event` component can be specified for the entire calendar, or you can
   * provide an individual component for each view type.
   *
   * ```jsx
   * let components = {
   *   event: MyEvent, // used by each view (Month, Day, Week)
   *   eventWrapper: MyEventWrapper,
   *   eventContainerWrapper: MyEventContainerWrapper,
   *   dateCellWrapper: MyDateCellWrapper,
   *   timeSlotWrapper: MyTimeSlotWrapper,
   *   timeGutterHeader: MyTimeGutterWrapper,
   *   toolbar: MyToolbar,
   *   agenda: {
   *   	 event: MyAgendaEvent // with the agenda view use a different component to render events
   *     time: MyAgendaTime,
   *     date: MyAgendaDate,
   *   },
   *   day: {
   *     header: MyDayHeader,
   *     event: MyDayEvent,
   *   },
   *   week: {
   *     header: MyWeekHeader,
   *     event: MyWeekEvent,
   *   },
   *   month: {
   *     header: MyMonthHeader,
   *     dateHeader: MyMonthDateHeader,
   *     event: MyMonthEvent,
   *   }
   * }
   * <Calendar components={components} />
   * ```
   */
  components: PropTypes.shape({
    event: PropTypes.elementType,
    eventWrapper: PropTypes.elementType,
    eventContainerWrapper: PropTypes.elementType,
    dateCellWrapper: PropTypes.elementType,
    timeSlotWrapper: PropTypes.elementType,
    timeGutterHeader: PropTypes.elementType,
    resourceHeader: PropTypes.elementType,
    toolbar: PropTypes.elementType,
    agenda: PropTypes.shape({
      date: PropTypes.elementType,
      time: PropTypes.elementType,
      event: PropTypes.elementType
    }),
    day: PropTypes.shape({
      header: PropTypes.elementType,
      event: PropTypes.elementType
    }),
    week: PropTypes.shape({
      header: PropTypes.elementType,
      event: PropTypes.elementType
    }),
    month: PropTypes.shape({
      header: PropTypes.elementType,
      dateHeader: PropTypes.elementType,
      event: PropTypes.elementType
    })
  }),

  /**
   * String messages used throughout the component, override to provide localizations
   */
  messages: PropTypes.shape({
    allDay: PropTypes.node,
    previous: PropTypes.node,
    next: PropTypes.node,
    today: PropTypes.node,
    month: PropTypes.node,
    week: PropTypes.node,
    day: PropTypes.node,
    agenda: PropTypes.node,
    date: PropTypes.node,
    time: PropTypes.node,
    event: PropTypes.node,
    noEventsInRange: PropTypes.node,
    showMore: PropTypes.func
  })
} : {};
var Calendar$1 = uncontrollable(Calendar, {
  view: 'onView',
  date: 'onNavigate',
  selected: 'onSelectEvent'
});

let dateRangeFormat$1 = (_ref, culture, local) => {
  let start = _ref.start,
      end = _ref.end;
  return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
};

let timeRangeFormat = (_ref2, culture, local) => {
  let start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
};

let timeRangeStartFormat = (_ref3, culture, local) => {
  let start = _ref3.start;
  return local.format(start, 'LT', culture) + ' – ';
};

let timeRangeEndFormat = (_ref4, culture, local) => {
  let end = _ref4.end;
  return ' – ' + local.format(end, 'LT', culture);
};

let weekRangeFormat = (_ref5, culture, local) => {
  let start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMMM DD', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};

let formats = {
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat
};
function moment (moment) {
  let locale = (m, c) => c ? m.locale(c) : m;

  return new DateLocalizer({
    formats,

    firstOfWeek(culture) {
      let data = culture ? moment.localeData(culture) : moment.localeData();
      return data ? data.firstDayOfWeek() : 0;
    },

    format(value, format, culture) {
      return locale(moment(value), culture).format(format);
    }

  });
}

let dateRangeFormat$2 = (_ref, culture, local) => {
  let start = _ref.start,
      end = _ref.end;
  return local.format(start, 'd', culture) + ' – ' + local.format(end, 'd', culture);
};

let timeRangeFormat$1 = (_ref2, culture, local) => {
  let start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};

let timeRangeStartFormat$1 = (_ref3, culture, local) => {
  let start = _ref3.start;
  return local.format(start, 't', culture) + ' – ';
};

let timeRangeEndFormat$1 = (_ref4, culture, local) => {
  let end = _ref4.end;
  return ' – ' + local.format(end, 't', culture);
};

let weekRangeFormat$1 = (_ref5, culture, local) => {
  let start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

let formats$1 = {
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: 't',
  monthHeaderFormat: 'Y',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$2,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat$1
};
function oldGlobalize (globalize) {
  function getCulture(culture) {
    return culture ? globalize.findClosestCulture(culture) : globalize.culture();
  }

  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }

  return new DateLocalizer({
    firstOfWeek,
    formats: formats$1,

    format(value, format, culture) {
      return globalize.format(value, format, culture);
    }

  });
}

let dateRangeFormat$3 = (_ref, culture, local) => {
  let start = _ref.start,
      end = _ref.end;
  return local.format(start, {
    date: 'short'
  }, culture) + ' – ' + local.format(end, {
    date: 'short'
  }, culture);
};

let timeRangeFormat$2 = (_ref2, culture, local) => {
  let start = _ref2.start,
      end = _ref2.end;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};

let timeRangeStartFormat$2 = (_ref3, culture, local) => {
  let start = _ref3.start;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ';
};

let timeRangeEndFormat$2 = (_ref4, culture, local) => {
  let end = _ref4.end;
  return ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};

let weekRangeFormat$2 = (_ref5, culture, local) => {
  let start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

let formats$2 = {
  dateFormat: 'dd',
  dayFormat: 'eee dd/MM',
  weekdayFormat: 'eee',
  selectRangeFormat: timeRangeFormat$2,
  eventTimeRangeFormat: timeRangeFormat$2,
  eventTimeRangeStartFormat: timeRangeStartFormat$2,
  eventTimeRangeEndFormat: timeRangeEndFormat$2,
  timeGutterFormat: {
    time: 'short'
  },
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'eeee MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$2,
  agendaHeaderFormat: dateRangeFormat$3,
  agendaDateFormat: 'eee MMM dd',
  agendaTimeFormat: {
    time: 'short'
  },
  agendaTimeRangeFormat: timeRangeFormat$2
};
function globalize (globalize) {
  let locale = culture => culture ? globalize(culture) : globalize; // return the first day of the week from the locale data. Defaults to 'world'
  // territory if no territory is derivable from CLDR.
  // Failing to use CLDR supplemental (not loaded?), revert to the original
  // method of getting first day of week.


  function firstOfWeek(culture) {
    try {
      const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const cldr = locale(culture).cldr;
      const territory = cldr.attributes.territory;
      const weekData = cldr.get('supplemental').weekData;
      const firstDay = weekData.firstDay[territory || '001'];
      return days.indexOf(firstDay);
    } catch (e) {
      process.env.NODE_ENV !== "production" ? warning(true, "Failed to accurately determine first day of the week.\n            Is supplemental data loaded into CLDR?") : void 0; // maybe cldr supplemental is not loaded? revert to original method

      const date = new Date(); //cldr-data doesn't seem to be zero based

      let localeDay = Math.max(parseInt(locale(culture).formatDate(date, {
        raw: 'e'
      }), 10) - 1, 0);
      return Math.abs(date.getDay() - localeDay);
    }
  }

  if (!globalize.load) return oldGlobalize(globalize);
  return new DateLocalizer({
    firstOfWeek,
    formats: formats$2,

    format(value, format, culture) {
      format = typeof format === 'string' ? {
        raw: format
      } : format;
      return locale(culture).formatDate(value, format);
    }

  });
}

const components = {
  eventWrapper: NoopWrapper,
  timeSlotWrapper: NoopWrapper,
  dateCellWrapper: NoopWrapper
};

export { Calendar$1 as Calendar, DateLocalizer, navigate as Navigate, views as Views, components, globalize as globalizeLocalizer, moment as momentLocalizer, moveDate as move };
