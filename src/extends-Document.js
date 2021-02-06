((root) => {
    'use strict';
    if (root) {
        const Document = root['Document'];
        const document = root['document'];

        const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

        if ('function' === Document && 'object' === document && !isFunction(Document.insertSheetRule)) {
            const style = document.createElement('style');
            style.setAttribute('media', 'screen');
            style.appendChild(document.createTextNode(''));
            document.head.appendChild(style);

            /**
             * 添加 CSS 样式规则。
             * @param {String} rule
             */
            Object.defineProperty(Document, 'insertSheetRule', {
                value: function (rule) {
                    style.sheet.insertRule(rule, style.sheet.cssRules.length);
                },
                enumerable: false,
                configurable: false,
            });
        }
    }
})(this);
