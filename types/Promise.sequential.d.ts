interface PromiseConstructor {
    /**
     * 返回一个 Promise 对象，该 Promise 对象将顺序依次执行传入的 Promise 对象数组后触发 onFulfilled。
     * @param {Array} promiseFns 待执行的 Promise 方法数组（需以函数形式包裹、函数的返回值是 Promise）。
     * @returns {Promise} 一个 Promise 对象。
     */
    $sequential<T = any>(promiseFns: ArrayLike<() => PromiseLike<T>>): PromiseLike<T[]>;

    /**
     * 返回一个 Promise 对象，该 Promise 对象将顺序依次执行传入的 Promise 对象数组后触发 onFulfilled。
     * @param {Array} promiseFns 待执行的 Promise 方法数组（需以函数形式包裹、函数的返回值是 Promise）。
     * @returns {Promise} 一个 Promise 对象。
     */
    $sequential(promiseFns: ArrayLike<() => PromiseLike<any>>): PromiseLike<any[]>;
}
