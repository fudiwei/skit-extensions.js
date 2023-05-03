(function () {
    Object.defineProperty(Date, '$unix', {
        value: function (timestamp) {
            if (isNaN(timestamp) || Number.isNaN(timestamp)) {
                throw new TypeError(timestamp + ' is not a number');
            }

            const date = new Date();
            date.setTime(timestamp * 1000);
            return date;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$unix', {
        value: function () {
            if (!(this instanceof Date)) {
                throw new TypeError('Illegal invocation');
            }

            return parseInt(this.getTime() / 1000);
        },
        enumerable: false,
        configurable: false
    });
})();
