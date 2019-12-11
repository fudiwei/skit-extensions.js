// @ts-ignore
export default {};

declare global {
  interface FunctionConstructor {
    /**
     * 返回一个新的函数，该函数在规定时间内如果被频繁调用、则只最后一次会被执行，即函数防抖。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 抖动时间（单位：毫秒）。
     * @returns {Function}
     */
    debounce(fn: Function, wait: number): Function;

    /**
     * 返回一个新的函数，该函数如果被调用、则在规定时间后才会被第二次执行，即函数节流。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 节流时间（单位：毫秒）。
     * @returns {Function}
     */
    throttle(fn: Function, wait: number): Function;
  }
}
