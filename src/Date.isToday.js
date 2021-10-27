(function () {
    Object.defineProperty(Date.prototype, '$isToday', {
        value: function () {
            const now = new Date();
            return this.getFullYear() === now.getFullYear() && this.getMonth() === now.getMonth() && this.getDate() === now.getDate();
        },
        enumerable: false,
        configurable: false
    });
})();
