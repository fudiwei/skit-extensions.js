(function () {
    Object.defineProperty(Function, '$debounce', {
        value: function (fn, wait) {
            if (typeof fn !== 'function')
                throw new TypeError(fn + ' is not a function');

            if (isNaN(wait) || Number.isNaN(wait)) {
                throw new TypeError(wait + ' is not a number');
            } else if (+wait < 0) {
                throw new RangeError('The first argument must be greater than 0');
            }

            let timer = null,
                rejectQueue = [];
            return function () {
                const ctx = this;
                const args = arguments;

                return new Promise((resolve, reject) => {
                    if (!!timer) {
                        timer = clearTimeout(timer), null;

                        let r;
                        while (r = rejectQueue.shift()) {
                            r(new Error('Operation is canceled.'));
                        }
                    }

                    timer = setTimeout(function () {
                        rejectQueue.length = 0;
                        resolve(fn.apply(ctx, args));
                    }, wait);

                    rejectQueue.push(reject);
                });
            };
        },
        enumerable: false,
        configurable: false
    });
})();
