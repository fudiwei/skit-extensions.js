interface Date {
    /**
     * 将该日期对象转化为指定格式的字符串。
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y) 可以用 1-4 个占位符，毫秒(f) 只能用 1 个占位符。
     * 例："yyyy-MM-dd hh:mm:ss.fff"。
     * @param {String} [format] （可选）格式。
     * @returns {String}
     */
    $format(format?: string): string;
}
