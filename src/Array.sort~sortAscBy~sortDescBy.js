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

    const _mergeSortBy = (array, selector, thisArg, mode) => {
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

        const t = (mode === 'asc') ? 1 : (mode === 'desc') ? -1 : undefined;
        const comparerFn = (a, b) => (a[0] > b[0]) ? t : (a[0] < b[0]) ? -t : 0;
        return _mergeSort(pairs, comparerFn, thisArg, 0, pairs.length).map((e) => e[1]);
    };

    Object.defineProperty(Array.prototype, '$sort', {
        value: function (comparerFn, thisArg) {
            if (comparerFn == null) {
                comparerFn = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;
            } else if (typeof comparerFn !== 'function') {
                throw new TypeError(comparerFn + ' is not a function');
            }

            const O = Array.prototype.slice.call(Object(this));
            const len = O.length >>> 0;
            return _mergeSort(O, comparerFn, thisArg, 0, len);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$sortAscBy', {
        value: function (selector, thisArg) {
            return _mergeSortBy(Object(this), selector, thisArg, 'asc');
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$sortDescBy', {
        value: function (selector, thisArg) {
            return _mergeSortBy(Object(this), selector, thisArg, 'desc');
        },
        enumerable: false,
        configurable: false
    });
})();
