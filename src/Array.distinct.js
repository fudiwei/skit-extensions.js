(function () {
    Object.defineProperty(Array.prototype, '$distinct', {
        value: function (comparerFn) {
            if (comparerFn === undefined) {
                comparerFn = (x, y) => x === y;
            }

            if (typeof comparerFn !== 'function') {
                throw new TypeError('The first argument need to be a function');
            }

            const O = Object(this);
            const len = O.length >>> 0;
            const thisArg = arguments[1];

            const results = [];
            for (let k = 0; k < len; k++) {
                const kVal = O[k];
                if (!results.some((e) => comparerFn.call(thisArg, kVal, e))) {
                    results.push(kVal);
                }
            }

            return results;
        },
        enumerable: false,
        configurable: false
    });
})();
