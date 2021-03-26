(function () {
    Object.defineProperty(Date.prototype, '$addMonths', {
        value: function (months) {
            if (isNaN(months)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setMonth((this.getMonth() + months).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Date.prototype, '$addYears', {
        value: function (years) {
            if (isNaN(years)) {
                throw new TypeError('The first argument must be a number.');
            }

            this.setFullYear((this.getFullYear() + years).toFixed());
            return this;
        },
        enumerable: false,
        configurable: false
    });
})();
