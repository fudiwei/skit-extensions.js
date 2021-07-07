(function () {
    Object.defineProperty(String.prototype, '$toCamelCase', {
        value: function () {
            return String(this)
                .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '')
                .replace(/[^A-Za-z0-9]+/g, '$')
                .replace(/([a-z])([A-Z])/g, (_, a, b) => a + '$' + b)
                .toLowerCase()
                .replace(/(\$)(\w)/g, (_, a, b) => b.toUpperCase());
        },
        enumerable: false,
        configurable: false
    });
})();
