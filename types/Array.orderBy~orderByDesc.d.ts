declare interface Array<T> {
    /**
     * 类似 Array.prototype.sort 的升序版本，但支持指定按特定属性排序。
     * @param {Function} [selectorFn]
     * @param {Object} [thisArg]
     * @returns {Object}
     */
    $orderBy<U>(selectorFn?: (value: T) => U, thisArg?: any): this;

    /**
     * 类似 Array.prototype.sort 的降序版本，但支持指定按特定属性排序。
     * @param {Function} [selectorFn]
     * @param {Object} [thisArg]
     * @returns {Object}
     */
    $orderByDesc<U>(selectorFn?: (value: T) => U, thisArg?: any): this;
}
