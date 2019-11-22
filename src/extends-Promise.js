(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(Promise)) {
        return;
    }

    if (!isFunction(Promise.delay)) {
        /**
         * 返回一个延迟一段时间后成功的 Promise 对象。
         * @param {Number} ms 要延迟的时间（单位：毫秒）。
         * @param {Object} [value] Promise 的返回值。
         * @returns {Promise}
         */
        Promise.delay = function(ms = 0, value) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(value);
                }, ms);
            });
        };
    }

    if (!isFunction(Promise.sequential)) {
        /**
         * 顺序执行多个 Promise。
         * @param {Array} promises 待执行的 Promise 数组（需以函数形式包裹、函数的返回值是 Promise）。
         * @returns {Promise}
         */
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