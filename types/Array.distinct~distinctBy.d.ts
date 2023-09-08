declare interface Array<T> {
    /**
     * 使用指定的比较器比较每个元素，从数组中返回不同的元素。
     * @param {Function} [comparerFn] （可选）用于比较元素的函数。如果两个元素相等，函数应返回 true；否则返回 false。
     * @param {Object} [thisArg] （可选）执行 `comparerFn` 函数时值被用作 this。
     * @returns {Array} 一个包含原数组中的非重复元素的新数组。
     */
    $distinct(comparerFn?: (a: T, b: T) => boolean, thisArg?: any): T[];

    /**
     * 根据指定的键返回数组中的不同元素。
     * @deprecated 即将被 ECMAScript 提案 Array.prototype.uniqueBy 取代。
     * @param {Function} [selector] （可选）指定键。
     * @returns {Array} 一个包含原数组中的非重复元素的新数组。
     */
    $distinctBy(selector?: keyof T | number | symbol): T[];

    /**
     * 根据指定的键选择器函数返回数组中的不同元素。
     * @deprecated 即将被 ECMAScript 提案 Array.prototype.uniqueBy 取代。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Array} 一个包含原数组中的非重复元素的新数组。
     */
    $distinctBy<U>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): T[];
}
