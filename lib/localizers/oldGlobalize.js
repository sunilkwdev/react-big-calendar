"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = _default;
exports.formats = void 0;

var dates = _interopRequireWildcard(require("../utils/dates"));

var _localizer = require("../localizer");

let dateRangeFormat = (_ref, culture, local) => {
  let start = _ref.start,
      end = _ref.end;
  return local.format(start, 'd', culture) + ' – ' + local.format(end, 'd', culture);
};

let timeRangeFormat = (_ref2, culture, local) => {
  let start = _ref2.start,
      end = _ref2.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};

let timeRangeStartFormat = (_ref3, culture, local) => {
  let start = _ref3.start;
  return local.format(start, 't', culture) + ' – ';
};

let timeRangeEndFormat = (_ref4, culture, local) => {
  let end = _ref4.end;
  return ' – ' + local.format(end, 't', culture);
};

let weekRangeFormat = (_ref5, culture, local) => {
  let start = _ref5.start,
      end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, dates.eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};

let formats = {
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 't',
  monthHeaderFormat: 'Y',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat
};
exports.formats = formats;

function _default(globalize) {
  function getCulture(culture) {
    return culture ? globalize.findClosestCulture(culture) : globalize.culture();
  }

  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }

  return new _localizer.DateLocalizer({
    firstOfWeek,
    formats,

    format(value, format, culture) {
      return globalize.format(value, format, culture);
    }

  });
}