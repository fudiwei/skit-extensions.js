(function () {
    const _lastIndexOf = (array, predicateFn, thisArg) => {
        if (typeof predicateFn !== 'function') {
            throw new TypeError(predicateFn + ' is not a function');
        }

        const O = Object(array);
        const len = O.length >>> 0;

        let k = len - 1;
        while (k >= 0) {
            const kValue = O[k];
            if (predicateFn.call(thisArg, kValue, k, O)) {
                return k;
            }
            k--;
        }

        return -1;
    };

    Object.defineProperty(Array.prototype, '$findLast', {
        value: function (predicate, thisArg) {
            const lastIndex = _lastIndexOf(this, predicate, thisArg);
            if (lastIndex !== -1)
                return this[lastIndex];

            return undefined;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$findLastIndex', {
        value: function (predicate, thisArg) {
            return _lastIndexOf(this, predicate, thisArg);
        },
        enumerable: false,
        configurable: false
    });
})();
