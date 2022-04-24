const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.today.js');

describe('Date', () => {
    it('Date.$today', () => {
        const date = new Date();
        const today = Date.$today();

        assert.equal(today.getFullYear(), date.getFullYear());
        assert.equal(today.getMonth(), date.getMonth());
        assert.equal(today.getDate(), date.getDate());
        assert.equal(today.getHours(), 0);
        assert.equal(today.getMinutes(), 0);
        assert.equal(today.getSeconds(), 0);
        assert.equal(today.getMilliseconds(), 0);
    });
});
