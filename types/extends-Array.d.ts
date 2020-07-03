// @ts-ignore
export default {};

declare global {
    interface Array<T> {
        /**
         * 返回一个仅包含去重元素的新数组。
         * @param {Function} [comparerFn] 比较两个元素是否相等的函数。
         * @returns {Array}
         */
        distinct(comparerFn?: (x: T, y: T) => boolean): Array<T>;
    }
}
