interface PromiseConstructor {
    /**
     * 返回一个 Promise 对象，该 Promise 对象将在满足条件后触发 onFulfilled。
     * @param {Function} keepWaiting 指示 Promise 是否应保持阻塞的函数，每隔一段时间后会重复调用该函数、直到函数返回值为 true。
     * @param {Object} [result] （可选）Promise 对象触发 onFulfilled 时的返回值。
     * @param {Number} [interval] （可选）调用间隔时间（单位：毫秒）。
     * @returns {Promise} 一个 Promise 对象。
     */
    $waitUntil<T>(keepWaiting: (() => boolean) | (() => Promise<boolean>), result?: T | Promise<T>, interval?: number): Promise<T>;

    /**
     * 返回一个 Promise 对象，该 Promise 对象将在不满足条件后触发 onFulfilled。
     * @param {Function} keepWaiting 指示 Promise 是否应保持阻塞的函数，每隔一段时间后会重复调用该函数、直到函数返回值为 false。
     * @param {Object} [result] （可选）Promise 对象触发 onFulfilled 时的返回值。
     * @param {Number} [interval] （可选）调用间隔时间（单位：毫秒）。
     * @returns {Promise} 一个 Promise 对象。
     */
    $waitWhile<T>(keepWaiting: (() => boolean) | (() => Promise<boolean>), result?: T | Promise<T>, interval?: number): Promise<T>;
}
