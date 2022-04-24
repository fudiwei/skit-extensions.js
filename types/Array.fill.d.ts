declare interface Array<T> {
    /**
     * 以一个函数返回值填充一个数组中从起始索引到终止索引内的全部元素（不包括终止索引）。
     * 类似 `Array.prototype.fill`，但以函数形式生成元素。
     * @param {Function} valueFn 用来填充数组元素的函数。
     * @param {Number} [start] （可选）起始索引。默认值为 0。
     * @param {Number} [end] （可选）终止索引。默认值为 `this.length`。
     * @returns {Array} 修改后的数组。
     */
    $fill(valueFn: (index: number) => T, start?: number, end?: number): this;
}
