(function () {
    Object.defineProperty(String.prototype, '$toSnakeCase', {
        value: function () {
            return String(this)
                .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
                .replace(/([a-z])([A-Z])/g, (_, a, b) => a + '_' + b.toLowerCase())
                .replace(/[^A-Za-z0-9]+|_+/g, '_')
                .toLowerCase();
        },
        enumerable: false,
        configurable: false
    });
})();
