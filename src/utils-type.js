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

    $.isNull = (obj) => obj === null;

    $.isUndefined = (obj) => obj === void 0;

    $.isNullOrUndefined = (obj) => $.isNull(obj) || $.isUndefined(obj);

    $.isNumber = (obj) => '[object Number]' === Object.prototype.toString.call(obj);

    $.isString = (obj) => '[object String]' === Object.prototype.toString.call(obj);

    $.isBoolean = (obj) => '[object Boolean]' === Object.prototype.toString.call(obj);

    $.isObject = (obj) => '[object Object]' === Object.prototype.toString.call(obj);

    $.isObjectLike = (obj) => $.isObject(obj) || (!$.isNullOrUndefined(obj) && typeof val === 'object');

    $.isArray = (obj) => Array.isArray(obj);

    $.isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    $.isDate = (obj) => '[object Date]' === Object.prototype.toString.call(obj);

    $.isFormData = (obj) => '[object FormData]' === Object.prototype.toString.call(obj);

    $.isPromise = (obj) => '[object Promise]' === Object.prototype.toString.call(obj);

    $.isPromiseLike = (obj) => $.isPromise(obj) || ((typeof obj === 'object' || typeof obj === 'function') &&
	typeof obj.then === 'function');

    return $;
}));