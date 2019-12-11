(() => {
    'use strict';

    const isString = (obj) => '[object String]' === Object.prototype.toString.call(obj);

    String.equals = function(str1, str2, options) {
        options = options || {};

        if (!isString(str1) || !isString(str2)) {
            return false;
        }

        return !!options.ignoreCase ? (str1.toLowerCase() == str2.toLowerCase()) : (str1 === str2);
    };

    /**
     * 判断两个字符串是否相等。
     * @param {String} str 待判断的字符串。
     * @param {Object} options
     * @param {Boolean} options.ignoreCase 是否忽略大小写（默认值 false）。
     * @returns {Boolean}
     */
    String.prototype.equals = function(str, options) {
        return String.equals(this, str, options);
    };

    /**
     * 返回一个替换所有待替换值的新字符串。
     * @param {String} substr 待替换的字符串。
     * @param {String} replacement 替换后的新字符串。
     * @returns {String}
     */
    String.prototype.replaceAll = function(substr, replacement = '') {
        return this.split(substr).join(replacement);
    };
})();