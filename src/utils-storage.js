(function moduleDefinition(root, factory) {
    const $ = '$$storage';

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

    let rootObj;
    if ('object' === typeof wx && 'function' === typeof wx['canIUse']) {
        rootObj = wx;
    } else if ('object' === typeof my && 'function' === typeof my['canIUse']) {
        rootObj = my;
    } else if ('object' === typeof swan && 'function' === typeof swan['canIUse']) {
        rootObj = swan;
    } else if ('object' === typeof tt && 'function' === typeof tt['caniuse']) {
        rootObj = tt;
    }

    let Storage;
    if (!!rootObj) {
        Storage = {
            setItem: (key, value) => rootObj.setStorageSync(key, value),
            getItem: (key) => rootObj.getStorageSync(key),
            removeItem: (key) => rootObj.removeStorageSync(key),
            clear: () => rootObj.clearStorageSync(),
            key: (i) => rootObj.getStorageInfoSync().keys[i],
            get length() {
                return rootObj.getStorageInfoSync().keys.length;
            }
        };
    } else if ('object' === typeof localStorage) {
        Storage = localStorage;
    } else {
        const throwError = () => { throw new Error('Current environment does not supported $storage') };
        Storage = {
            setItem: throwError,
            getItem: throwError,
            removeItem: throwError,
            clear: throwError,
            key: throwError,
            length: undefined
        }
    }

    const isArray = (obj) => '[object Array]' === Object.prototype.toString.call(obj);
    const isBoolean = (obj) => '[object Boolean]' === Object.prototype.toString.call(obj);
    const isNumber = (obj) => '[object Number]' === Object.prototype.toString.call(obj);
    const isObject = (obj) => '[object Object]' === Object.prototype.toString.call(obj);
    const PREFIX_JSON = '_j_:',
        PREFIX_Number = '_n_:',
        PREFIX_Boolean = '_b_:',
        PREFIX_String = '_s_:';

    $.setItem = (key, value) => {
        if (void 0 === value || null === value) {
            Storage.removeItem(key, value);
        } else {
            if (isObject(value) || isArray(value)) {
                value = PREFIX_JSON + JSON.stringify(value);
            } else if (isNumber(value)) {
                value = PREFIX_Number + String(value);
            } else if (isBoolean(value)) {
                value = PREFIX_Boolean + String(value);
            } else {
                value = PREFIX_String + value;
            }

            Storage.setItem(key, value);
        }
    };

    $.getItem = (key, defaultVal) => {
        let value = Storage.getItem(key);

        if (void 0 === value || null === value) {
            if (void 0 !== defaultVal) {
                return defaultVal;
            } else {
                return null;
            }
        }

        if (value.startsWith(PREFIX_JSON)) {
            try {
                return JSON.parse(value.substring(PREFIX_JSON.length));
            } catch (err) {}
        } else if (value.startsWith(PREFIX_Number)) {
            return +value.substring(PREFIX_Number.length);
        } else if (value.startsWith(PREFIX_Boolean)) {
            return 'true' === value.substring(PREFIX_Boolean.length);
        } else if (value.startsWith(PREFIX_String)) {
            return value.substring(PREFIX_String.length);
        }

        return value;
    };

    $.removeItem = (key) => {
        Storage.removeItem(key);
    };

    $.clear = () => {
        Storage.clear();
    };

    $.keys = () => {
        const res = [];
        for (let i = 0, len = Storage.length; i < len; i++) {
            res.push(Storage.key(i));
        }
        return res;
    };

    return $;
}));