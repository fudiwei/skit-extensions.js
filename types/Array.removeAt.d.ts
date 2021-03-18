declare interface Array<T> {
    /**
     * 删除数组指定位置的元素。此方法会改变原数组。
     * @param {Number} index
     * @returns {Array}
     */
    $removeAt(index: number): Array<T>;
}
