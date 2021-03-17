; (function () {
    Object.defineProperty(Number.prototype, '$toFloor', {
        value: function (digits = 0) {
            if (!(digits >= 0 && digits <= 100)) {
                throw new RangeError('The first argument must be between 0 and 100.');
            }

            let str = Math.floor(this * Math.pow(10, digits)) / Math.pow(10, digits) + '';
            if (digits > 0) {
                const intp = str.split('.')[0],
                    decp = str.split('.')[1] || '';
                if (decp.length < digits) {
                    str = intp + '.' + decp.padEnd(digits, '0');
                }
            }

            return Number.isNaN(+str) ? 'NaN' : str;
        },
        enumerable: false,
        configurable: false,
    });

    Object.defineProperty(Number.prototype, '$toCeil', {
        value: function (digits = 0) {
            if (!(digits >= 0 && digits <= 100)) {
                throw new RangeError('The first argument must be between 0 and 100.');
            }

            let str = Math.ceil(this * Math.pow(10, digits)) / Math.pow(10, digits) + '';
            if (digits > 0) {
                const intp = str.split('.')[0],
                    decp = str.split('.')[1] || '';
                if (decp.length < digits) {
                    str = intp + '.' + decp.padEnd(digits, '0');
                }
            }

            return Number.isNaN(+str) ? 'NaN' : str;
        },
        enumerable: false,
        configurable: false,
    });

    Object.defineProperty(Number.prototype, '$toRound', {
        value: function (digits = 0) {
            if (!(digits >= 0 && digits <= 100)) {
                throw new RangeError('The first argument must be between 0 and 100.');
            }

            let str = Math.round(this * Math.pow(10, digits)) / Math.pow(10, digits) + '';
            if (digits > 0) {
                const intp = str.split('.')[0],
                    decp = str.split('.')[1] || '';
                if (decp.length < digits) {
                    str = intp + '.' + decp.padEnd(digits, '0');
                }
            }

            return Number.isNaN(+str) ? 'NaN' : str;
        },
        enumerable: false,
        configurable: false,
    });
})();
