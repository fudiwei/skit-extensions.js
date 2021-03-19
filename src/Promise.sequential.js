(function () {
    if (Object.prototype.toString.call(Promise) !== '[object Function]') {
        // `Promise` is not supported.
        return;
    }

    Object.defineProperty(Promise, '$sequential', {
        value: function (promiseFns) {
            if (!Array.isArray(promiseFns)) {
                throw new TypeError('The first argument need to be an array of Promises.');
            }

            return new Promise((resolve, reject) => {
                let count = 0;
                let results = [];
                const iterateeFunc = (previousPromise, currentPromise) => {
                    return previousPromise
                        .then((res) => {
                            if (count++ !== 0) {
                                results = results.concat(res);
                            }
                            return currentPromise(res, results, count);
                        })
                        .catch((err) => {
                            return reject(err);
                        });
                };

                promiseFns = promiseFns.concat(() => Promise.resolve());
                promiseFns.reduce(iterateeFunc, Promise.resolve(false)).then(() => resolve(results));
            });
        },
        enumerable: false,
        configurable: false
    });
})();
