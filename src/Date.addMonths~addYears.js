(function () {
    const _DAYS_TO_MONTH_366 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    const _DAYS_TO_MONTH_365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

    const _isLeapYear = (year = 0) => {
        if (typeof year !== 'number') throw new TypeError();
        if (year % 1 !== 0) throw new RangeError();
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    };

    Object.defineProperty(Date.prototype, '$addMonths', {
        value: function (months) {
            if (isNaN(months)) {
                throw new TypeError('The first argument must be an integer.');
            }

            if (months < -120000 || months > 120000) {
                throw new RangeError('The value of `months` must be between -120000 and 120000.');
            }

            let y = this.getFullYear(),
                m = this.getMonth() + 1,
                d = this.getDate();

            let i = m - 1 + months;
            if (i >= 0) {
                m = (i % 12) + 1;
                y = y + i / 12;
            } else {
                m = 12 + ((i + 1) % 12);
                y = y + (i - 11) / 12;
            }

            y = parseInt(y);
            m = parseInt(m);
            d = parseInt(d);

            if (y < 1 || y > 9999) {
                throw new Error('The added or subtracted value results in an un-representable Date.');
            }

            let map = _isLeapYear(y) ? _DAYS_TO_MONTH_366 : _DAYS_TO_MONTH_365;
            let days = map[m] - map[m - 1];
            if (d > days) d = days;

            this.setDate(d);
            this.setMonth(m - 1);
            this.setFullYear(y);
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addYears', {
        value: function (years) {
            if (isNaN(years)) {
                throw new TypeError('The first argument must be an integer.');
            }

            if (years < -10000 || years > 10000) {
                throw new RangeError('The value of `years` must be between -10000 and 10000.');
            }

            this.$addMonths(years * 12);
            return this;
        },
        enumerable: false,
        configurable: false
    });
})();
