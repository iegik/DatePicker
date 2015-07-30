var React = require('react');
window.h = React.createElement;

var DatePicker = require('./components/DatePicker.js')
var DateRange = require('./components/DateRange.js')

// Predefined locale
var dateTimeFormat = new Intl.DateTimeFormat('lv-LV');

React.render(
	DatePicker({
		'data-date-format': 'd MMM y'
		//'data-date-format': dateTimeFormat.resolved.pattern
	}),
	document.getElementById('datePicker')
);

var CalendarBox = require('./components/CalendarBox.js')

React.render(
  <CalendarBox date={new Date()} />,
  document.getElementById('calendarBox')
);