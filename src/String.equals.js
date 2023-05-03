(function () {
    const _isString = (obj) => {
        return typeof obj === 'string' || obj instanceof String;
    };

    Object.defineProperty(String, '$equals', {
        value: function (str1, str2) {
            if (!_isString(str1) || !_isString(str2)) {
                return false;
            }

            return str1.valueOf() === str2.valueOf();
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(String, '$equalsIgnoreCase', {
        value: function (str1, str2) {
            if (!_isString(str1) || !_isString(str2)) {
                return false;
            }

            return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
        },
        enumerable: false,
        configurable: false
    });
})();
