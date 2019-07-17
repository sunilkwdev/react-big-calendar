"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var TimeSlotUtils = _interopRequireWildcard(require("./utils/TimeSlots"));

var _TimeSlotGroup = _interopRequireDefault(require("./TimeSlotGroup"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/TimeGutter.js";

class TimeGutter extends _react.Component {
  constructor() {
    super(...arguments);

    this.renderSlot = (value, idx) => {
      if (idx !== 0) return null;
      const _this$props = this.props,
            localizer = _this$props.localizer,
            getNow = _this$props.getNow;
      const isNow = this.slotMetrics.dateIsInGroup(getNow(), idx);
      return _react.default.createElement("span", {
        className: (0, _classnames.default)('rbc-label', isNow && 'rbc-now'),
        __source: {
          fileName: _jsxFileName,
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
    this.slotMetrics = TimeSlotUtils.getSlotMetrics({
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
    return _react.default.createElement("div", {
      className: "rbc-time-gutter rbc-time-column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.slotMetrics.groups.map((grp, idx) => {
      return _react.default.createElement(_TimeSlotGroup.default, {
        key: idx,
        group: grp,
        resource: resource,
        components: components,
        renderSlot: this.renderSlot,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      });
    }));
  }

}

exports.default = TimeGutter;
TimeGutter.propTypes = process.env.NODE_ENV !== "production" ? {
  min: _propTypes.default.instanceOf(Date).isRequired,
  max: _propTypes.default.instanceOf(Date).isRequired,
  timeslots: _propTypes.default.number.isRequired,
  step: _propTypes.default.number.isRequired,
  getNow: _propTypes.default.func.isRequired,
  components: _propTypes.default.object.isRequired,
  localizer: _propTypes.default.object.isRequired,
  resource: _propTypes.default.string
} : {};
module.exports = exports["default"];