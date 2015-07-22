var React = require('react');

if (!Object.assign) {
	(function () {
		Object.prototype.assign = function (obj) {
			for (var x in arguments) {
				if (+x) {
					for (var y in arguments[x]) {
						obj[y] = arguments[x][y];
					}
				}
			}
			return obj;
		}
	}());
}
if (!Date.prototype.format) {
	(function () {

		function pad(number) {
			if (number < 10) {
				return '0' + number;
			}
			return number;
		}

		Date.prototype.format = function (format) {
			try {
				return format
					.replace('M', pad(this.getUTCMonth() + 1))
					.replace('y', this.getUTCFullYear())
					.replace('d', pad(this.getUTCDate()));
			} catch (e) {
				throw Error('Date format "' + format + '" is not supported');
			}
		};

	}());
}

if (!Date.prototype.toISODate) {
	(function () {

		Date.prototype.toISODate = function () {
			return this.format('y-M-d');
		};

	}());
}
var DatePicker = React.createClass({
	displayName: 'DatePicker',
	getInitialState: function () {
		var dateTimeFormat = new Intl.DateTimeFormat();
		var pattern = this.props['data-date-format'] || (dateTimeFormat.resolved && dateTimeFormat.resolved.pattern) || 'y-M-d';
		return {
			'value': (new Date()).toISODate(),
			'data-date-format': pattern,
			'data-date': (new Date()).format(pattern)
		};
	},
	handleChange: function (event) {
		this.setState({
			'data-date': (new Date(event.target.value)).format(event.target.getAttribute('data-date-format'))
		});
	},
	render: function () {
		return React.createElement('input', {
			'type': 'date',
			'value': this.state.value,
			'data-date': this.state['data-date'],
			'data-date-format': this.state['data-date-format'] || dateTimeFormat.resolved && dateTimeFormat.resolved.pattern || 'y-M-d',
			'onChange': this.handleChange
		});
	}
});

// Predefined locale
var dateTimeFormat = new Intl.DateTimeFormat('lv-LV');

React.render(
	React.createElement(DatePicker, Object.assign({}, this.props, {
		//'data-date-format': 'd M y'
		//'data-date-format': dateTimeFormat.resolved.pattern
	})),
	document.getElementById('content')
);

React.render(
	<DatePicker data-date-format={"d M y"}></DatePicker>,
	document.getElementById('content')
);