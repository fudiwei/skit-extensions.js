interface Date {
    /**
     * 设置 Unix 时间戳。
     * @param {Number} timestamp Unix 时间戳（单位：秒）。
     * @return {Date}
     */
    $unix(timestamp: number): Date;

    /**
     * 获取 Unix 时间戳（单位：秒）。
     * @return {Number}
     */
    $unix(): number;
}
