declare interface Number {
    /**
     * 使用去尾法来格式化一个数值。
     * 类似 `Number.prototype.toFixed`，但是采用去尾法。
     * @param {Number} [digits] （可选）保留小数位数。默认值为 0。
     * @returns {String} 使用去尾法表示给定数值的字符串。
     */
    $toFloor(digits?: number): string;

    /**
     * 使用进一法来格式化一个数值。
     * 类似 `Number.prototype.toFixed`，但是采用进一法。
     * @param {Number} [digits] （可选）保留小数位数。默认值为 0。
     * @returns {String} 使用进一法表示给定数值的字符串。
     */
    $toCeil(digits?: number): string;

    /**
     * 使用四舍五入法来格式化一个数值。
     * 类似 `Number.prototype.toFixed`，但是采用四舍五入法。
     * @param {Number} [digits] （可选）保留小数位数。默认值为 0。
     * @returns {String} 使用四舍五入法表示给定数值的字符串。
     */
    $toRound(digits?: number): string;
}
