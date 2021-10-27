declare interface Array<T> {
    /**
     * 类似 Array.prototype.findIndex，但是从后向前查找。
     * @param {Function} predicate
     * @param {Object} [thisArg]
     * @returns {Object}
     */
    $findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
}
