(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(Promise)) {
        return;
    }

    if (!isFunction(Promise.delay)) {
        Object.defineProperty(Promise, 'delay', {
            value: function (ms = 0, value) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(value);
                    }, ms);
                });
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Promise.sequential)) {
        Object.defineProperty(Promise, 'sequential', {
            value: function (promises) {
                if (!Array.isArray(promises)) {
                    throw new Error('The first argument need to be an array of Promises.');
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

                    promises = promises.concat(() => Promise.resolve());
                    // eslint-disable-next-line promise/catch-or-return
                    promises.reduce(iterateeFunc, Promise.resolve(false)).then(() => resolve(results));
                });
            },
            enumerable: false,
            configurable: false,
        });
    }
})();
