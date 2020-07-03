(function moduleDefinition(root, factory) {
    const $ = '$$regex';

    if ('object' === typeof wx && 'object' === typeof module && !!wx.login) {
        module.exports[$] = factory(); /* Wechat Mini-Program */
    } else if ('object' === typeof my && 'object' === typeof module && !!my.login) {
        module.exports[$] = factory(); /* Alipay Mini-Program */
    } else if ('object' === typeof swan && 'object' === typeof module && !!swan.login) {
        module.exports[$] = factory(); /* Baidu Smart-Program */
    } else if ('object' === typeof tt && 'object' === typeof module && !!tt.login) {
        module.exports[$] = factory(); /* Toutiao Mini-App */
    } else if ('object' === typeof exports && 'object' === typeof module) {
        module.exports[$] = factory(); /* CommonJS */
    } else if ('function' === typeof define && (define.amd || define.cmd)) {
        define($, factory); // AMD/CMD */
    } else if (root) {
        root[$] = factory();
    }
})(this, (() => {
    'use strict';
    const $ = {};

    $.isNumeric = (value) => {
        return /^[+-]?\d*[.]?\d*$/.test(value);
    };

    $.isIntegerNumeric = (value) => {
        return /^[+-]?\d*$/.test(value);
    };

    $.isEmail = (value) => {
        return /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/.test(value);
    };

    $.isMobilephone = (value) => {
        return /^[1][3,4,5,6,7,8,9]\d{9}$/.test(value);
    };

    $.isQQNumber = (value) => {
        return /^\d{5,10}$/.test(value);
    };

    $.isWechatNumber = (value) => {
        return /^[a-zA-Z]{1}[-_a-zA-Z\d]{5,19}$/.test(value);
    };

    $.isIDCardNumber = (value) => {
        value = String(value);
        if (!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/.test(value)) {
            return false;
        }

        const cities = {
            11: '北京',
            12: '天津',
            13: '河北',
            14: '山西',
            15: '内蒙古',
            21: '辽宁',
            22: '吉林',
            23: '黑龙江 ',
            31: '上海',
            32: '江苏',
            33: '浙江',
            34: '安徽',
            35: '福建',
            36: '江西',
            37: '山东',
            41: '河南',
            42: '湖北 ',
            43: '湖南',
            44: '广东',
            45: '广西',
            46: '海南',
            50: '重庆',
            51: '四川',
            52: '贵州',
            53: '云南',
            54: '西藏 ',
            61: '陕西',
            62: '甘肃',
            63: '青海',
            64: '宁夏',
            65: '新疆',
            71: '台湾',
            81: '香港',
            82: '澳门',
            91: '国外 '
        };
        if (!cities[value.substr(0, 2)]) {
            return false;
        }

        if (18 === value.length) {
            const code = value.split('');
            const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            let sum = 0;
            for (let i = 0; i < 17; i++) {
                sum += code[i] * factor[i];
            }
            return String(parity[sum % 11]) === String(code[17]);
        } else if (15 === value.length) {
            return true;
        } else {
            return false;
        }
    };

    $.filterHtml = (html) => {
        return String(html || '')
            .replace(/(&quot;)/g, '"')
            .replace(/(&nbsp;)/g, ' ')
            .replace(/(&lt;)/g, '<')
            .replace(/(&gt;)/g, '>')
            .replace(/(&amp;)/g, '&')
            .replace(/<br\s*\/?\s*>/ig, '\r\n')
            .replace(/<[^>]+>/g, '');
    };

    return $;
}));