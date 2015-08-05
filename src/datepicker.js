var React = require('react');
window.h = React.createElement;

var DatePicker = React.createFactory(require('./components/DatePicker'));
var DateRange = React.createFactory(require('./components/DateRange'));

// Predefined locale
window.dateTimeFormat = new Intl.DateTimeFormat('lv-LV');

var DatePicker = React.createFactory(require('./components/DatePicker'));

React.render(
	DatePicker({
		'data-date-format': 'd MMM y'
		//'data-date-format': dateTimeFormat.resolved.pattern
	}),
	document.getElementById('datePicker')
);

var CalendarBox = React.createFactory(require('./components/CalendarBox'));

React.render(
  <CalendarBox date={new Date()} />,
  document.getElementById('calendarBox')
);