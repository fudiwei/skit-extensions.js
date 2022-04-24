const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.zeroTime.js');

describe('Date', () => {
    it('Date.prototype.$zeroTime', () => {
        const date = new Date();
        const zeroTime = date.$zeroTime();

        assert.equal(zeroTime.getFullYear(), date.getFullYear());
        assert.equal(zeroTime.getMonth(), date.getMonth());
        assert.equal(zeroTime.getDate(), date.getDate());
        assert.equal(zeroTime.getHours(), 0);
        assert.equal(zeroTime.getMinutes(), 0);
        assert.equal(zeroTime.getSeconds(), 0);
        assert.equal(zeroTime.getMilliseconds(), 0);
    });
});
