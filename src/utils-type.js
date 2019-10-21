(function moduleDefinition(root, factory) {
    const $ = '$$';

    if ('object' === typeof wx && 'object' === typeof module && !!wx.login) {
        module.exports[$] = factory(); // Wechat Mini-Program
    } else if ('object' === typeof my && 'object' === typeof module && !!my.login) {
        module.exports[$] = factory(); // Alipay Mini-Program
    } else if ('object' === typeof swan && 'object' === typeof module && !!swan.login) {
        module.exports[$] = factory(); // Baidu Smart-Program
    } else if ('object' === typeof tt && 'object' === typeof module && !!tt.login) {
        module.exports[$] = factory(); // Toutiao Mini-App
    } else if ('object' === typeof exports && 'object' === typeof module) {
        module.exports[$] = factory(); // CommonJS
    } else if ('function' === typeof define && (define.amd || define.cmd)) {
        define(factory); // AMD/CMD
    } else if ('object' === typeof exports) {
        exports[$] = factory();
    } else if (root) {
        root[$] = factory();
    }
})(this, (() => {
    'use strict';
    const $ = {};

    /**
     * 判断对象值是否是 null。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isNull = (obj) => null === obj;

    /**
     * 判断对象值是否是 undefined。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isUndefined = (obj) => undefined === obj;

    /**
     * 判断对象值是否是 null 或 undefined。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isNullOrUndefined = (obj) => $.isNull(obj) || $.isUndefined(obj);

    /**
     * 判断对象是否是 Number 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isNumber = (obj) => '[object Number]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 String 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isString = (obj) => '[object String]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 Boolean 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isBoolean = (obj) => '[object Boolean]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 Object 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isObject = (obj) => '[object Object]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 Array 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isArray = (obj) => '[object Array]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 Function 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 Date 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isDate = (obj) => '[object Date]' === Object.prototype.toString.call(obj);

    /**
     * 判断对象是否是 FormData 类型。
     * @param {Object} obj
     * @return {Boolean}
     */
    $.isFormData = (obj) => '[object FormData]' === Object.prototype.toString.call(obj);

    return $;
}));