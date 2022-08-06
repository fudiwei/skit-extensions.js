declare interface Date {
    /**
     * 返回一个新的日期对象，它将指定的毫秒数加到此实例的值上。
     * @param {Number} milliseconds 要添加的毫秒数。
     * @returns {Date} 一个新的日期对象。
     */
    $addMilliseconds(milliseconds: number): Date;

    /**
     * 返回一个新的日期对象，它将指定的秒数加到此实例的值上。
     * @param {Number} seconds 要添加的秒数。
     * @returns {Date} 一个新的日期对象。
     */
    $addSeconds(seconds: number): Date;

    /**
     * 返回一个新的日期对象，它将指定的分钟数加到此实例的值上。
     * @param {Number} minutes 要添加的分钟数。
     * @returns {Date} 修改后的日期对象。
     */
    $addMinutes(minutes: number): Date;

    /**
     * 返回一个新的日期对象，它将指定的小时数加到此实例的值上。
     * @param {Number} hours 要添加的小时数。
     * @returns {Date} 一个新的日期对象。
     */
    $addHours(hours: number): Date;

    /**
     * 返回一个新的日期对象，它将指定的天数加到此实例的值上。
     * @param {Number} days 要添加的天数。
     * @returns {Date} 一个新的日期对象。
     */
    $addDays(days: number): Date;

    /**
     * 返回一个新的日期对象，它将指定的月数加到此实例的值上。
     * @param {Number} months 要添加的月数。如果传入的是小数，将四舍五入到最接近的整数。
     * @returns {Date} 一个新的日期对象。
     */
    $addMonths(months: number): Date;

    /**
     * 返回一个新的日期对象，它将指定的年数加到此实例的值上。
     * @param {Number} years 要添加的年数。如果传入的是小数，将四舍五入到最接近的整数。
     * @returns {Date} 一个新的日期对象。
     */
    $addYears(years: number): Date;
}
