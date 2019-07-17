"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = messages;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

let defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: total => "+" + total + " more"
};

function messages(msgs) {
  return (0, _extends2.default)({}, defaultMessages, msgs);
}

module.exports = exports["default"];