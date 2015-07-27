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

if(!window['Intl']){
	require('intl');
	Intl.DateTimeFormat.supportedLocalesOf('lv-LV')[0] === 'lv-LV' || require('intl/locale-data/jsonp/lv-LV.js');
	Intl.DateTimeFormat.supportedLocalesOf('ru-RU')[0] === 'ru-RU' || require('intl/locale-data/jsonp/ru-RU.js');
	Intl.NumberFormat = IntlPolyfill.NumberFormat;
	Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
} 

// Predefined locale
window.dateTimeFormat = new Intl.DateTimeFormat('lv-LV');

var DatePicker = require('./components/DatePicker.js')

React.render(
	DatePicker({
		'data-date-format': 'd MMM y'
		//'data-date-format': dateTimeFormat.resolved.pattern
	}),
	document.body
);