declare interface Array<T> {
    /**
     * 返回一个仅包含去重元素的新数组。
     * @param {Function} [comparerFn] （可选）比较两个元素是否相等的函数。
     * @param {Object} [thisArg]
     * @returns {Array}
     */
    $distinct(comparerFn?: (x: T, y: T) => boolean, thisArg?: any): Array<T>;
}
