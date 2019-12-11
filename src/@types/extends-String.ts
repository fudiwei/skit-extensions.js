export default {};

declare global {
  interface StringConstructor {
    /**
     * 判断两个字符串是否相等。
     * @param {String} str1 待判断的第一个字符串。
     * @param {String} str2 待判断的第二个字符串。
     * @param {Object} options
     * @param {Boolean} options.ignoreCase 是否忽略大小写（默认值 false）。
     * @returns {Boolean}
     */
    equals(str1: String, str2: String, options?: any): Boolean;
  }

  interface String {
    /**
     * 判断两个字符串是否相等。
     * @param {String} str 待判断的字符串。
     * @param {Object} options
     * @param {Boolean} options.ignoreCase 是否忽略大小写（默认值 false）。
     * @returns {Boolean}
     */
    equals(str: String, options?: any): Boolean;

    /**
     * 返回一个替换所有待替换值的新字符串。
     * @param {String} substr 待替换的字符串。
     * @param {String} replacement 替换后的新字符串。
     * @returns {String}
     */
    replaceAll(substr: String, replacement?: String): String;
  }
}
