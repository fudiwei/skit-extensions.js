declare interface Date {
    /**
     * 判断日期对象是否在当天内。
     * @returns {Boolean} 如果日期对象在当天内，则返回 true，否则返回 false。
     */
    $isToday(): boolean;
}
