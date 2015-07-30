// Date.prototype.getCalendar
module.exports = function(){
    var calendar = this;
    var d = new Date(this);
  
    d.setDate(1);
    d.setDate(d.getDate() - d.getDay());

    var i;
    for (i = 0; i < 7 * 6; i++){
        calendar[i] = new Date(d);
        d.setDate(calendar[i].getDate()+1);
    }
}