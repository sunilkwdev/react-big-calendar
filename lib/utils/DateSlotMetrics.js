"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getSlotMetrics = getSlotMetrics;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var dates = _interopRequireWildcard(require("./dates"));

var _eventLevels2 = require("./eventLevels");

let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot;

const isEqual = (a, b) => a.range === b.range && a.events === b.events;

function getSlotMetrics() {
  return (0, _memoizeOne.default)(options => {
    const range = options.range,
          events = options.events,
          maxRows = options.maxRows,
          minRows = options.minRows,
          accessors = options.accessors;

    let _endOfRange = (0, _eventLevels2.endOfRange)(range),
        first = _endOfRange.first,
        last = _endOfRange.last;

    let segments = events.map(evt => (0, _eventLevels2.eventSegments)(evt, range, accessors));

    let _eventLevels = (0, _eventLevels2.eventLevels)(segments, Math.max(maxRows - 1, 1)),
        levels = _eventLevels.levels,
        extra = _eventLevels.extra;

    while (levels.length < minRows) levels.push([]);

    return {
      first,
      last,
      levels,
      extra,
      range,
      slots: range.length,

      clone(args) {
        const metrics = getSlotMetrics();
        return metrics((0, _extends2.default)({}, options, args));
      },

      getDateForSlot(slotNumber) {
        return range[slotNumber];
      },

      getSlotForDate(date) {
        return range.find(r => dates.eq(r, date, 'day'));
      },

      getEventsForSlot(slot) {
        return segments.filter(seg => isSegmentInSlot(seg, slot)).map(seg => seg.event);
      },

      continuesPrior(event) {
        return dates.lt(accessors.start(event), first, 'day');
      },

      continuesAfter(event) {
        const eventEnd = accessors.end(event);
        const singleDayDuration = dates.eq(accessors.start(event), eventEnd, 'minutes');
        return singleDayDuration ? dates.gte(eventEnd, last, 'minutes') : dates.gt(eventEnd, last, 'minutes');
      }

    };
  }, isEqual);
}