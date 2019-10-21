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

    /**
     * 使用去尾法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {Number}
     */
    Number.prototype.toFloor = function (num) {
        return Math.floor(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    /**
     * 使用进一法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {Number}
     */
    Number.prototype.toCeil = function (num) {
        return Math.ceil(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    /**
     * 使用四舍五入法法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {Number}
     */
    Number.prototype.toRound = function (num) {
        return Math.round(this * Math.pow(10, num)) / Math.pow(10, num);
    };

    /**
     * 判断一个 Number 是否是奇数。
     * @returns {Boolean}
     */
    Number.prototype.isOdd = function () {
        /* REF: https://github.com/jonschlinkert/is-odd */
        if (!isNumber(this)) {
            return false;
        }
        if (Number(this) !== Math.floor(this)) {
            return false;
        }
        return !!(~~this & 1);
    };

    /**
     * 判断一个 Number 是否是偶数。
     * @returns {Boolean}
     */
    Number.prototype.isEven = function () {
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