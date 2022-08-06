declare type DebouncedFunc<T extends (...args: any) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;

declare interface FunctionConstructor {
    /**
     * 返回一个新的函数，该函数在规定时间内如果被频繁调用、则只最后一次会被执行（即函数防抖）。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 抖动时间（单位：毫秒）。
     * @returns {Function} 设置防抖后的新函数。
     */
    $debounce<R = void>(fn: () => R, wait: number): DebouncedFunc<typeof fn>;
    $debounce<R = void>(fn: (...args: any[]) => R, wait: number): DebouncedFunc<typeof fn>;
    $debounce<T = any, R = void>(fn: (arg1?: T) => R, wait: number): DebouncedFunc<typeof fn>;
    $debounce<T = any, U = any, R = void>(fn: (arg1?: T, arg2?: U) => R, wait: number): DebouncedFunc<typeof fn>;
    $debounce<T = any, U = any, V = any, R = void>(fn: (arg1?: T, arg2?: U, arg3?: V) => R, wait: number): DebouncedFunc<typeof fn>;
    $debounce<T = any, U = any, V = any, W = any, R = void>(fn: (arg1?: T, arg2?: U, arg3?: V, arg4?: W) => R, wait: number): DebouncedFunc<typeof fn>;
}
