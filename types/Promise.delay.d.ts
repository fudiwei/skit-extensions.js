declare interface PromiseConstructor {
    /**
     * 返回一个延迟一段时间后成功的 Promise 对象。
     * @param {Number} ms 要延迟的时间（单位：毫秒）。
     * @param {Object} [result] （可选）onFulfilled 时的返回值。
     * @returns {Promise}
     */
    $delay<T = any>(ms?: number, result?: T): Promise<T>;
}
