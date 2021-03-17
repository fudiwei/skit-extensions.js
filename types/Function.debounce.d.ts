interface FunctionConstructor {
    /**
     * 返回一个新的函数，该函数在规定时间内如果被频繁调用、则只最后一次会被执行，即“函数防抖”。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 抖动时间（单位：毫秒）。
     * @returns {Function}
     */
    $debounce(fn: Function, wait: number): Function;
}
