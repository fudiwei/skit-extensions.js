declare interface NumberConstructor {
    /**
     * 判断一个 Number 是否是奇数。
     * @param {Number}
     * @returns {Boolean}
     */
    $isOdd(num: number): boolean;

    /**
     * 判断一个 Number 是否是偶数。
     * @param {Number}
     * @returns {Boolean}
     */
    $isEven(num: number): boolean;
}
