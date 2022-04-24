(function () {
    Object.defineProperty(Function, '$throttle', {
        value: function (fn, wait) {
            if (typeof fn !== 'function')
                throw new TypeError(fn + ' is not a function');

            if (isNaN(wait) || Number.isNaN(wait)) {
                throw new TypeError(wait + ' is not a number');
            } else if (+wait < 0) {
                throw new RangeError('The first argument must be greater than 0');
            }

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
