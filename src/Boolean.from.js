(function () {
    Object.defineProperty(Boolean, '$from', {
        value: function (flag) {
            if (flag != null) {
                if (typeof flag === 'boolean') {
                    return flag;
                }

                if (typeof flag === 'string') {
                    return flag == 'TRUE' || flag == 'True' || flag == 'true' || flag == '1';
                }

                if (typeof flag === 'number') {
                    return !isNaN(flag) && flag != 0;
                }

                if (typeof flag === 'bigint') {
                    return flag != BigInt(0);
                }
            }

            return false;
        },
        enumerable: false,
        configurable: false
    });
})();
