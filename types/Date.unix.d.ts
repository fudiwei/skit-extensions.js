declare interface DateConstructor {
    /**
     * 返回一个代表指定 Unix 时间戳的日期对象。
     * @param {Number} timestamp 指定的 Unix 时间戳（单位：秒）。
     * @return {Date} 一个表示指定时间的日期对象。
     */
    $unix(timestamp: number): Date;
}

declare interface Date {
    /**
     * 设置一个日期对象为指定的 Unix 时间戳，
     * @param {Number} timestamp 指定的 Unix 时间戳（单位：秒）。
     * @return {Date} 修改后的日期对象。
     */
    $unix(timestamp: number): this;

    /**
     * 获取一个日期对象的 Unix 时间戳。
     * @return {Number} 表示该日期对象的 Unix 时间戳（单位：秒）
     */
    $unix(): number;
}
