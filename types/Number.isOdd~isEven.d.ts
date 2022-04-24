declare interface NumberConstructor {
    /**
     * 判断数值是否是奇数。
     * @param {Number} num 被检测的数值。
     * @returns {Boolean} 如果被检测的数值是奇数，则返回 true，否则返回 false。
     */
    $isOdd(num: number): boolean;

    /**
     * 判断数值是否是偶数。
     * @param {Number} num 被检测的数值。
     * @returns {Boolean} 如果被检测的数值是偶数，则返回 true，否则返回 false。
     */
    $isEven(num: number): boolean;
}
