(() => {
    'use strict';

    const isNumber = (val) => {
        const number = +val;

        if ((number - number) !== 0) {
            // Discard Infinity and NaN
            return false;
        }

        if (number === val) {
            return true;
        }

        if ('string' === typeof val) {
            // String parsed, both a non-empty whitespace string and an empty string will have been coerced to 0.
            // If 0 trim the string and see if its empty.
            if (0 === number && '' === val.trim()) {
                return false;
            }
            return true;
        }

        return false;
    };

    Number.prototype.toFloor = function(num = 0) {
        return Math.floor(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    Number.prototype.toCeil = function(num = 0) {
        return Math.ceil(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    Number.prototype.toRound = function(num = 0) {
        return Math.round(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    Number.prototype.isOdd = function() {
        /* REF: https://github.com/jonschlinkert/is-odd */
        if (!isNumber(this)) {
            return false;
        }
        if (Number(this) !== Math.floor(this)) {
            return false;
        }
        return !!(~~this & 1);
    };

    Number.prototype.isEven = function() {
        /* REF: https://github.com/jonschlinkert/is-odd */
        if (!isNumber(this)) {
            return false;
        }
        if (Number(this) !== Math.floor(this)) {
            return false;
        }
        return !(~~this & 1);
    };
})();