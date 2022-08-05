(function () {
    Object.defineProperty(Promise, '$try', {
        value: function (fn) {
            if (typeof fn !== 'function')
                return Promise.reject(new TypeError(fn + ' is not a function'));

            const ctx = this;
            const args = arguments;
            try {
                return Promise.resolve(fn.apply(ctx, args));
            } catch (err) {
                return Promise.reject(err);
            }
        },
        enumerable: false,
        configurable: false
    });
})();
