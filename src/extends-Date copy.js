(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    let systemLanguage;
    if ('object' === typeof wx && 'function' === typeof wx['getSystemInfoSync']) {
        systemLanguage = wx.getSystemInfoSync().language;
    } else if ('object' === typeof navigator && 'string' === typeof navigator['language']) {
        systemLanguage = (navigator.languages && navigator.languages[0]) || navigator.language;
    }

    if (!isFunction(Date.today)) {
        Object.defineProperty(Date, 'today', {
            value: function () {
                const date = new Date();
                return new Date(date.getFullYear(), date.getMonth(), date.getDate());
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Date.prototype.toFormattedString)) {
        Object.defineProperty(Date.prototype, 'toFormattedString', {
            value: function (format) {
                const O = {
                    'M+': this.getMonth() + 1,
                    'd+': this.getDate(),
                    'H+': this.getHours(),
                    'h+': this.getHours(),
                    'm+': this.getMinutes(),
                    's+': this.getSeconds(),
                    'q+': Math.floor((this.getMonth() + 3) / 3),
                    f: this.getMilliseconds(),
                };
                if (/(y+)/.test(format)) {
                    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                for (let k in O) {
                    if (new RegExp('(' + k + ')').test(format)) {
                        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? O[k] : ('00' + O[k]).substr(('' + O[k]).length));
                    }
                }
                return format;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Date.prototype.isWeekend)) {
        Object.defineProperty(Date.prototype, 'isWeekend', {
            value: function () {
                return this.getDay() % 7 === 0 || this.getDay() % 7 === 6;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Date.prototype.isToday)) {
        Object.defineProperty(Date.prototype, 'isToday', {
            value: function () {
                const now = new Date();
                return this.getFullYear() === now.getFullYear() && this.getMonth() === now.getMonth() && this.getDate() === now.getDate();
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Date.prototype.setUnixTimestamp)) {
        Object.defineProperty(Date.prototype, 'setUnixTimestamp', {
            value: function (timestamp, timezone = 8) {
                if (isNaN(timestamp)) {
                    throw 'Timestamp must be a number.';
                }
                if (timezone < -12 || timezone > 12) {
                    throw 'Timezone must be a number between -12 to 12.';
                }

                const date = new Date(timestamp * 1000);
                this.setTime(date.getTime() + (parseInt(timezone) * 60 + date.getTimezoneOffset()) * 60000);
                return this;
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Date.prototype.getUnixTimestamp)) {
        Object.defineProperty(Date.prototype, 'getUnixTimestamp', {
            value: function (timezone = 8) {
                if (timezone < -12 || timezone > 12) {
                    throw 'Timezone must be a number between -12 to 12.';
                }

                const millistamp = this.getTime() - (parseInt(timezone) * 60 + this.getTimezoneOffset()) * 60000;
                return parseInt(millistamp / 1000);
            },
            enumerable: false,
            configurable: false,
        });
    }
})();
