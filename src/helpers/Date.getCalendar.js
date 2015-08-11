'use strict';

// Date.prototype.getCalendar
module.exports = function () {
    var calendar = this,
        d = new Date(this),
        i;

    d.setDate(1);
    d.setDate(d.getDate() - d.getDay());

    for (i = 0; i < 7 * 6; i = i + 1) {
        calendar[i] = new Date(d);
        d.setDate(calendar[i].getDate() + 1);
    }
};
