(function () {
    Object.defineProperty(Array.prototype, '$orderBy', {
        value: function (selectorFn) {
            if (selectorFn === undefined) {
                selectorFn = (e) => e;
            }

            if (typeof selectorFn !== 'function') {
                throw new TypeError('The first argument need to be a function');
            }

            const thisArg = arguments[1];
            const compareFn = (item1, item2) => {
                const sort1 = selectorFn.call(thisArg, item1);
                const sort2 = selectorFn.call(thisArg, item2);
                if (sort1 > sort2) return 1;
                if (sort2 > sort1) return -1;
                return 0;
            };

            return this.sort(compareFn);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$orderByDesc', {
        value: function (selectorFn) {
            if (selectorFn === undefined) {
                selectorFn = (e) => e;
            }

            if (typeof selectorFn !== 'function') {
                throw new TypeError('The first argument need to be a function');
            }

            const thisArg = arguments[1];
            const compareFn = (item1, item2) => {
                const sort1 = selectorFn.call(thisArg, item1);
                const sort2 = selectorFn.call(thisArg, item2);
                if (sort1 > sort2) return -1;
                if (sort2 > sort1) return 1;
                return 0;
            };

            return this.sort(compareFn);
        },
        enumerable: false,
        configurable: false
    });
})();
