(function () {
    Object.defineProperty(String.prototype, '$reverse', {
        value: function () {
            return Array.from(this).reverse().join('');
        },
        enumerable: false,
        configurable: false
    });
})();
