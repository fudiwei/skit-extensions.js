(function () {
    const _DAYS_TO_MONTH_366 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    const _DAYS_TO_MONTH_365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

    const _isLeapYear = (year) => {
        if (year % 1 !== 0) throw new TypeError();
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    };

    const _guardCheckType = (target, method) => {
        if (!(target instanceof Date)) {
            throw new TypeError('Method \'' + method + '\' called on incompatible receiver ' + target);
        }
    };

    Object.defineProperty(Date.prototype, '$addMilliseconds', {
        value: function (milliseconds) {
            _guardCheckType(this, 'Date.prototype.$addMilliseconds');

            if (isNaN(milliseconds) || Number.isNaN(milliseconds)) {
                throw new TypeError(milliseconds + ' is not a number');
            }

            const date = new Date(this.getTime());
            date.setMilliseconds(this.getMilliseconds() + milliseconds);
            return date;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addSeconds', {
        value: function (seconds) {
            _guardCheckType(this, 'Date.prototype.$addSeconds');
            return Date.prototype.$addMilliseconds.call(this, seconds * 1000);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addMinutes', {
        value: function (minutes) {
            _guardCheckType(this, 'Date.prototype.$addMinutes');
            return Date.prototype.$addSeconds.call(this, minutes * 60);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addHours', {
        value: function (hours) {
            _guardCheckType(this, 'Date.prototype.$addHours');
            return Date.prototype.$addMinutes.call(this, hours * 60);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addDays', {
        value: function (days) {
            _guardCheckType(this, 'Date.prototype.$addDays');
            return Date.prototype.$addHours.call(this, days * 24);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addMonths', {
        value: function (months) {
            _guardCheckType(this, 'Date.prototype.$addMonths');

            if (isNaN(months) || Number.isNaN(months)) {
                throw new TypeError(months + ' is not a number');
            } else if (months < -120000 || months > 120000) {
                throw new RangeError('The first argument must must be between -120000 and 120000');
            }

            let y, m, d;
            y = this.getFullYear();
            m = this.getMonth() + 1 + +(+months).toFixed();
            d = this.getDate();

            let q = parseInt(m > 0 ? (m - 1) / 12 : m / 12 - 1);
            y += q;
            m -= q * 12;

            if (y < 1 || y > 9999) {
                throw new Error('The added or subtracted value results in an un-representable Date');
            }

            const map = _isLeapYear(y) ? _DAYS_TO_MONTH_366 : _DAYS_TO_MONTH_365;
            let days = map[m] - map[m - 1];
            if (d > days) d = days;

            const date = new Date(this.getTime());
            date.setDate(d);
            date.setMonth(m - 1);
            date.setFullYear(y);
            return date;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addYears', {
        value: function (years) {
            _guardCheckType(this, 'Date.prototype.$addYears');

            if (isNaN(years) || Number.isNaN(years)) {
                throw new TypeError(years + ' is not a number');
            } else if (years < -10000 || years > 10000) {
                throw new RangeError('The first argument must must be between -10000 and 10000');
            }

            let y = this.getFullYear();
            let m = this.getMonth();
            let d = this.getDate();

            if (_isLeapYear(y)) {
                if (d == 29 && m == 1) d--;
            }

            y = y + +(+years).toFixed();

            const date = new Date(this.getTime());
            date.setFullYear(y);
            date.setMonth(m);
            date.setDate(d);
            return date;
        },
        enumerable: false,
        configurable: false
    });
})();
