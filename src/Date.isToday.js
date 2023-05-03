(function () {
    Object.defineProperty(Date.prototype, '$isToday', {
        value: function () {
            if (!(this instanceof Date)) {
                throw new TypeError('Illegal invocation');
            }

            const now = new Date();
            return this.getFullYear() === now.getFullYear() && this.getMonth() === now.getMonth() && this.getDate() === now.getDate();
        },
        enumerable: false,
        configurable: false
    });
})();
