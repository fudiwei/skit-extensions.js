declare interface Array<T> {
    /**
     * 使用指定的比较器比较每个元素，从数组中返回最小值。
     * @param {Function} [comparerFn] （可选）用于比较元素的函数。如果前一个元素小于后一个元素，函数应返回小于 0 的值；如果前一个元素大于后一个元素，函数应返回大于 0 的值；否则返回 0。
     * @param {Object} [thisArg] （可选）执行 `comparerFn` 函数时值被用作 this。
     * @returns {Object} 数组中的最小值。
     */
    $min(comparerFn?: (a: T, b: T) => number, thisArg?: any): T | undefined;

    /**
     * 根据指定的键返回数组中的最小值。
     * @param {Function} [selector] （可选）指定键。
     * @returns {Object} 数组中具有最小键的值。
     */
    $minBy(selector?: keyof T | number | symbol): T | undefined;

    /**
     * 根据指定的键选择器函数返回数组中的最小值。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Object} 数组中具有最小键的值。
     */
    $minBy<U>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): T | undefined;

    /**
     * 使用指定的比较器比较每个元素，从数组中返回最大值。
     * @param {Function} [comparerFn] （可选）用于比较元素的函数。如果前一个元素小于后一个元素，函数应返回小于 0 的值；如果前一个元素大于后一个元素，函数应返回大于 0 的值；否则返回 0。
     * @param {Object} [thisArg] （可选）执行 `comparerFn` 函数时值被用作 this。
     * @returns {Object} 数组中的最大值。
     */
    $max(comparerFn?: (a: T, b: T) => number, thisArg?: any): T | undefined;

    /**
     * 根据指定的键返回数组中的最大值。
     * @param {Function} [selector] （可选）指定键。
     * @returns {Object} 数组中具有最大键的值。
     */
    $maxBy(selector?: keyof T | number | symbol): T | undefined;

    /**
     * 根据指定的键选择器函数返回数组中的最大值。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Object} 数组中具有最大键的值。
     */
    $maxBy<U>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): T | undefined;
}
