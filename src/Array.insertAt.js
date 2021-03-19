(function () {
    Object.defineProperty(Array.prototype, '$insertAt', {
        value: function (index, value) {
            this.splice(index, 0, value);
            return this;
        },
        enumerable: false,
        configurable: false
    });
})();
