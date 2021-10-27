(function () {
    Object.defineProperty(Function, '$throttle', {
        value: function (fn, wait) {
            if (typeof fn !== 'function') throw new TypeError('The first argument need to be a function');

            wait = +wait || 0;
            if (!(wait >= 0)) throw new RangeError('The value of `wait` must be greater than zero.');

            let timer = null,
                remaining = 0,
                previous = new Date();

            return function () {
                let now = new Date();
                remaining = now - previous;

                const ctx = this;
                const args = arguments;

                if (remaining >= wait) {
                    if (!!timer) {
                        clearTimeout(timer);
                    }

                    fn.apply(ctx, args);
                    previous = now;
                } else {
                    if (!timer) {
                        timer = setTimeout(function () {
                            fn.apply(ctx, args);
                            previous = new Date();
                        }, wait - remaining);
                    }
                }
            };
        },
        enumerable: false,
        configurable: false
    });
})();
