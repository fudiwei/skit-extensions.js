; (function () {
    Object.defineProperty(Date, '$now', {
        value: function () {
            return new Date();
        },
        enumerable: false,
        configurable: false,
    });
})();
