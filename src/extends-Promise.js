(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(Promise)) {
        return;
    }

    if (!isFunction(Promise.delay)) {
        Promise.delay = function(ms = 0, value) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(value);
                }, ms);
            });
        };
    }

    if (!isFunction(Promise.sequential)) {
        Promise.sequential = function(promises) {
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
                }

                promises = promises.concat(() => Promise.resolve());
                promises.reduce(
                    iterateeFunc,
                    Promise.resolve(false)
                ).then(() => {
                    resolve(results);
                });
            });
        };
    }
})();