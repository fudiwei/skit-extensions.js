(function () {
    Object.defineProperty(Array.prototype, '$findLastIndex', {
        value: function (predicate) {
            if (typeof predicate !== 'function') {
                throw new TypeError('The first argument need to be a function');
            }

            const O = Object(this);
            const len = O.length >>> 0;
            const thisArg = arguments[1];

            let k = len - 1;
            while (k >= 0) {
                const kValue = O[k];
                if (predicate.call(thisArg, kValue, k, O)) {
                    return k;
                }
                k--;
            }

            return -1;
        },
        enumerable: false,
        configurable: false
    });
})();
