var React = require('react');
if (!Date.prototype.toISODate) {
    (function () {
        Date.prototype.toISODate = require('../helpers/Date.toISODate.js');
    }());
}

var DatePicker = React.createClass({
	displayName: 'DatePicker',
	getInitialState: function () {
		var dateTimeFormat = window['dateTimeFormat'] || window['Intl'] && new Intl.DateTimeFormat();
		var pattern = this.props['data-date-format'] || (dateTimeFormat && dateTimeFormat.resolved.pattern) || 'y-M-d';
		return {
			'value': (new Date()).toISODate(),
			'data-date-format': pattern,
			'data-date': (new Date()).format(pattern)
		};
	},
	handleChange: function (event) {
		var data_date = (new Date(event.target.value)).format(event.target.getAttribute('data-date-format'));
		this.setState({
			'data-date': data_date,
			'style': {width:data_date.length+'ex'}
		});
	},
	render: function () {
		return React.createElement('input', {
			'type': 'date',
			'value': this.state.value,
			'data-date': this.state['data-date'],
			'data-date-format': this.state['data-date-format'],
			'onChange': this.handleChange
		});
	}
});

module.exports = DatePicker;

/*
React.render(
	React.createElement(DatePicker, Object.assign({}, this.props, {
		'data-date-format': 'd MMM y'
		//'data-date-format': dateTimeFormat.resolved.pattern
	})),
	document.body
);
*/