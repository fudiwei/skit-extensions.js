export default {};

declare global {
  interface PromiseConstructor {
    /**
     * 返回一个延迟一段时间后成功的 Promise 对象。
     * @param {Number} ms 要延迟的时间（单位：毫秒）。
     * @param {Object} [value] Promise 的返回值。
     * @returns {Promise}
     */
    delay(ms?: number, value?: any): Promise<any>;

    /**
     * 顺序执行多个 Promise。
     * @param {Array} promises 待执行的 Promise 数组（需以函数形式包裹、函数的返回值是 Promise）。
     * @returns {Promise}
     */
    sequential(tasks: Array<Promise<any>>): Promise<Array<any>>;
  }
}
