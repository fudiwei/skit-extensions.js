(() => {
    'use strict';

    /**
     * 返回一个新的函数，该函数在规定时间内如果被频繁调用、则只最后一次会被执行，即函数防抖。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 抖动时间（单位：毫秒）。
     * @returns {Function}
     */
    Function.debounce = function(fn, wait) {
        wait = +wait || 0;
        if (wait < 0)
            throw 'The value of wait must be greater than zero.';

        let timer = null;
        return function() {
            const args = arguments,
                context = this;

            if (!!timer) {
                clearTimeout(timer);

                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, +wait);
            } else {
                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, +wait);
            }
        }
    };

    /**
     * 返回一个新的函数，该函数如果被调用、则在规定时间后才会被第二次执行，即函数节流。
     * @param {Function} fn 待执行函数。
     * @param {Number} wait 节流时间（单位：毫秒）。
     * @returns {Function}
     */
    Function.throttle = function(fn, wait) {
        wait = +wait || 0;
        if (wait < 0)
            throw 'The value of wait must be greater than zero.';

        let timer = null,
            remaining = 0,
            previous = new Date();

        return function() {
            let now = new Date(),
                remaining = now - previous;
            const args = arguments,
                context = this;

            if (remaining >= wait) {
                if (!!timer) {
                    clearTimeout(timer);
                }

                fn.apply(context, args);
                previous = now;
            } else {
                if (!timer) {
                    timer = setTimeout(function() {
                        fn.apply(context, args);
                        previous = new Date();
                    }, wait - remaining);
                }
            }
        }
    };
})();