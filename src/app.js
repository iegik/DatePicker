//var Footer = require('./Footer.react');
//var Header = require('./Header.react');
//var MainSection = require('./MainSection.react');
var React = require('react');
var CalendarStore = require('./stores/CalendarStore');
var DatePicker = React.createFactory(require('./components/DatePicker'));
var CalendarBox = React.createFactory(require('./components/CalendarBox'));

function getCalendarState() {
    return {
        date: CalendarStore.getDate()
    };
}

var CalendarApp = React.createClass({

    getInitialState: function () {
        return getCalendarState();
    },

    componentDidMount: function () {
        CalendarStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CalendarStore.removeChangeListener(this._onChange);
    },

    /**
     * @return {object}
     */
    render: function () {
        return (
            <div>
                <DatePicker data-date-format="d MMM y" value={this.state.date} />
                <CalendarBox date={this.state.date} />
            </div>
        );
    },

    _onChange: function () {
        this.setState(getCalendarState());
    }

});

module.exports = CalendarApp;