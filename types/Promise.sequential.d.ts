interface PromiseConstructor {
    /**
     * 顺序执行多个 Promise。
     * @param {Array} promiseFns 待执行的 Promise 数组（需以函数形式包裹、函数的返回值是 Promise）。
     * @returns {Promise}
     */
    $sequential<T = any>(promiseFns: Array<() => Promise<T>>): Promise<Array<T>>;
}
