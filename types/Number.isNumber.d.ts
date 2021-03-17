interface NumberConstructor {
    /**
     * 类似 Number.isNaN 的反义词，但确定传递的值是否是一个有穷的 Number 类型、或可转换成有穷数的 String 类型。
     * @param {Object} val
     * @returns {Boolean}
     */
    $isNumber(val: any): boolean;
}
