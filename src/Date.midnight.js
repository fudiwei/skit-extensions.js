(function () {
    Object.defineProperty(Date.prototype, '$midnight', {
        value: function () {
            if (!(this instanceof Date)) {
                throw new TypeError('Method \'Date.prototype.$midnight\' called on incompatible receiver ' + this);
            }

            const date = new Date(this);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);
            date.setMilliseconds(0);
            return date;
        },
        enumerable: false,
        configurable: false
    });
})();
