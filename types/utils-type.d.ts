export namespace SKIT.JSUtils {
    export interface TypeUtil {}

    export interface TypeUtilConstructor<T extends TypeUtil = TypeUtil> {
        /**
         * 判断对象值是否是 null。
         * @param {Object} obj
         * @return {Boolean}
         */
        isNull(obj: any): boolean;

        /**
         * 判断对象值是否是 undefined。
         * @param {Object} obj
         * @return {Boolean}
         */
        isUndefined(obj: any): boolean;

        /**
         * 判断对象值是否是 null 或 undefined。
         * @param {Object} obj
         * @return {Boolean}
         */
        isNullOrUndefined(obj: any): boolean;

        /**
         * 判断对象是否是 Number 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isNumber(obj: any): boolean;

        /**
         * 判断对象是否是 String 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isString(obj: any): boolean;

        /**
         * 判断对象是否是 Boolean 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isBoolean(obj: any): boolean;

        /**
         * 判断对象是否是 Object 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isObject(obj: any): boolean;

        /**
         * 判断对象是否与 Object 类型类似。
         * @param {Object} obj
         * @return {Boolean}
         */
        isObjectLike(obj: any): boolean;

        /**
         * 判断对象是否是 Array 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isArray(obj: any): boolean;

        /**
         * 判断对象是否是 Function 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isFunction(obj: any): boolean;

        /**
         * 判断对象是否是 Date 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isDate(obj: any): boolean;

        /**
         * 判断对象是否是 FormData 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isFormData(obj: any): boolean;

        /**
         * 判断对象是否是 Promise 类型。
         * @param {Object} obj
         * @return {Boolean}
         */
        isPromise(obj: any): boolean;

        /**
         * 判断对象是否与 Promise 类型类似（判断是否包含 .then()，一般用于 polyfill 引入的 Promise 第三方库）。
         * @param {Object} obj
         * @return {Boolean}
         */
        isPromiseLike(obj: any): boolean;
    }

    export const $$: TypeUtilConstructor;
}
