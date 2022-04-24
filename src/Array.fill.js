(function () {
    Object.defineProperty(Array.prototype, '$fill', {
        value: function (valueFn, start, end) {
            if (typeof valueFn !== 'function') {
                throw new TypeError(valueFn + ' is not a function');
            }

            const O = Object(this);
            const len = O.length >>> 0;
            const relativeStart = start >> 0;
            const relativeEnd = end === undefined ? len : (end >> 0);

            let i, j;
            i = relativeStart < 0 ?
                Math.max(len + relativeStart, 0) :
                Math.min(relativeStart, len);
            j = relativeEnd < 0 ?
                Math.max(len + relativeEnd, 0) :
                Math.min(relativeEnd, len);

            while (i < j) {
                O[i] = valueFn(i);
                i++;
            }

            return O;
        },
        enumerable: false,
        configurable: false
    });
})();
