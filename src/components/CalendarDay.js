var React = require('react');

var CalendarDay = React.createClass({
  render: function() {
      var date = this.props.date;
      var today = this.props.today;
    return (
      <a className={"day day-"+date.getDay()+(date.toString() === today.toString()?" today":"")+(date.getMonth() === today.getMonth()?" current":"")}>
        {this.props.date.getDate()}
      </a>
    );
  }
});
module.exports = React.createFactory(CalendarDay);