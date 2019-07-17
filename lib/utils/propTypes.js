"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.views = exports.dateRangeFormat = exports.dateFormat = exports.accessor = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./constants");

let viewNames = Object.keys(_constants.views).map(k => _constants.views[k]);

let accessor = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]);

exports.accessor = accessor;
let dateFormat = _propTypes.default.any;
exports.dateFormat = dateFormat;
let dateRangeFormat = _propTypes.default.func;
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

exports.dateRangeFormat = dateRangeFormat;

let views = _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(viewNames)), _propTypes.default.objectOf(function (prop, key) {
  let isBuiltinView = viewNames.indexOf(key) !== -1 && typeof prop[key] === 'boolean';

  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    return _propTypes.default.elementType(prop, key, ...args);
  }
})]);

exports.views = views;