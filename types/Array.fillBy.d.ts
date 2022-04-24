declare interface Array<T> {
    /**
     * 类似 Array.prototype.fill，但以函数形式生成元素。
     * @param {Function} valueFn
     * @param {Number} start
     * @param {Number} end
     * @returns {Array}
     */
    $fillBy(valueFn: (index: number) => T, start?: number, end?: number): this;
}
