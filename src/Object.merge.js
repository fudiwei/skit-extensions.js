; (function () {
    const _isObjectLike = (value) => {
        const type = typeof value;
        return value !== null && (type === 'object' || type === 'function');
    };

    const _merge = (source1, source2) => {
        if (!_isObjectLike(source1) || !_isObjectLike(source2)) {
            return source2 === undefined ? source1 : source2;
        }

        return Object.keys({
            ...source1,
            ...source2
        }).reduce(
            (acc, key) => {
                acc[key] = _merge(source1[key], source2[key]);
                return acc;
            },
            Array.isArray(source1) ? [] : {}
        );
    };

    Object.defineProperty(Object, '$merge', {
        value: function (target, ...sources) {
            let result = target;

            for (let i = 0, len = sources.length; i < len; i++) {
                result = _merge(result, sources[i]);
            }

            return result;
        },
        enumerable: false,
        configurable: false
    });
})();
