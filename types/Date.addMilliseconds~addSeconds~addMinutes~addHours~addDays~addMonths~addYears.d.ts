declare interface Date {
    /**
     * 为一个日期对象添加指定的毫秒数。
     * @param {Number} milliseconds 要添加的毫秒数。
     * @returns {Date} 修改后的日期对象。
     */
    $addMilliseconds(milliseconds: number): this;

    /**
     * 为一个日期对象添加指定的秒数。
     * @param {Number} seconds 要添加的秒数。
     * @returns {Date} 修改后的日期对象。
     */
    $addSeconds(seconds: number): this;

    /**
     * 为一个日期对象添加指定的分钟数。
     * @param {Number} minutes 要添加的分钟数。
     * @returns {Date} 修改后的日期对象。
     */
    $addMinutes(minutes: number): this;

    /**
     * 为一个日期对象添加指定的小时数。
     * @param {Number} hours 要添加的小时数。
     * @returns {Date} 修改后的日期对象。
     */
    $addHours(hours: number): this;

    /**
     * 为一个日期对象添加指定的天数。
     * @param {Number} days 要添加的天数。
     * @returns {Date} 修改后的日期对象。
     */
    $addHours(days: number): this;

    /**
     * 为一个日期对象添加指定的月数。
     * @param {Number} months 要添加的月数。如果传入的是小数，将四舍五入到最接近的整数。
     * @returns {Date} 修改后的日期对象。
     */
    $addMonths(months: number): this;

    /**
     * 为一个日期对象添加指定的年数。
     * @param {Number} years 要添加的年数。如果传入的是小数，将四舍五入到最接近的整数。
     * @returns {Date} 修改后的日期对象。
     */
    $addYears(years: number): this;
}
