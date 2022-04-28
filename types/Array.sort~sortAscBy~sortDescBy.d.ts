declare interface Array<T> {
    /**
     * 对数组的元素进行排序，并返回排序后的数组。
     * 类似 Array.prototype.sort，但排序结果是稳定的、且不改变原数组。
     * @param {Function} [comparerFn] （可选）用于比较元素的函数。如果前一个元素小于后一个元素，函数应返回小于 0 的值；如果前一个元素大于后一个元素，函数应返回大于 0 的值；否则返回 0。
     * @param {Object} [thisArg] （可选）执行 `comparerFn` 函数时值被用作 this。
     * @returns {Array} 排序后的数组。
     */
    $sort(comparerFn?: (a: T, b: T) => number, thisArg?: any): T[];

    /**
     * 根据键按升序对数组的元素进行排序，并返回排序后的数组。
     * 类似 Array.prototype.sort 的升序版本，但排序结果是稳定的、且不改变原数组。
     * @param {String} [selector] （可选）指定键。
     * @returns {Array} 排序后的数组。
     */
    $sortAscBy(selector?: number | keyof T | symbol): T[];

    /**
     * 根据键按升序对数组的元素进行排序，并返回排序后的数组。
     * 类似 Array.prototype.sort 的升序版本，但排序结果是稳定的、且不改变原数组。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Array} 排序后的数组。
     */
    $sortAscBy<U>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): T[];

    /**
     * 根据键按降序对数组的元素进行排序。
     * 类似 Array.prototype.sort 的降序版本，但排序结果是稳定的、且不改变原数组。
     * @param {String} [selector] （可选）指定键。
     * @returns {Array} 排序后的数组。
     */
    $sortDescBy(selector?: number | keyof T | symbol): T[];

    /**
     * 根据键按降序对数组的元素进行排序。
     * 类似 Array.prototype.sort 的降序版本，但排序结果是稳定的、且不改变原数组。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Array} 排序后的数组。
     */
    $sortDescBy<U>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): T[];
}
