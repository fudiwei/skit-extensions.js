(function () {
    const _firstOrDefault = (array, comparerFn, thisArg, mode) => {
        const n = mode === 'asc' ? ((r) => r >= 0) : mode === 'desc' ? ((r) => r <= 0) : undefined;
        return Array.prototype.reduce.call(array, (pre, cur) => {
            const r = comparerFn.call(thisArg, pre, cur);
            return n(r) ? cur : pre;
        });
    };

    const _firstOrDefaultBy = (array, selector, thisArg, mode) => {
        const pairs = [];
        for (let k = 0, len = array.length >>> 0; k < len; k++) {
            const kVal = array[k];
            const kKey = selector != null
                ? typeof selector === 'function'
                    ? selector.call(thisArg, kVal, k, array)
                    : kVal?.[selector]
                : kVal;
            pairs.push([kKey, kVal]);
        }

        const comparerFn = (a, b) => (a[0] > b[0]) ? 1 : (a[0] < b[0]) ? -1 : 0;
        return _firstOrDefault(pairs, comparerFn, thisArg, mode)?.[1];
    };

    Object.defineProperty(Array.prototype, '$min', {
        value: function (comparerFn, thisArg) {
            if (comparerFn == null) {
                comparerFn = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;
            } else if (typeof comparerFn !== 'function') {
                throw new TypeError(comparerFn + ' is not a function');
            }

            return _firstOrDefault(Object(this), comparerFn, thisArg, 'asc');
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$minBy', {
        value: function (selector, thisArg) {
            return _firstOrDefaultBy(Object(this), selector, thisArg, 'asc');
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$max', {
        value: function (comparerFn, thisArg) {
            if (comparerFn == null) {
                comparerFn = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;
            } else if (typeof comparerFn !== 'function') {
                throw new TypeError(comparerFn + ' is not a function');
            }

            return _firstOrDefault(Object(this), comparerFn, thisArg, 'desc');
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$maxBy', {
        value: function (selector, thisArg) {
            return _firstOrDefaultBy(Object(this), selector, thisArg, 'desc');
        },
        enumerable: false,
        configurable: false
    });
})();
