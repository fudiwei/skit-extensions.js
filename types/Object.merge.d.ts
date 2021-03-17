declare interface ObjectConstructor {
    /**
     * 类似 Object.assign，但支持深层属性拷贝。
     * @param {Object} target
     * @param {Object} source
     * @returns {Object}
     */
    $merge<T, U>(target: T, source: U): T & U;

    /**
     * 类似 Object.assign，但支持深层属性拷贝。
     * @param {Object} target
     * @param {Object} source1
     * @param {Object} source2
     * @returns {Object}
     */
    $merge<T, U, V>(target: T, source1: U, source2: V): T & U & V;

    /**
     * 类似 Object.assign，但支持深层属性拷贝。
     * @param {Object} target
     * @param {Object} source1
     * @param {Object} source2
     * @param {Object} source3
     * @returns {Object}
     */
    $merge<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

    /**
     * 类似 Object.assign，但支持深层属性拷贝。
     * @param {Object} target
     * @param {Array} sources
     * @returns {Object}
     */
    $merge(target: object, ...sources: any[]): any;
}
