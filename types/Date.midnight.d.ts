declare interface Date {
    /**
     * 获取一个新的表示当天零时的日期对象。
     * @returns {Date} 一个表示当天零时的日期对象。
     */
    $midnight(): Date;
}
