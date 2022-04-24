declare interface ArrayConstructor {
    /**
     * 基于 Fisher-Yates Shuffle 洗牌算法，返回一个随机打乱元素顺序的新数组。
     * @param {Array} array 要乱序的数组。
     * @returns {Array} 乱序后的新数组。
     */
    $shuffle<T>(array: ArrayLike<T>): T[];
}

declare interface Array<T> {
    /**
     * 基于 Fisher-Yates Shuffle 洗牌算法，返回一个随机打乱元素顺序的新数组。
     * @returns {Array} 乱序后的新数组。
     */
    $shuffle(): T[];
}
