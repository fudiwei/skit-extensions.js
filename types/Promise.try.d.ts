declare interface PromiseConstructor {
    /**
     * 将方法返回值转换为 Promise 对象并返回，且不改变同步执行方式，任何同步异常都将被包裹在 Promise 中返回。
     * @param {Function} fn 待执行函数。
     * @returns {Promise} 一个 Promise 对象。
     */
    $try<T = void>(fn: () => T | PromiseLike<T>): Promise<T>;
    $try<T = void>(fn: (...args: any[]) => T | PromiseLike<T>): Promise<T>;
}
