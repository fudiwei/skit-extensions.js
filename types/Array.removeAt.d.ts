declare interface Array<T> {
    /**
     * 删除数组指定位置的元素，并返回删除后的数组。此方法会改变原数组。
     * @param {Number} index
     * @returns {Array}
     */
    $removeAt(index: number): this;
}
