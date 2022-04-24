(function () {
    Object.defineProperty(Number, '$isNumeric', {
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
        configurable: false
    });
})();
