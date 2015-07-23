module.exports = function (pattern) {
	function pad(number) {
		if (number < 10) {
			return '0' + number;
		}
		return number;
	}
	try {
		return pattern
			.replace('y', this.getUTCFullYear())
			.replace('d', pad(this.getUTCDate()))
			.replace('MMM', ['January','February', 'Marth', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][this.getMonth()])
			.replace('MM', this.getMonth())
			.replace('M', pad(this.getUTCMonth() + 1))
	} catch (e) {
		throw Error('Date pattern "' + pattern + '" is not supported');
	}
};
