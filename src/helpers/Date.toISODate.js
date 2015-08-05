if (!Date.prototype.format) {
    (function () {
        Date.prototype.format = require('./Date.format.js');
    }());
}

module.exports = function () {
    return this.format('y-M-d');
};