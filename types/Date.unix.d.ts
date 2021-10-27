declare interface Date {
    /**
     * 设置 Unix 时间戳，并返回当前 Date 对象。
     * @param {Number} timestamp Unix 时间戳（单位：秒）。
     * @return {Date}
     */
    $unix(timestamp: number): this;

    /**
     * 获取 Unix 时间戳（单位：秒）。
     * @return {Number}
     */
    $unix(): number;
}
