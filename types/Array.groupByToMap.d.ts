declare interface Array<T> {
    /**
     * 根据指定的键对数组中的元素进行分组，并且从每个组及其键中创建结果值。
     * @param {Function} [selector] （可选）指定键。
     * @returns {Object} 一个包含每个组及其键的投影的 Map。
     */
    $groupByToMap(selector?: keyof T | number | symbol): Map<NonNullable<typeof selector>, T[]>;

    /**
     * 根据指定的键对数组中的元素进行分组，并且从每个组及其键中创建结果值。
     * @param {Function} [selector] （可选）指定键。
     * @param {Function} [comparerFn] （可选）用于比较键的函数。如果两个键相等，函数应返回 true；否则返回 false。
     * @param {Object} [thisArg] （可选）执行 `comparerFn` 函数时值被用作 this。
     * @returns {Object} 一个包含每个组及其键的投影的 Map。
     */
    $groupByToMap(selector?: keyof T | number | symbol, comparerFn?: (a: T, b: T) => boolean, thisArg?: any): Map<NonNullable<typeof selector>, T[]>;

    /**
     * 根据指定的键选择器函数对数组中的元素进行分组，并且从每个组及其键中创建结果值。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Object} 一个包含每个组及其键的投影的 Map。
     */
    $groupByToMap<U = any>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): Map<U, T[]>;

    /**
     * 根据指定的键选择器函数对数组中的元素进行分组，并且从每个组及其键中创建结果值。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Function} [comparerFn] （可选）用于比较键的函数。如果两个键相等，函数应返回 true；否则返回 false。
     * @param {Object} [thisArg] （可选）执行 `selectorFn`、`comparerFn` 函数时值被用作 this。
     * @returns {Object} 一个包含每个组及其键的投影的 Map。
     */
    $groupByToMap<U = any>(selectorFn?: (value: T, index: number, array: T[]) => U, comparerFn?: (a: U, b: U) => boolean, thisArg?: any): Map<U, T[]>;
}
