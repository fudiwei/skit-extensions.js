declare interface BooleanConstructor {
    /**
     * 根据标识返回一个新的 Boolean 对象。
     * 当标志值为布尔值、字符串 "true"/"1" 或非 0 数值时，将返回 true；反之返回 false。
     * @param {Object} flag 标识。
     * @returns {Boolean}
     */
    $from(flag: string | number | boolean): boolean;
}
