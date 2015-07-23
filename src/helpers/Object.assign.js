module.exports = function (obj) {
	var x, y, args = arguments;
	for (x in args) {
		if (+x) {
			for (y in args[x]) {
				obj[y] = args[x][y];
			}
		}
	}
	return obj;
};