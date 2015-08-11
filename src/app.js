'use strict';
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
        CalendarStore.addChangeListener(this.changeListener);
    },

    componentWillUnmount: function () {
        CalendarStore.removeChangeListener(this.changeListener);
    },

    /**
     * @return {object}
     */
    render: function () {
        return (
            /*jshint ignore:start */
            <div>
                <DatePicker data-date-format="d MMM y" value={this.state.date} />
                <CalendarBox date={this.state.date} />
            </div>
            /*jshint ignore:end */
        );
    },

    changeListener: function () {
        this.setState(getCalendarState());
    }

});

module.exports = CalendarApp;
