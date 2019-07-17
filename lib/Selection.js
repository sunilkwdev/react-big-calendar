"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getEventNodeFromPoint = getEventNodeFromPoint;
exports.isEvent = isEvent;
exports.objectsCollide = objectsCollide;
exports.getBoundsForNode = getBoundsForNode;
exports.default = void 0;

var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));

var _closest = _interopRequireDefault(require("dom-helpers/query/closest"));

var _events = _interopRequireDefault(require("dom-helpers/events"));

function addEventListener(type, handler, target) {
  if (target === void 0) {
    target = document;
  }

  _events.default.on(target, type, handler, {
    passive: false
  });

  return {
    remove() {
      _events.default.off(target, type, handler);
    }

  };
}

function isOverContainer(container, x, y) {
  return !container || (0, _contains.default)(container, document.elementFromPoint(x, y));
}

function getEventNodeFromPoint(node, _ref) {
  let clientX = _ref.clientX,
      clientY = _ref.clientY;
  let target = document.elementFromPoint(clientX, clientY);
  return (0, _closest.default)(target, '.rbc-event', node);
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

    if (!this.globalMouse && node && !(0, _contains.default)(node, e.target)) {
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
    let inRoot = !this.container || (0, _contains.default)(this.container(), e.target);
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

var _default = Selection;
exports.default = _default;