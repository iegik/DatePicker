module.exports = (function (getDay){
    return function(){
        var dateTimeFormat = window['dateTimeFormat'] || (window['Intl'] && new Intl.DateTimeFormat());
        if(dateTimeFormat && dateTimeFormat['resolvedOptions'] && dateTimeFormat.resolvedOptions().calendar === 'gregory'){
            return (getDay.call(this)?getDay.call(this):7) - 1
        }
        return getDay.call(this);
    }
})(Date.prototype.getDay);
