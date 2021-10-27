declare interface ArrayConstructor {
    /**
     * 基于 Fisher-Yates Shuffle 洗牌算法，将一个数组的元素顺序随机打乱，并返回乱序后的新数组。原始数组不会被改变。
     * @param {Array} array 要乱序的数组。
     * @returns {Array}
     */
    $shuffle<T>(array: ArrayLike<T>): T[];
}

declare interface Array<T> {
    /**
     * 基于 Fisher-Yates Shuffle 洗牌算法，返回一个随机打乱元素顺序的新数组。原始数组不会被改变。
     * @returns {Array}
     */
    $shuffle(): Array<T>;
}
