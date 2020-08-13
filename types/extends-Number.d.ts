// @ts-ignore
export default {};

declare global {
    interface Number {
        /**
         * 使用去尾法来格式化一个数。
         * @param {Number} num 保留小数位数。
         * @returns {String}
         */
        toFloor(num?: number): string;

        /**
         * 使用进一法来格式化一个数。
         * @param {Number} num 保留小数位数。
         * @returns {String}
         */
        toCeil(num?: number): string;

        /**
         * 使用四舍五入法法来格式化一个数。
         * @param {Number} num 保留小数位数。
         * @returns {Number}
         */
        toRound(num?: number): string;

        /**
         * 判断一个 Number 是否是奇数。
         * @returns {Boolean}
         */
        isOdd(): boolean;

        /**
         * 判断一个 Number 是否是偶数。
         * @returns {Boolean}
         */
        isEven(): boolean;
    }

    interface NumberConstructor {
        /**
         * 确定传递的值是否是一个有穷的 Number 类型、或可转换成有穷数的 String 类型。
         * @param {Object} val
         * @returns {Boolean}
         */
        isNumber(val: any): boolean;
    }
}
