(function () {
    const _isNumber = (val) => {
        if (typeof val === 'number') {
            // Discard Infinity and NaN
            return val - val === 0;
        }

        if (typeof val === 'string' && val.trim() !== '') {
            return Number.isFinite ? Number.isFinite(+val) : isFinite(+val);
        }

        return false;
    };

    Object.defineProperty(Number, '$isOdd', {
        value: function (num) {
            if (!_isNumber(num)) {
                return false;
            }

            if (Number(num) !== Math.floor(num)) {
                return false;
            }

            return !!(~~num & 1);
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Number, '$isEven', {
        value: function (num) {
            if (!_isNumber(num)) {
                return false;
            }

            if (Number(num) !== Math.floor(num)) {
                return false;
            }

            return !(~~num & 1);
        },
        enumerable: false,
        configurable: false
    });
})();
