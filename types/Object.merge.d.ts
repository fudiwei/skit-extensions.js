declare interface ObjectConstructor {
    /**
     * 将所有可枚举属性的值从一个或多个源对象分配到目标对象，并返回目标对象。
     * 类似 `Object.assign`，但支持深层属性拷贝。
     * @param {Object} target 目标对象。
     * @param {Object} source 源对象。
     * @returns {Object} 目标对象。
     */
    $merge<T, U>(target: T, source: U): T & U;

    /**
     * 将所有可枚举属性的值从一个或多个源对象分配到目标对象，并返回目标对象。
     * 类似 `Object.assign`，但支持深层属性拷贝。
     * @param {Object} target 目标对象。
     * @param {Object} source 源对象。
     * @param {Object} source2 源对象。
     * @returns {Object} 目标对象。
     */
    $merge<T, U, V>(target: T, source1: U, source2: V): T & U & V;

    /**
     * 将所有可枚举属性的值从一个或多个源对象分配到目标对象，并返回目标对象。
     * 类似 `Object.assign`，但支持深层属性拷贝。
     * @param {Object} target 目标对象。
     * @param {Object} source 源对象。
     * @param {Object} source2 源对象。
     * @param {Object} source3 源对象。
     * @returns {Object} 目标对象。
     */
    $merge<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

    /**
     * 将所有可枚举属性的值从一个或多个源对象分配到目标对象，并返回目标对象。
     * 类似 `Object.assign`，但支持深层属性拷贝。
     * @param {Object} target 目标对象。
     * @param {Array} sources 源对象。
     * @returns {Object} 目标对象。
     */
    $merge(target: object, ...sources: any[]): any;
}
