declare interface Array<T> {
    /**
     * 将一个元素添加到数组的指定位置，并返回修改后的数组。
     * @param {Number} index 指定添加的索引。
     * @param {Object} value 要添加的元素。
     * @returns {Array} 修改后的数组。
     */
    $insertAt(index: number, value: T): this;

    /**
     * 删除数组指定位置的元素，并返回修改后的数组。
     * @param {Number} index 指定删除的索引。
     * @returns {Array} 修改后的数组。
     */
    $removeAt(index: number): this;
}
