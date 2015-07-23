var React = require('react');

if (!Object.assign) {
	(function () {
		Object.prototype.assign = require('./helpers/Object.assign.js');
	}());
}
if (!Date.prototype.format) {
	(function () {
		Date.prototype.format = require('./helpers/Date.format.js');
	}());
}

if (!Date.prototype.toISODate) {
	(function () {

		Date.prototype.toISODate = function () {
			return this.format('y-M-d');
		};

	}());
}
var DatePicker = require('./components/DatePicker.js')

// Predefined locale
var dateTimeFormat = new Intl.DateTimeFormat('lv-LV');

React.render(
	DatePicker({
		'data-date-format': 'd MMM y'
		//'data-date-format': dateTimeFormat.resolved.pattern
	}),
	document.body
);