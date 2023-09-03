(function () {
    Object.defineProperty(Date.prototype, '$isWeekend', {
        value: function () {
            if (!(this instanceof Date)) {
                throw new TypeError('Illegal invocation');
            }

            const r = this.getDay() % 7;
            return r === 0 || r === 6;
        },
        enumerable: false,
        configurable: false
    });
})();
