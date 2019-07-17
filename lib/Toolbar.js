"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("./utils/constants");

var _jsxFileName = "/Users/guilherme/work/react-big-calendar/src/Toolbar.js";

class Toolbar extends _react.default.Component {
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
    return _react.default.createElement("div", {
      className: "rbc-toolbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, _react.default.createElement("span", {
      className: "rbc-btn-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, _react.default.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.TODAY),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, messages.today), _react.default.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, messages.previous), _react.default.createElement("button", {
      type: "button",
      onClick: this.navigate.bind(null, _constants.navigate.NEXT),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, messages.next)), _react.default.createElement("span", {
      className: "rbc-toolbar-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, label), _react.default.createElement("span", {
      className: "rbc-btn-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, this.viewNamesGroup(messages)));
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views;
    const view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map(name => _react.default.createElement("button", {
        type: "button",
        key: name,
        className: (0, _classnames.default)({
          'rbc-active': view === name
        }),
        onClick: this.view.bind(null, name),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, messages[name]));
    }
  }

}

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  view: _propTypes.default.string.isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  label: _propTypes.default.node.isRequired,
  localizer: _propTypes.default.object,
  onNavigate: _propTypes.default.func.isRequired,
  onView: _propTypes.default.func.isRequired
} : {};
var _default = Toolbar;
exports.default = _default;
module.exports = exports["default"];