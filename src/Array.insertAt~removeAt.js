(function () {
    Object.defineProperty(Array.prototype, '$insertAt', {
        value: function (index, value) {
            Array.prototype.splice.call(this, index, 0, value);
            return this;
        },
        enumerable: false,
        configurable: false
    });

    Object.defineProperty(Array.prototype, '$removeAt', {
        value: function (index) {
            Array.prototype.splice.call(this, index, 1);
            return this;
        },
        enumerable: false,
        configurable: false
    });
})();
