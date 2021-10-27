(function () {
    Object.defineProperty(Date.prototype, '$format', {
        value: function (format = 'yyyy-MM-dd hh:mm:ss') {
            const O = {
                'M+': this.getMonth() + 1,
                'd+': this.getDate(),
                'H+': this.getHours(),
                'h+': this.getHours(),
                'm+': this.getMinutes(),
                's+': this.getSeconds(),
                'q+': Math.floor((this.getMonth() + 3) / 3),
                'f': this.getMilliseconds()
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
        configurable: false
    });
})();
