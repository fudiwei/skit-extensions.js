; (function () {
    Object.defineProperty(Date.prototype, '$unix', {
        value: function (ts) {
            if (ts === undefined) {
                return parseInt(this.getTime() / 1000);
            } else {
                if (isNaN(ts)) {
                    throw new TypeError('Unix timestamp must be a number.');
                }

                this.setTime(ts * 1000);
                return this;
            }
        },
        enumerable: false,
        configurable: false,
    });
})();
