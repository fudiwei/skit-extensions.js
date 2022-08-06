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
                previous = new Date(),
                rejectQueue = [];

            return function () {
                let now = new Date();
                remaining = now - previous;

                const ctx = this;
                const args = arguments;

                return new Promise((resolve, reject) => {
                    if (remaining >= wait) {
                        previous = now;
                        rejectQueue.length = 0;
                        resolve(fn.apply(ctx, args));
                    } else {
                        if (!!timer) {
                            timer = clearTimeout(timer), null;

                            let r;
                            while (r = rejectQueue.shift()) {
                                r(new Error('Operation is canceled.'));
                            }
                        }

                        timer = setTimeout(function () {
                            previous = new Date();
                            rejectQueue.length = 0;
                            resolve(fn.apply(ctx, args));
                        }, wait - remaining);

                        rejectQueue.push(reject);
                    }
                });
            };
        },
        enumerable: false,
        configurable: false
    });
})();
