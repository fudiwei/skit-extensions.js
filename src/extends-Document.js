((root) => {
    'use strict';
    if (root) {
        const Document = root['Document'];
        const document = root['document'];

        if ('function' === Document && 'object' === document) {
            const style = document.createElement('style');
            style.setAttribute('media', 'screen');
            style.appendChild(document.createTextNode(''));
            document.head.appendChild(style);
    
            /**
             * 添加 CSS 样式规则。
             * @param {String} rule 
             */
            Document.prototype.insertSheetRule = function (rule) {
                style.sheet.insertRule(rule, style.sheet.cssRules.length);
            }
        }
    }
})(this);