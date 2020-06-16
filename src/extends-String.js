(() => {
    'use strict';

    const isString = (obj) => '[object String]' === Object.prototype.toString.call(obj);
    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(String.equals)) {
        Object.defineProperty(String, 'equals', {
            value: function(str1, str2, options) {
                options = options || {};

                if (!isString(str1) || !isString(str2)) {
                    return false;
                }

                return !!options.ignoreCase ? (str1.toLowerCase() == str2.toLowerCase()) : (str1 === str2);
            },
            enumerable: false,
            configurable: false
        });
    }

    if (!isFunction(String.prototype.equals)) {
        Object.defineProperty(String.prototype, 'equals', {
            value: function(str, options) {
                return String.equals(this, str, options);
            },
            enumerable: false,
            configurable: false
        });
    }

    if (!isFunction(String.prototype.replaceAll)) {
        Object.defineProperty(String.prototype, 'replaceAll', {
            value: function(substr, replacement = '') {
                return this.split(substr).join(replacement);
            },
            enumerable: false,
            configurable: false
        });
    }

    if (!isFunction(String.prototype.reverse)) {
        Object.defineProperty(String.prototype, 'reverse', {
            value: function() {
                return Array.from(this).reverse().join('');
            },
            enumerable: false,
            configurable: false
        });
    }
})();