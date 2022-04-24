declare interface NumberConstructor {
    /**
     * 判断是否是一个可转换成有穷数的对象。
     * @param {Object} val 被检测的对象。
     * @returns {Boolean} 如果被检测的对象是有穷数或可转换成有穷数，则返回 true，否则返回 false。注意 NaN 和正负 Infinity 不是有穷数。
     */
    $isNumeric(val: any): boolean;
}
