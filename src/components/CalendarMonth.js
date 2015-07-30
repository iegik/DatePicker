var React = require('react');
var CalendarDay = require('./CalendarDay.js')

var CalendarMonth = React.createClass({
    render: function () {
        var dayNodes = [];
        var n = 0;
        var calendar = this.props.calendar;
        for(n;!!calendar[n];++n){
            dayNodes[n] = (
                <CalendarDay date={calendar[n]} today={calendar}/>
            );
        };
        return (
            <div className="month">
                {dayNodes}
            </div>
        );
    }
});
module.exports = React.createFactory(CalendarMonth);