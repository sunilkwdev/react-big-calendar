"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _EventRowMixin = _interopRequireDefault(require("./EventRowMixin"));

var _eventLevels = require("./utils/eventLevels");

var _range = _interopRequireDefault(require("lodash/range"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/EventEndingRow.js";

let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot;

let eventsInSlot = (segments, slot) => segments.filter(seg => isSegmentInSlot(seg, slot)).length;

class EventEndingRow extends _react.default.Component {
  render() {
    let _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots;
    let rowSegments = (0, _eventLevels.eventLevels)(segments).levels[0];
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
        let content = _EventRowMixin.default.renderEvent(this.props, event);

        if (gap) {
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(_EventRowMixin.default.renderSpan(slots, span, key, content));
        lastEnd = current = right + 1;
      } else {
        if (gap) {
          row.push(_EventRowMixin.default.renderSpan(slots, gap, key + '_gap'));
        }

        row.push(_EventRowMixin.default.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
        lastEnd = current = current + 1;
      }
    }

    return _react.default.createElement("div", {
      className: "rbc-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, row);
  }

  canRenderSlotEvent(slot, span) {
    let segments = this.props.segments;
    return (0, _range.default)(slot, slot + span).every(s => {
      let count = eventsInSlot(segments, s);
      return count === 1;
    });
  }

  renderShowMore(segments, slot) {
    let localizer = this.props.localizer;
    let count = eventsInSlot(segments, slot);
    return count ? _react.default.createElement("a", {
      key: 'sm_' + slot,
      href: "#",
      className: 'rbc-show-more',
      onClick: e => this.showMore(slot, e),
      __source: {
        fileName: _jsxFileName,
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

EventEndingRow.propTypes = process.env.NODE_ENV !== "production" ? (0, _extends2.default)({
  segments: _propTypes.default.array,
  slots: _propTypes.default.number,
  onShowMore: _propTypes.default.func
}, _EventRowMixin.default.propTypes) : {};
EventEndingRow.defaultProps = (0, _extends2.default)({}, _EventRowMixin.default.defaultProps);
var _default = EventEndingRow;
exports.default = _default;
module.exports = exports["default"];