const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.zeroTime.js');

describe('Date', () => {
    it('Date.prototype.$zeroTime', () => {
        assert.isFunction(Date.prototype.$zeroTime);

        const date = new Date();
        const zeroTime = date.$zeroTime();
        assert.strictEqual(zeroTime.getFullYear(), date.getFullYear());
        assert.strictEqual(zeroTime.getMonth(), date.getMonth());
        assert.strictEqual(zeroTime.getDate(), date.getDate());
        assert.strictEqual(zeroTime.getHours(), 0);
        assert.strictEqual(zeroTime.getMinutes(), 0);
        assert.strictEqual(zeroTime.getSeconds(), 0);
        assert.strictEqual(zeroTime.getMilliseconds(), 0);
    });
});
