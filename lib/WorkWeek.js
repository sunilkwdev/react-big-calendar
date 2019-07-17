"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Week = _interopRequireDefault(require("./Week"));

var _TimeGrid = _interopRequireDefault(require("./TimeGrid"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/WorkWeek.js";

function workWeekRange(date, options) {
  return _Week.default.range(date, options).filter(d => [6, 0].indexOf(d.getDay()) === -1);
}

class WorkWeek extends _react.default.Component {
  render() {
    let _this$props = this.props,
        date = _this$props.date,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["date"]);
    let range = workWeekRange(date, this.props);
    return _react.default.createElement(_TimeGrid.default, (0, _extends2.default)({}, props, {
      range: range,
      eventOffset: 15,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  }

}

WorkWeek.propTypes = process.env.NODE_ENV !== "production" ? {
  date: _propTypes.default.instanceOf(Date).isRequired
} : {};
WorkWeek.defaultProps = _TimeGrid.default.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = _Week.default.navigate;

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

var _default = WorkWeek;
exports.default = _default;
module.exports = exports["default"];