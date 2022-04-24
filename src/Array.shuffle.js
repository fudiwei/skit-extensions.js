(function () {
    Object.defineProperty(Array.prototype, '$shuffle', {
        value: function () {
            const O = Array.prototype.slice.call(this);
            const len = O.length >>> 0;

            let index = -1,
                tindex = len - 1;
            while (++index < len) {
                const rand = index + Math.floor(Math.random() * (tindex - index + 1));
                const value = O[rand];
                O[rand] = O[index];
                O[index] = value;
            }

            return O;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array, '$shuffle', {
        value: function (array) {
            return Array.prototype.$shuffle.call(array);
        },
        enumerable: false,
        configurable: false
    });
})();
