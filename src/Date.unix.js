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
                throw new TypeError('Method \'Date.prototype.$unix\' called on a non-date object');
            }

            if (arguments.length === 0) {
                return parseInt(this.getTime() / 1000);
            } else {
                const timestamp = arguments[0];
                if (isNaN(timestamp) || Number.isNaN(timestamp)) {
                    throw new TypeError(timestamp + ' is not a number');
                }

                this.setTime(timestamp * 1000);
                return this;
            }
        },
        enumerable: false,
        configurable: false
    });
})();
