declare interface StringConstructor {
    /**
     * 判断两个字符串是否是否具有相同的值。
     * 类似比较运算符，但支持 String 对象比较。
     * @param {String} str1 要比较的第一个字符串。
     * @param {String} str2 要比较的第二个字符串。
     * @returns {Boolean} 如果 a 的值与 b 的值相同，则为 true；否则为 false。
     */
    $equals(str1: string, str2: string): boolean;

    /**
     * 判断两个字符串是否是否具有相同的值（忽略大小写）。
     * 类似比较运算符，但支持 String 对象比较。
     * @param {String} str1 要比较的第一个字符串。
     * @param {String} str2 要比较的第二个字符串。
     * @returns {Boolean} 如果 a 的值与 b 的值在忽略大小写后相同，则为 true；否则为 false。
     */
    $equalsIgnoreCase(str1: string, str2: string): boolean;
}
