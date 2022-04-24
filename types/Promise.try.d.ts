declare interface PromiseConstructor {
    /**
     * 将方法返回值转换为 Promise 对象并返回，且不改变同步执行方式，任何同步异常都将被包裹在 Promise 中返回。
     * @param {Function} fn 待执行函数。
     * @returns {Promise} 一个 Promise 对象。
     */
    $try<R = void>(fn: () => R): Promise<R>;
    $try<R = void>(fn: (...args: any[]) => R): Promise<R>;
}
