(function () {
    Object.defineProperty(Array.prototype, '$shuffle', {
        value: function () {
            const O = Object(this.slice());
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
            if (!Array.isArray(array)) {
                throw new TypeError('The first argument need to be a array');
            }

            return array.$shuffle();
        },
        enumerable: false,
        configurable: false
    });
})();
