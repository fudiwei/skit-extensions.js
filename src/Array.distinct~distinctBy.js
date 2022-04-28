(function () {
    Object.defineProperty(Array.prototype, '$distinct', {
        value: function (comparerFn, thisArg) {
            if (comparerFn == null) {
                comparerFn = (a, b) => Object.is(a, b);
            } else if (typeof comparerFn !== 'function') {
                throw new TypeError(comparerFn + ' is not a function');
            }

            return Array.prototype.reduce.call(Object(this), (acc, cur) => {
                if (!acc.some((e) => comparerFn.call(thisArg, cur, e))) {
                    acc.push(cur);
                }
                return acc;
            }, []);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$distinctBy', {
        value: function (selector, thisArg) {
            if (selector == null)
                return [...new Set(this)];

            const O = Object(this);
            const len = O.length >>> 0;

            const map = new Map();
            for (let k = 0; k < len; k++) {
                const kVal = O[k];
                const kKey = typeof selector === 'function'
                    ? selector.call(thisArg, kVal, k, O)
                    : kVal?.[selector];

                if (!map.has(kKey))
                    map.set(kKey, kVal);
            }
            return [...map.values()];
        },
        enumerable: false,
        configurable: false
    });
})();
