declare interface ObjectConstructor {
    /**
     * 执行深度比较来确定两个对象的值是否相等。
     * @param {Object} obj1 第一个待比较对象。
     * @param {Object} obj2 第二个待比较对象。
     * @returns {Boolean} 比较结果。
     */
    $deepEquals<T = any, U = any>(obj1: T, obj2: U): boolean;
}
