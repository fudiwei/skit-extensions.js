export default {};

declare global {
  interface Number {
    /**
     * 使用去尾法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {String}
     */
    toFloor(num?: Number): String;

    /**
     * 使用进一法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {String}
     */
    toCeil(num?: Number): String;

    /**
     * 使用四舍五入法法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {Number}
     */
    toRound(num?: Number): String;

    /**
     * 判断一个 Number 是否是奇数。
     * @returns {Boolean}
     */
    isOdd(): Boolean;

    /**
     * 判断一个 Number 是否是偶数。
     * @returns {Boolean}
     */
    isEven(): Boolean;
  }
}
