"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _offset = _interopRequireDefault(require("dom-helpers/query/offset"));

var _scrollTop = _interopRequireDefault(require("dom-helpers/query/scrollTop"));

var _scrollLeft = _interopRequireDefault(require("dom-helpers/query/scrollLeft"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _EventCell = _interopRequireDefault(require("./EventCell"));

var _selection = require("./utils/selection");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/Popup.js";

class Popup extends _react.default.Component {
  componentDidMount() {
    let _this$props = this.props,
        _this$props$popupOffs = _this$props.popupOffset,
        popupOffset = _this$props$popupOffs === void 0 ? 5 : _this$props$popupOffs,
        popperRef = _this$props.popperRef,
        _getOffset = (0, _offset.default)(popperRef.current),
        top = _getOffset.top,
        left = _getOffset.left,
        width = _getOffset.width,
        height = _getOffset.height,
        viewBottom = window.innerHeight + (0, _scrollTop.default)(window),
        viewRight = window.innerWidth + (0, _scrollLeft.default)(window),
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
    return _react.default.createElement("div", {
      style: style,
      className: "rbc-overlay",
      ref: popperRef,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, _react.default.createElement("div", {
      className: "rbc-overlay-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, localizer.format(slotStart, 'dayHeaderFormat')), events.map((event, idx) => _react.default.createElement(_EventCell.default, {
      key: idx,
      type: "popup",
      event: event,
      getters: getters,
      onSelect: onSelect,
      accessors: accessors,
      components: components,
      onDoubleClick: onDoubleClick,
      continuesPrior: dates.lt(accessors.end(event), slotStart, 'day'),
      continuesAfter: dates.gte(accessors.start(event), slotEnd, 'day'),
      slotStart: slotStart,
      slotEnd: slotEnd,
      selected: (0, _selection.isSelected)(event, selected),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })));
  }

}

Popup.propTypes = process.env.NODE_ENV !== "production" ? {
  position: _propTypes.default.object,
  popupOffset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })]),
  events: _propTypes.default.array,
  selected: _propTypes.default.object,
  accessors: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  getters: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  onSelect: _propTypes.default.func,
  onDoubleClick: _propTypes.default.func,
  slotStart: _propTypes.default.instanceOf(Date),
  slotEnd: _propTypes.default.number,
  popperRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.Element
  })])
  /**
   * The Overlay component, of react-overlays, creates a ref that is passed to the Popup, and
   * requires proper ref forwarding to be used without error
   */

} : {};

var _default = _react.default.forwardRef((props, ref) => _react.default.createElement(Popup, (0, _extends2.default)({
  popperRef: ref
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: void 0
})));

exports.default = _default;
module.exports = exports["default"];