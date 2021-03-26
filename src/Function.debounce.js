(function () {
    Object.defineProperty(Function, '$debounce', {
        value: function (fn, wait) {
            if (typeof fn !== 'function') throw new TypeError('The first argument need to be a function');

            wait = +wait || 0;
            if (!(wait >= 0)) throw new RangeError('The value of `wait` must be greater than zero.');

            let timer = null;
            return function () {
                const ctx = this;
                const args = arguments;

                if (!!timer) {
                    clearTimeout(timer);

                    timer = setTimeout(function () {
                        fn.apply(ctx, args);
                    }, wait);
                } else {
                    timer = setTimeout(function () {
                        fn.apply(ctx, args);
                    }, wait);
                }
            };
        },
        enumerable: false,
        configurable: false
    });
})();
