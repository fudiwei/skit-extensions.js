(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(Number.isNumber)) {
        Object.defineProperty(Number, 'isNumber', {
            value: function (val) {
                if (typeof val === 'number') {
                    // Discard Infinity and NaN
                    return val - val === 0;
                }

                if (typeof val === 'string' && val.trim() !== '') {
                    return Number.isFinite ? Number.isFinite(+val) : isFinite(+val);
                }

                return false;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Number.prototype.toFloor)) {
        Object.defineProperty(Number.prototype, 'toFloor', {
            value: function (num = 0) {
                if (!(num >= 0 && num <= 100)) {
                    throw new RangeError('toFloor() digits argument must be between 0 and 100.');
                }

                let val = Math.floor(this * Math.pow(10, num)) / Math.pow(10, num) + '';
                if (num > 0) {
                    const intp = val.split('.')[0],
                        decp = val.split('.')[1] || '';
                    if (decp.length < num) {
                        val = intp + '.' + decp.padEnd(num, '0');
                    }
                }

                return val;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Number.prototype.toCeil)) {
        Object.defineProperty(Number.prototype, 'toCeil', {
            value: function (num = 0) {
                if (!(num >= 0 && num <= 100)) {
                    throw new RangeError('toCeil() digits argument must be between 0 and 100.');
                }

                let val = Math.ceil(this * Math.pow(10, num)) / Math.pow(10, num) + '';
                if (num > 0) {
                    const intp = val.split('.')[0],
                        decp = val.split('.')[1] || '';
                    if (decp.length < num) {
                        val = intp + '.' + decp.padEnd(num, '0');
                    }
                }

                return val;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Number.prototype.toRound)) {
        Object.defineProperty(Number.prototype, 'toRound', {
            value: function (num = 0) {
                if (!(num >= 0 && num <= 100)) {
                    throw new RangeError('toRound() digits argument must be between 0 and 100.');
                }

                let val = Math.round(this * Math.pow(10, num)) / Math.pow(10, num) + '';
                if (num > 0) {
                    const intp = val.split('.')[0],
                        decp = val.split('.')[1] || '';
                    if (decp.length < num) {
                        val = intp + '.' + decp.padEnd(num, '0');
                    }
                }

                return val;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Number.prototype.isOdd)) {
        Object.defineProperty(Number.prototype, 'isOdd', {
            value: function () {
                if (!Number.isNumber(this)) {
                    return false;
                }
                if (Number(this) !== Math.floor(this)) {
                    return false;
                }
                return !!(~~this & 1);
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Number.prototype.isEven)) {
        Object.defineProperty(Number.prototype, 'isEven', {
            value: function () {
                if (!Number.isNumber(this)) {
                    return false;
                }
                if (Number(this) !== Math.floor(this)) {
                    return false;
                }
                return !(~~this & 1);
            },
            enumerable: false,
            configurable: false,
        });
    }
})();
