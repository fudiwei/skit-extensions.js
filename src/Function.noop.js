(function () {
    Object.defineProperty(Function, '$noop', {
        value: function () { /* noop */ },
        enumerable: false,
        configurable: false,
        writable: false
    });
})();
