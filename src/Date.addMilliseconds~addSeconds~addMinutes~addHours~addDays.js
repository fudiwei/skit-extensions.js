(function () {
    Object.defineProperty(Date.prototype, '$addMilliseconds', {
        value: function (milliseconds) {
            if (isNaN(milliseconds)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setMilliseconds((this.getMilliseconds() + milliseconds).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addSeconds', {
        value: function (seconds) {
            if (isNaN(seconds)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setSeconds((this.getSeconds() + seconds).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addMinutes', {
        value: function (minutes) {
            if (isNaN(minutes)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setMinutes((this.getMinutes() + minutes).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addHours', {
        value: function (hours) {
            if (isNaN(hours)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setHours((this.getHours() + hours).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addDays', {
        value: function (days) {
            if (isNaN(days)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setDate((this.getDate() + days).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });
})();
