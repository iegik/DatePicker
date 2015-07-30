var React = require('react');
var CalendarMonth = require('./CalendarMonth.js')

Date.prototype.getDay = require('../helpers/Date.getDay.js');
if (!Date.prototype.getCalendar) {
    (function () {
        Date.prototype.getCalendar = require('../helpers/Date.getCalendar.js');
    }());
}

var CalendarBox = React.createClass({
    render: function () {
        var calendar = this.props.date;
        calendar.getCalendar();
        return (
            <div className="calendarBox">
                <CalendarMonth calendar={calendar}/>
            </div>
        );
    }
});
module.exports = React.createFactory(CalendarBox);