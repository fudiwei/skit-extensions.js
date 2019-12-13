(() => {
    'use strict';

    Number.isNumber = function(val) {
        if (typeof val === 'number') {
            // Discard Infinity and NaN
            return val - val === 0;
        }

        if (typeof val === 'string' && val.trim() !== '') {
            return Number.isFinite ? Number.isFinite(+val) : isFinite(+val);
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
        if (!Number.isNumber(this)) {
            return false;
        }
        if (Number(this) !== Math.floor(this)) {
            return false;
        }
        return !!(~~this & 1);
    };

    Number.prototype.isEven = function() {
        if (!Number.isNumber(this)) {
            return false;
        }
        if (Number(this) !== Math.floor(this)) {
            return false;
        }
        return !(~~this & 1);
    };
})();