(function () {
    Object.defineProperty(Array.prototype, '$removeAt', {
        value: function (index) {
            this.splice(index, 1);
            return this;
        },
        enumerable: false,
        configurable: false
    });
})();
