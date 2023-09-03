(function () {
    Object.defineProperty(Array.prototype, '$groupByToMap', {
        value: function (selector, ...rest) {
            let comparerFn, thisArg;
            if (rest.length === 1) {
                if (typeof rest[0] === 'function') comparerFn = rest[0];
                else thisArg = rest[0];
            } else {
                comparerFn = rest[0];
                thisArg = rest[1];
            }

            return Array.prototype.reduce.call(Object(this), (acc, cur, idx, src) => {
                let key = selector != null
                    ? typeof selector === 'function'
                        ? selector.call(thisArg, cur, idx, src)
                        : cur?.[selector]
                    : cur;
                if (comparerFn) {
                    const keys = Array.from(acc.keys());
                    const keyIdx = keys.findIndex(e => comparerFn.call(thisArg, key, e));
                    if (keyIdx !== -1) {
                        key = keys[keyIdx];
                    }
                }

                const value = acc.get(key);
                if (value) {
                    value.push(cur);
                } else {
                    acc.set(key, [cur]);
                }

                return acc;
            }, new Map());
        },
        enumerable: false,
        configurable: false
    });
})();
