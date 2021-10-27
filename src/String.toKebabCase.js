(function () {
    Object.defineProperty(String.prototype, '$toKebabCase', {
        value: function () {
            return String(this)
                .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
                .replace(/([a-z])([A-Z])/g, (_, a, b) => a + '-' + b.toLowerCase())
                .replace(/[^A-Za-z0-9]+|_+/g, '-')
                .toLowerCase();
        },
        enumerable: false,
        configurable: false
    });
})();
