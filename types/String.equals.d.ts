declare interface StringConstructor {
    /**
     * 判断两个字符串是否相等。
     * @param {String} str1
     * @param {String} str2
     * @returns {Boolean}
     */
    $equals(str1: string, str2: string): boolean;

    /**
     * 判断两个字符串是否相等（忽略大小写）。
     * @param {String} str1
     * @param {String} str2
     * @returns {Boolean}
     */
    $equalsIgnoreCase(str1: string, str2: string): boolean;
}
