declare interface Array<T> {
    /**
     * 将一个元素添加到数组的指定位置，并返回添加后的数组。此方法会改变原数组。
     * @param {Number} index
     * @param {Object} value
     * @returns {Array}
     */
    $insertAt(index: number, value: T): this;
}
