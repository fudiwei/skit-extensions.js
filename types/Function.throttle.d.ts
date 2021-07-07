declare interface FunctionConstructor {
    /**
     * 返回一个新的函数，该函数如果被调用、则在规定时间后才会被第二次执行，即“函数节流”。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 节流时间（单位：毫秒）。
     * @returns {Function}
     */
    $throttle(fn: Function, wait: number): Function;
}
