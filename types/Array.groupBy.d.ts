declare interface Array<T> {
    /**
     * 根据指定的键对数组中的元素进行分组，并且从每个组及其键中创建结果值。
     * @param {Function} [selector] （可选）指定键。
     * @returns {Object} 一个包含每个组及其键的投影的对象。
     */
    $groupBy(selector?: keyof T | number | symbol): Record<NonNullable<typeof selector>, T[]>;

    /**
     * 根据指定的键选择器函数对数组中的元素进行分组，并且从每个组及其键中创建结果值。
     * @deprecated 即将被 ECMAScript 提案 Array.prototype.groupBy 取代。
     * @param {Function} [selectorFn] （可选）用于从元素中提取键的函数。
     * @param {Object} [thisArg] （可选）执行 `selectorFn` 函数时值被用作 this。
     * @returns {Object} 一个包含每个组及其键的投影的对象。
     */
    $groupBy<U extends keyof U | number | symbol = any>(selectorFn?: (value: T, index: number, array: T[]) => U, thisArg?: any): Record<U, T[]>;
}
