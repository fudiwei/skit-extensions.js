(function () {
    Object.defineProperty(Date.prototype, '$addMilliseconds', {
        value: function (milliseconds) {
            if (isNaN(milliseconds)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setMilliseconds(this.getMilliseconds() + milliseconds);
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addSeconds', {
        value: function (seconds) {
            return this.$addMilliseconds(seconds * 1000);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addMinutes', {
        value: function (minutes) {
            return this.$addSeconds(minutes * 60);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addHours', {
        value: function (hours) {
            return this.$addMinutes(hours * 60);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addDays', {
        value: function (days) {
            return this.$addHours(days * 24);
        },
        enumerable: false,
        configurable: false
    });
})();
