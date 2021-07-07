declare interface Date {
    /**
     * 将指定的月数加到此 Date 对象的值上。此方法会改变原 Date。
     * 注意因月份天数不等时的特殊处理。
     * @param {Number} months 月数。如果传入的是小数，将四舍五入到最接近的整数。
     * @returns {Date}
     */
    $addMonths(months: number): this;

    /**
     * 将指定的年数加到此 Date 对象的值上。此方法会改变原 Date。
     * 注意因年数天数不等时的特殊处理。
     * @param {Number} years 年数。如果传入的是小数，将四舍五入到最接近的整数。
     * @returns {Date}
     */
    $addYears(years: number): this;
}
