(function () {
    if (Object.prototype.toString.call(Promise) !== '[object Function]') {
        // `Promise` is not supported.
        return;
    }

    Object.defineProperty(Promise, '$delay', {
        value: function (wait = 0, result) {
            return new Promise((resolve) => {
                setTimeout(() => resolve(result), wait);
            });
        },
        enumerable: false,
        configurable: false
    });
})();
