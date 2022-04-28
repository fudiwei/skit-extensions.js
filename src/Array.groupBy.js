(function () {
    Object.defineProperty(Array.prototype, '$groupBy', {
        value: function (selector, thisArg) {
            return Array.prototype.reduce.call(Object(this), (acc, cur, idx, src) => {
                const key = selector != null
                    ? typeof selector === 'function'
                        ? selector.call(thisArg, cur, idx, src)
                        : cur?.[selector]
                    : cur;

                if (acc[key]) {
                    acc[key].push(cur);
                } else {
                    acc[key] = [cur];
                }

                return acc;
            }, {});
        },
        enumerable: false,
        configurable: false
    });
})();
