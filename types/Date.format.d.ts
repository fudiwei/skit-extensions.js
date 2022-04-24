declare interface Date {
    /**
     * 将日期对象转化为指定格式的字符串。
     * @param {String} [format] （可选）格式化字符串。月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，年(y) 可以用 1-4 个占位符，毫秒(f) 只能用 1 个占位符。默认值为 "yyyy-MM-dd hh:mm:ss.fff"。
     * @returns {String} 格式化后的日期字符串。
     */
    $format(format?: string): string;
}
