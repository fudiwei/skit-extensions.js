(function () {
    Object.defineProperty(Promise, '$waitUntil', {
        value: function (keepWaiting, result, interval = 0) {
            return new Promise((resolve, reject) => {
                setTimeout(function fn () {
                    const p = keepWaiting();
                    if (typeof p?.then === 'function') {
                        p.then((t) => {
                            if (t) {
                                return resolve(result);
                            } else {
                                setTimeout(fn, interval);
                            }
                        }).catch((err) => {
                            reject(err);
                        });
                    } else if (p) {
                        return resolve(result);
                    } else {
                        setTimeout(fn, interval);
                    }
                });
            });
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Promise, '$waitWhile', {
        value: function (keepWaiting, result, interval = 0) {
            return new Promise((resolve, reject) => {
                setTimeout(function fn () {
                    const p = keepWaiting();
                    if (typeof p?.then === 'function') {
                        p.then((t) => {
                            if (!t) {
                                return resolve(result);
                            } else {
                                setTimeout(fn, interval);
                            }
                        }).catch((err) => {
                            reject(err);
                        });
                    } else if (!p) {
                        return resolve(result);
                    } else {
                        setTimeout(fn, interval);
                    }
                });
            });
        },
        enumerable: false,
        configurable: false
    });
})();
