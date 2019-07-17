"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var dates = _interopRequireWildcard(require("./utils/dates"));

var _helpers = require("./utils/helpers");

var _selection = require("./utils/selection");

var _Selection = _interopRequireWildcard(require("./Selection"));

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/BackgroundCells.js";

class BackgroundCells extends _react.default.Component {
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
    return _react.default.createElement("div", {
      className: "rbc-row-bg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, range.map((date, index) => {
      let selected = selecting && index >= startIdx && index <= endIdx;

      const _getters$dayProp = getters.dayProp(date),
            className = _getters$dayProp.className,
            style = _getters$dayProp.style;

      return _react.default.createElement(Wrapper, {
        key: index,
        value: date,
        range: range,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, _react.default.createElement("div", {
        style: style,
        className: (0, _classnames.default)('rbc-day-bg', className, selected && 'rbc-selected-cell', dates.eq(date, current, 'day') && 'rbc-today', currentDate && dates.month(currentDate) !== dates.month(date) && 'rbc-off-range-bg'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }));
    }));
  }

  _selectable() {
    let node = (0, _reactDom.findDOMNode)(this);
    let selector = this._selector = new _Selection.default(this.props.container, {
      longPressThreshold: this.props.longPressThreshold
    });

    let selectorClicksHandler = (point, actionType) => {
      if (!(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(this), point)) {
        let rowBox = (0, _Selection.getBoundsForNode)(node);
        let _this$props2 = this.props,
            range = _this$props2.range,
            rtl = _this$props2.rtl;

        if ((0, _selection.pointInBox)(rowBox, point)) {
          let currentCell = (0, _selection.getSlotAtX)(rowBox, point.x, rtl, range.length);

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
        (0, _helpers.notify)(this.props.onSelectStart, [box]);
        this._initial = {
          x: box.x,
          y: box.y
        };
      }

      if (selector.isSelected(node)) {
        let nodeBox = (0, _Selection.getBoundsForNode)(node);

        var _dateCellSelection = (0, _selection.dateCellSelection)(this._initial, nodeBox, box, range.length, rtl);

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
      return !(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(this), box);
    });
    selector.on('click', point => selectorClicksHandler(point, 'click'));
    selector.on('doubleClick', point => selectorClicksHandler(point, 'doubleClick'));
    selector.on('select', bounds => {
      this._selectSlot((0, _extends2.default)({}, this.state, {
        action: 'select',
        bounds
      }));

      this._initial = {};
      this.setState({
        selecting: false
      });
      (0, _helpers.notify)(this.props.onSelectEnd, [this.state]);
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
  date: _propTypes.default.instanceOf(Date),
  getNow: _propTypes.default.func.isRequired,
  getters: _propTypes.default.object.isRequired,
  components: _propTypes.default.object.isRequired,
  container: _propTypes.default.func,
  dayPropGetter: _propTypes.default.func,
  selectable: _propTypes.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes.default.number,
  onSelectSlot: _propTypes.default.func.isRequired,
  onSelectEnd: _propTypes.default.func,
  onSelectStart: _propTypes.default.func,
  range: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  rtl: _propTypes.default.bool,
  type: _propTypes.default.string
} : {};
var _default = BackgroundCells;
exports.default = _default;
module.exports = exports["default"];