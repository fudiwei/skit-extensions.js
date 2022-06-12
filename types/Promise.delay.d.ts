declare interface PromiseConstructor {
    /**
     * 返回一个 Promise 对象，该 Promise 对象将在延迟一段时间后触发 onFulfilled。
     * @param {Number} wait 要延迟的时间（单位：毫秒）。
     * @param {Object} [result] （可选）Promise 对象触发 onFulfilled 时的返回值。
     * @returns {Promise} 一个 Promise 对象。
     */
    $delay<T = any>(wait?: number, result?: T | PromiseLike<T>): Promise<T>;
}
