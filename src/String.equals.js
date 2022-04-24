(function () {
    const _isString = (obj) => {
        return '[object String]' === Object.prototype.toString.call(obj);
    };

    Object.defineProperty(String, '$equals', {
        value: function (str1, str2) {
            if (!_isString(str1) || !_isString(str2)) {
                return false;
            }

            return str1 == str2;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(String, '$equalsIgnoreCase', {
        value: function (str1, str2) {
            if (!_isString(str1) || !_isString(str2)) {
                return false;
            }

            return str1.toLowerCase() == str2.toLowerCase();
        },
        enumerable: false,
        configurable: false
    });
})();
