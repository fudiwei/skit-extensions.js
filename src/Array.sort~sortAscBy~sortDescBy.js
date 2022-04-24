(function () {
    const _mergeSort = (array, comparerFn, thisArg, begin, end) => {
        const size = end - begin;
        if (size <= 1)
            return array;

        const middle = (end + begin) >> 1;
        _mergeSort(array, comparerFn, thisArg, begin, middle);
        _mergeSort(array, comparerFn, thisArg, middle, end);
        if (comparerFn.call(thisArg, array[middle - 1], array[middle]) <= 0)
            return array;

        let merged = [];
        let leftIndex = begin, rightIndex = middle;
        while (merged.length < size) {
            if (leftIndex === middle) {
                merged.push(array[rightIndex++]);
            } else if (rightIndex === end) {
                merged.push(array[leftIndex++]);
            } else {
                const c = comparerFn.call(thisArg, array[leftIndex], array[rightIndex]);
                if (c <= 0) {
                    merged.push(array[leftIndex++]);
                } else {
                    merged.push(array[rightIndex++]);
                }
            }
        }

        array.splice(begin, size, ...merged);
        return array;
    };

    const _mergeSortBy = (array, selectorFn, thisArg, mode) => {
        const results = [];
        const len = array.length >>> 0;
        for (let k = 0; k < len; k++) {
            const kVal = array[k];
            const kKey = typeof selectorFn === 'function'
                ? selectorFn.call(thisArg, kVal, k, array)
                : selectorFn != null
                    ? kVal?.[selectorFn]
                    : kVal;
            results.push([kKey, kVal]);
        }

        _mergeSort(results, (a, b) => (a[0] > b[0]) ? mode : (a[0] < b[0]) ? -mode : 0, thisArg, 0, len);
        return results.map((e) => e[1]);
    };

    Object.defineProperty(Array.prototype, '$sort', {
        value: function (comparerFn) {
            if (comparerFn == null) {
                comparerFn = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;
            } else if (typeof comparerFn !== 'function') {
                throw new TypeError(comparerFn + ' is not a function');
            }

            const O = Array.prototype.slice.call(Object(this));
            const len = O.length >>> 0;
            const thisArg = arguments[1];
            return _mergeSort(O, comparerFn, thisArg, 0, len);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$sortAscBy', {
        value: function (selector, thisArg) {
            return _mergeSortBy(this, selector, thisArg, 1);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$sortDescBy', {
        value: function (selector, thisArg) {
            return _mergeSortBy(this, selector, thisArg, -1);
        },
        enumerable: false,
        configurable: false
    });
})();
