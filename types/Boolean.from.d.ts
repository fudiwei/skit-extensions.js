declare interface BooleanConstructor {
    /**
     * 根据标识返回一个新的 Boolean 对象。
     * @param {Object} flag 标识。
     * @returns {Boolean} 当标识值为布尔值 true、字符串 "true" 或 "1"、非 0 数值时，将返回 true；反之返回 false。
     */
    $from(flag: string | number | boolean): boolean;
}
