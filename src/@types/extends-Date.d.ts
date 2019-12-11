// @ts-ignore
export default {};

declare global {
  interface DateConstructor {
    /**
     * 获取当前日期。
     * @returns {Date}
     */
    today(): Date;
  }

  interface Date {
    /**
     * 将该日期对象转化为指定格式的字符串。
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4个占位符，毫秒(f)只能用 1个占位符(是 1-3位的数字)。
     * @param {String} format 例："yyyy-MM-dd hh:mm:ss.fff"。
     * @returns {String}
     */
    toFormattedString(format: string): string;

    /**
     * 判断该日期对象指示的日期是否是周末。
     * @returns {Boolean}
     */
    isWeekend(): boolean;

    /**
     * 判断该日期对象指示的日期是否是今天。
     * @returns {Boolean}
     */
    isToday(): boolean;

    /**
     * 以 Unix 时间戳设置 Date 对象，并返回计算时区偏移量后的本地时间。
     * @param {Number} timestamp Unix 时间戳。
     * @param {Number} timezone 时间戳来源的时区（-12 ~ 12，默认值为表示东八区的 8）。
     * @return {Date}
     */
    setUnixTimestamp(timestamp: number, timezone?: number): Date;

    /**
     * 返回 Date 对象计算时区偏移量后的 Unix 时间戳。
     * @param {Number} timezone 时间戳目标的时区（-12 ~ 12，默认值为表示东八区的 8）。
     * @return {Number}
     */
    getUnixTimestamp(timezone?: number): number;

    /**
     * 返回该日期对象星期部分的字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    toLocaleDayString(locale?: string): string;

    /**
     * 返回该日期对象星期部分的缩写字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    toLocaleShortDayString(locale?: string): string;

    /**
     * 返回该日期对象月份部分的字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    toLocaleMonthString(locale?: string): string;

    /**
     * 返回该日期对象月份部分的缩写字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    toLocaleShortMonthString(locale?: string): string;
  }
}
