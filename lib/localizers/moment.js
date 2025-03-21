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
  return local.format(start, 'MMMM DD', culture) + ' – ' + local.format(end, dates.eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
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
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat
};
exports.formats = formats;

function _default(moment) {
  let locale = (m, c) => c ? m.locale(c) : m;

  return new _localizer.DateLocalizer({
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