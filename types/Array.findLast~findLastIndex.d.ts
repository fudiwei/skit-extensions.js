declare interface Array<T> {
    /**
     * 返回数组中满足提供的测试函数的最后一个元素的值。
     * 类似 Array.prototype.find，但是从后向前查找。
     * @deprecated 即将被 ECMAScript 提案 Array.prototype.findLast 取代。
     * @param {Function} predicate 在数组每一项上执行的测试函数。
     * @param {Object} [thisArg] （可选）执行 `predicate` 函数时值被用作 this。
     * @returns {Object} 数组中最后一个满足所提供测试函数的元素的值，否则返回 undefined。
     */
    $findLast(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

    /**
     * 返回数组中满足提供的测试函数的最后一个元素的值。
     * 类似 Array.prototype.find，但是从后向前查找。
     * @deprecated 即将被 ECMAScript 提案 Array.prototype.findLast 取代。
     * @param {Function} predicate 在数组每一项上执行的测试函数。
     * @param {Object} [thisArg] （可选）执行 `predicate` 函数时值被用作 this。
     * @returns {Object} 数组中最后一个满足所提供测试函数的元素的值，否则返回 undefined。
     */
    $findLast<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;

    /**
     * 返回数组中满足提供的测试函数的最后一个元素的索引。
     * 类似 Array.prototype.findIndex，但是从后向前查找。
     * @deprecated 即将被 ECMAScript 提案 Array.prototype.findLastIndex 取代。
     * @param {Function} predicate 在数组每一项上执行的测试函数。
     * @param {Object} [thisArg] （可选）执行 `predicate` 函数时值被用作 this。
     * @returns {Number} 数组中最后一个满足所提供测试函数的元素的索引，否则返回 -1。
     */
    $findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
}
