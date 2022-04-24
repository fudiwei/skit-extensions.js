declare interface FunctionConstructor {
    /**
     * 返回一个新的函数，该函数如果被调用、则在规定时间后才会被第二次执行（即函数节流）。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 节流时间（单位：毫秒）。
     * @returns {Function} 设置节流后的新函数。
     */
    $throttle<R = void>(fn: () => R, wait: number): typeof fn;
    $throttle<R = void>(fn: (...args: any[]) => R, wait: number): typeof fn;
    $throttle<T = any, R = void>(fn: (arg1?: T) => R, wait: number): typeof fn;
    $throttle<T = any, U = any, R = void>(fn: (arg1?: T, arg2?: U) => R, wait: number): typeof fn;
    $throttle<T = any, U = any, V = any, R = void>(fn: (arg1?: T, arg2?: U, arg3?: V) => R, wait: number): typeof fn;
    $throttle<T = any, U = any, V = any, W = any, R = void>(fn: (arg1?: T, arg2?: U, arg3?: V, arg4?: W) => R, wait: number): typeof fn;
}
