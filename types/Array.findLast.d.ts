declare interface Array<T> {
    /**
     * 类似 Array.prototype.find，但是从后向前查找。
     * @param {Function} predicate
     * @param {Object} [thisArg]
     * @returns {Object}
     */
    $findLast(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

    /**
     * 类似 Array.prototype.find，但是从后向前查找。
     * @param {Function} predicate
     * @param {Object} [thisArg]
     * @returns {Object}
     */
    $findLast<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
}
