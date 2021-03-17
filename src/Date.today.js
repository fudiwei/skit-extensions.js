; (function () {
    Object.defineProperty(Date, '$today', {
        value: function () {
            const date = new Date();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        },
        enumerable: false,
        configurable: false,
    });
})();
