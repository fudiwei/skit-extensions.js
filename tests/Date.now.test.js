const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.now.js');

describe('Date', () => {
    it('Date.$now', () => {
        const date = new Date();
        const now = Date.$now();

        assert.equal(now.getFullYear(), date.getFullYear());
        assert.equal(now.getMonth(), date.getMonth());
        assert.equal(now.getDate(), date.getDate());
        assert.equal(now.getHours(), date.getHours());
        assert.equal(now.getMinutes(), date.getMinutes());
        assert.equal(now.getSeconds(), date.getSeconds());
    });
});
