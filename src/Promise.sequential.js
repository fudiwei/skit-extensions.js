(function () {
    Object.defineProperty(Promise, '$sequential', {
        value: function (promiseFns) {
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

                [...promiseFns, () => Promise.resolve()].reduce(iterateeFunc, Promise.resolve(false)).then(() => resolve(results));
            });
        },
        enumerable: false,
        configurable: false
    });
})();
