const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.format.js');

describe('Date', () => {
    it('Date.prototype.$format', () => {
        assert.isFunction(Date.prototype.$format);

        const date = new Date('2020/01/02 01:23:45');
        assert.strictEqual(date.$format(), '2020-01-02 01:23:45');
        assert.strictEqual(date.$format('yyyy'), '2020');
        assert.strictEqual(date.$format('MM'), '01');
        assert.strictEqual(date.$format('dd'), '02');
        assert.strictEqual(date.$format('HH'), '01');
        assert.strictEqual(date.$format('mm'), '23');
        assert.strictEqual(date.$format('ss'), '45');
        assert.strictEqual(date.$format('M'), '1');
        assert.strictEqual(date.$format('d'), '2');
        assert.strictEqual(date.$format('H'), '1');
        assert.strictEqual(date.$format('m'), '23');
        assert.strictEqual(date.$format('s'), '45');
        assert.strictEqual(date.$format('yyyy/MM/dd'), '2020/01/02');
        assert.strictEqual(date.$format('H:m:s'), '1:23:45');
    });
});
