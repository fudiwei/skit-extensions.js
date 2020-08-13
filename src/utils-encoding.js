(function moduleDefinition(root, factory) {
    const $ = '$$encoding';

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
        define($, factory); /* AMD/CMD */
    } else if (root) {
        root[$] = factory();
    }
})(this, () => {
    'use strict';
    const $ = {};

    $.base64 = {
        encode(str = '') {
            if (undefined === str) throw '1 argument required, but only 0 present.';

            const KEYSTRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            const _utf8_encode = (string) => {
                string = string.replace(/\r\n/g, '\n');
                let utftext = '';
                for (let n = 0; n < string.length; n++) {
                    let c = string.charCodeAt(n);
                    if (c < 128) {
                        utftext += String.fromCharCode(c);
                    } else if (c > 127 && c < 2048) {
                        utftext += String.fromCharCode((c >> 6) | 192);
                        utftext += String.fromCharCode((c & 63) | 128);
                    } else {
                        utftext += String.fromCharCode((c >> 12) | 224);
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                        utftext += String.fromCharCode((c & 63) | 128);
                    }
                }
                return utftext;
            };

            let output = '';
            let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            let i = 0;
            str = _utf8_encode(str);
            while (i < str.length) {
                chr1 = str.charCodeAt(i++);
                chr2 = str.charCodeAt(i++);
                chr3 = str.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + KEYSTRING.charAt(enc1) + KEYSTRING.charAt(enc2) + KEYSTRING.charAt(enc3) + KEYSTRING.charAt(enc4);
            }

            return output;
        },

        decode(str = '') {
            if (undefined === str) throw '1 argument required, but only 0 present.';

            const KEYSTRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            const _utf8_decode = (utftext) => {
                let string = '';
                let i = 0;
                let c = 0,
                    c2 = 0,
                    c3 = 0;
                while (i < utftext.length) {
                    c = utftext.charCodeAt(i);
                    if (c < 128) {
                        string += String.fromCharCode(c);
                        i++;
                    } else if (c > 191 && c < 224) {
                        c2 = utftext.charCodeAt(i + 1);
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                        i += 2;
                    } else {
                        c2 = utftext.charCodeAt(i + 1);
                        c3 = utftext.charCodeAt(i + 2);
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                        i += 3;
                    }
                }
                return string;
            };

            let output = '';
            let chr1, chr2, chr3;
            let enc1, enc2, enc3, enc4;
            let i = 0;
            str = str.replace(/[^A-Za-z0-9+/=]/g, '');
            while (i < str.length) {
                enc1 = KEYSTRING.indexOf(str.charAt(i++));
                enc2 = KEYSTRING.indexOf(str.charAt(i++));
                enc3 = KEYSTRING.indexOf(str.charAt(i++));
                enc4 = KEYSTRING.indexOf(str.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 !== 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 !== 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = _utf8_decode(output);
            return output;
        },
    };

    $.guid = {
        create() {
            class Guid {
                constructor() {
                    Object.defineProperty(this, 'value', {
                        value: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                            const r = (Math.random() * 16) | 0;
                            const v = c == 'x' ? r : (r & 0x3) | 0x8;
                            return v.toString(16);
                        }),
                        enumerable: true,
                        writable: false,
                    });
                }

                toString(format) {
                    if (!!format) {
                        if ('N' === format) {
                            return this.value.replace(/-/g, '');
                        } else if ('D' === format) {
                            return this.value;
                        } else if ('B' === format) {
                            return '{' + this.value + '}';
                        } else if ('P' === format) {
                            return '(' + this.value + ')';
                        } else {
                            throw 'The value of format is not null, an empty string (""), "N", "D", "B", or "P".';
                        }
                    }

                    return this.value;
                }

                valueOf() {
                    return this.value;
                }
            }

            return new Guid();
        },
    };

    return $;
});
