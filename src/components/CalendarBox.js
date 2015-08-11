'use strict';

var React = require('react');
var CalendarMonth = require('./CalendarMonth.js');

Date.prototype.getDay = require('../helpers/Date.getDay.js');
if (!Date.prototype.getCalendar) {
    (function () {
        Date.prototype.getCalendar = require('../helpers/Date.getCalendar.js');
    }());
}

var CalendarBox = React.createClass({
    render: function () {
        var ISODate = this.props.date;
        console.log(this.props.date);
        var FullYearMonthDay = ISODate.split('-');
        var calendar = new Date();
        calendar.setFullYear(FullYearMonthDay[0]);
        calendar.setMonth(FullYearMonthDay[1] - 1);
        calendar.setDate(FullYearMonthDay[2]);
        calendar.getCalendar();
        return (
            <div className="calendarBox">
                <CalendarMonth calendar={calendar} />
            </div>
        );
    }
});
module.exports = CalendarBox;
