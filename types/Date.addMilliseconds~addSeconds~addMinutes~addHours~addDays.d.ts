declare interface Date {
    /**
     * 将指定的毫秒数加到此 Date 对象的值上。此方法会改变原 Date。
     * @param {Number} milliseconds 毫秒数。
     * @returns {Date}
     */
    $addMilliseconds(milliseconds: number): this;

    /**
     * 将指定的秒数加到此 Date 对象的值上。此方法会改变原 Date。
     * @param {Number} seconds 秒数。
     * @returns {Date}
     */
    $addSeconds(seconds: number): this;

    /**
     * 将指定的分钟数加到此 Date 对象的值上。此方法会改变原 Date。
     * @param {Number} minutes 分钟数。
     * @returns {Date}
     */
    $addMinutes(minutes: number): this;

    /**
     * 将指定的小时数加到此 Date 对象的值上。此方法会改变原 Date。
     * @param {Number} hours 小时数。
     * @returns {Date}
     */
    $addHours(hours: number): this;

    /**
     * 将指定的天数加到此 Date 对象的值上。此方法会改变原 Date。
     * @param {Number} days 天数。
     * @returns {Date}
     */
    $addHours(days: number): this;
}
