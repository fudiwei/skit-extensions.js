declare interface Number {
    /**
     * 使用去尾法来格式化一个数。
     * @param {Number} [digits] （可选）保留小数位数。
     * @returns {String}
     */
    $toFloor(digits?: number): string;

    /**
     * 使用进一法来格式化一个数。
     * @param {Number} [digits] （可选）保留小数位数。
     * @returns {String}
     */
    $toCeil(digits?: number): string;

    /**
     * 使用四舍五入法法来格式化一个数。
     * @param {Number} [digits] （可选）保留小数位数。
     * @returns {Number}
     */
    $toRound(digits?: number): string;
}
