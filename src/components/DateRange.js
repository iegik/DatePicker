var React = require('react');
var DateRange = React.createClass({
	displayName: 'DateRange',
	render: function () {
		return (
		  <table className="dateRange">
			<tbody>
				<tr><td>Пн.</td><td>Вт.</td><td>Ср.</td><td>Чт.</td><td>Пт.</td><td>Сб.</td><td>Вс.</td></tr>
			</tbody>
		  </table>
		);
	}
});
module.exports = React.createFactory(DateRange);