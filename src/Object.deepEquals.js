(function () {
    const _isNaN = (obj) => {
        return Number.isNaN(obj);
    };

    const _isString = (obj) => {
        return typeof obj === 'string' || obj instanceof String;
    };

    const _isObject = (obj) => {
        return typeof obj === 'object' && obj !== null;
    };

    const _isArray = (obj) => {
        return Array.isArray(obj);
    };

    const _isSameType = (obj1, obj2) => {
        if (Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2)) {
            return false;
        }

        if (typeof obj1.constructor === 'function' && typeof obj2.constructor === 'function') {
            return obj1.constructor === obj2.constructor;
        }

        return true;
    };

    const _deepEquals = (obj1, obj2) => {
        if (obj1 === obj2) {
            return true;
        }

        if (_isNaN(obj1) && _isNaN(obj2)) {
            return true;
        }

        if (_isString(obj1) && _isString(obj2)) {
            return obj1.valueOf() === obj2.valueOf();
        }

        if (!_isObject(obj1) && !_isObject(obj2)) {
            return obj1 === obj2;
        }

        if (!_isSameType(obj1, obj2)) {
            return false;
        }

        if (_isArray(obj1) && _isArray(obj2)) {
            if (obj1.length !== obj2.length) {
                return false;
            }

            for (let i = 0, len = obj1.length; i < len; i++) {
                if (!_deepEquals(obj1[i], obj2[i])) {
                    return false;
                }
            }
        } else {
            const keys1 = [...Object.keys(obj1), ...Object.getOwnPropertySymbols(obj1)];
            const keys2 = [...Object.keys(obj2), ...Object.getOwnPropertySymbols(obj2)];
            if (!_deepEquals(keys1, keys2)) {
                return false;
            }

            for (let i = 0, len = keys1.length; i < len; i++) {
                if (!_deepEquals(obj1[keys1[i]], obj2[keys1[i]])) {
                    return false;
                }
            }
        }

        return true;
    };

    Object.defineProperty(Object, '$deepEquals', {
        value: function (obj1, obj2) {
            return _deepEquals(obj1, obj2);
        },
        enumerable: false,
        configurable: false
    });
})();
