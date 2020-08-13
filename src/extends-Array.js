(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(Array.prototype.distinct)) {
        Object.defineProperty(Array.prototype, 'distinct', {
            value: function (comparerFn) {
                if (comparerFn === undefined) {
                    comparerFn = (x, y) => x === y;
                }
                if (!isFunction(comparerFn)) {
                    throw new Error('The first argument need to be a function');
                }

                const result = [];
                this.forEach((e) => {
                    if (!result.some((r) => comparerFn(e, r))) {
                        result.push(e);
                    }
                });

                return result;
            },
            enumerable: false,
            configurable: false,
        });
    }
})();
