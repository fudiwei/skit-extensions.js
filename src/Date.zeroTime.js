(function () {
    Object.defineProperty(Date.prototype, '$zeroTime', {
        value: function () {
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
