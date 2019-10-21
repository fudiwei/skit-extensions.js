(() => {
    'use strict';

    let systemLanguage;
    if ('object' === typeof wx && 'function' === typeof wx['getSystemInfoSync']) {
        systemLanguage = wx.getSystemInfoSync().language;
    } else if ('object' === typeof navigator && 'string' === typeof navigator['language']) {
        systemLanguage = (navigator.languages && navigator.languages[0]) || navigator.language;
    }

    /**
     * 获取当前日期。
     * @returns {Date}
     */
    Date.today = function () {
        const date = new Date();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };

    /**
     * 将该日期对象转化为指定格式的字符串。
     * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
     * 年(y)可以用 1-4个占位符，毫秒(f)只能用 1个占位符(是 1-3位的数字)。
     * @param {String} format 例："yyyy-MM-dd hh:mm:ss.fff"。
     * @returns {String}
     */
    Date.prototype.toFormattedString = function (format) {
        const O = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "H+": this.getHours(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "f": this.getMilliseconds()
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in O) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (O[k]) : (("00" + O[k]).substr(("" + O[k]).length)));
            }
        }
        return format;
    };

    /**
     * 判断该日期对象指示的日期是否是周末。
     * @returns {Boolean}
     */
    Date.prototype.isWeekend = function () {
        return this.getDay() % 7 === 0 || this.getDay() % 7 === 6;
    };

    /**
     * 判断该日期对象指示的日期是否是今天。
     * @returns {Boolean}
     */
    Date.prototype.isToday = function () {
        const now = new Date();
        return this.getFullYear() === now.getFullYear() && this.getMonth() === now.getMonth() && this.getDate() === now.getDate();
    };

    /**
     * 以 Unix 时间戳设置 Date 对象，并返回计算时区偏移量后的本地时间。
     * @param {Number} timestamp Unix 时间戳。
     * @param {Number} timezone 时间戳来源的时区（-12 ~ 12，默认值为表示东八区的 8）。
     * @return {Date}
     */
    Date.prototype.setUnixTimestamp = function (timestamp, timezone = 8) {
        if (isNaN(timestamp)) {
            throw 'Timestamp must be a number.';
        }
        if (timezone < -12 || timezone > 12) {
            throw 'Timezone must be a number between -12 to 12.';
        }
    
        const date = new Date(timestamp * 1000);
        this.setTime(date.getTime() + (parseInt(timezone) * 60 + date.getTimezoneOffset()) * 60000);
        return this;
    };

    /**
     * 返回 Date 对象计算时区偏移量后的 Unix 时间戳。
     * @param {Number} timezone 时间戳目标的时区（-12 ~ 12，默认值为表示东八区的 8）。
     * @return {Number}
     */
    Date.prototype.getUnixTimestamp = function (timezone = 8) {
        if (timezone < -12 || timezone > 12) {
            throw 'Timezone must be a number between -12 to 12.';
        }
    
        const millistamp = this.getTime() - (parseInt(timezone) * 60 + this.getTimezoneOffset()) * 60000;
        return parseInt(millistamp / 1000);
    };

    /**
     * 返回该日期对象星期部分的字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    Date.prototype.toLocaleDayString = function (locale) {
        const day = this.getDay();
        const lang = String(locale || systemLanguage || '').toLowerCase();
        if (lang.startsWith('zh')) {
            return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][day]; /* Chinese */
        } else if (lang.startsWith('ja')) {
            return ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'][day]; /* Japanese */
        } else if (lang.startsWith('ko')) {
            return ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'][day]; /* Korean */
        } else if (lang.startsWith('nl')) {
            return ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'][day]; /* Dutch */
        } else if (lang.startsWith('de')) {
            return ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][day]; /* German */
        } else if (lang.startsWith('it')) {
            return ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'][day]; /* Italian */
        } else if (lang.startsWith('pt')) {
            return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][day]; /* Portuguese */
        } else if (lang.startsWith('sv')) {
            return ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'][day]; /* Swedish */
        } else if (lang.startsWith('fr')) {
            return ['Dimanche', 'Lundi', 'Mardi', 'Marcredi', 'Jeudi', 'Vendredi', 'Samedi'][day]; /* French */
        } else {
            return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day]; /* English */
        }
    };

    /**
     * 返回该日期对象星期部分的缩写字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    Date.prototype.toLocaleShortDayString = function (locale) {
        const day = this.getDay();
        const lang = String(locale || systemLanguage || '').toLowerCase();
        if (lang.startsWith('zh')) {
            return ['日', '一', '二', '三', '四', '五', '六'][day]; /* Chinese */
        } else if (lang.startsWith('ja')) {
            return ['月', '火', '水', '木', '金', '土', '日'][day]; /* Japanese */
        } else if (lang.startsWith('ko')) {
            return ['일', '월', '화', '수', '목', '금', '토'][day]; /* Korean */
        } else if (lang.startsWith('nl')) {
            return ['Zon', 'Maa', 'Din', 'Woe', 'Don', 'Vri', 'Zat'][day]; /* Dutch */
        } else if (lang.startsWith('de')) {
            return ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'][day]; /* German */
        } else if (lang.startsWith('it')) {
            return ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'][day]; /* Italian */
        } else if (lang.startsWith('pt')) {
            return ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'][day]; /* Portuguese */
        } else if (lang.startsWith('sv')) {
            return ['Son', 'Man', 'Tis', 'Ons', 'Tor', 'Fre', 'Lor'][day]; /* Swedish */
        } else if (lang.startsWith('fr')) {
            return ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'][day]; /* French */
        } else {
            return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]; /* English */
        }
    };

    /**
     * 返回该日期对象月份部分的字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    Date.prototype.toLocaleMonthString = function (locale) {
        const month = this.getMonth();
        const lang = String(locale || systemLanguage || '').toLowerCase();
        if (lang.startsWith('zh')) {
            return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][month]; /* Chinese */
        } else if (lang.startsWith('ja')) {
            return ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][month]; /* Japanese */
        } else if (lang.startsWith('ko')) {
            return ['일월', '이월', '삼월', '사월', '오월', '유월', '칠월', '팔월', '구월', '시월', '십일월', '십이월'][month]; /* Korean */
        } else if (lang.startsWith('nl')) {
            return ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'][month]; /* Dutch */
        } else if (lang.startsWith('de')) {
            return ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'][month]; /* German */
        } else if (lang.startsWith('it')) {
            return ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'][month]; /* Italian */
        } else if (lang.startsWith('pt')) {
            return ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][month]; /* Portuguese */
        } else if (lang.startsWith('sv')) {
            return ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'][month]; /* Swedish */
        } else if (lang.startsWith('fr')) {
            return ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'][month]; /* French */
        } else {
            return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]; /* English */
        }
    };

    /**
     * 返回该日期对象月份部分的缩写字符串，该字符串格式因不同语言而不同。
     * @param {String} locale 指定使用哪种语言格式化规则，遵循 BCP-47 规则。
     * @returns {String}
     */
    Date.prototype.toLocaleShortMonthString = function (locale) {
        const month = this.getMonth();
        const lang = String(locale || systemLanguage || '').toLowerCase();
        if (lang.startsWith('zh')) {
            return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][month]; /* Chinese */
        } else if (lang.startsWith('ja')) {
            return ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'][month]; /* Japanese */
        } else if (lang.startsWith('ko')) {
            return ['일', '이', '삼', '사', '오', '유', '칠', '팔', '구', '시', '십일', '십이'][month]; /* Korean */
        } else if (lang.startsWith('nl')) {
            return ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'][month]; /* Dutch */
        } else if (lang.startsWith('de')) {
            return ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'][month]; /* German */
        } else if (lang.startsWith('it')) {
            return ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'][month]; /* Italian */
        } else if (lang.startsWith('pt')) {
            return ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][month]; /* Portuguese */
        } else if (lang.startsWith('sv')) {
            return ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'][month]; /* Swedish */
        } else if (lang.startsWith('fr')) {
            return ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juillet', 'Aou', 'Sept', 'Oct', 'Nov', 'Dec'][month]; /* French */
        } else {
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]; /* English */
        }
    };
})();