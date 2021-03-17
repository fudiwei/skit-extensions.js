; (function () {
    if (Object.prototype.toString.call(Promise) !== '[object Function]') {
        // `Promise` is not supported.
        return;
    }

    Object.defineProperty(Promise, '$delay', {
        value: function (ms = 0, result) {
            return new Promise((resolve) => {
                setTimeout(() => resolve(result), ms);
            });
        },
        enumerable: false,
        configurable: false,
    });
})();
