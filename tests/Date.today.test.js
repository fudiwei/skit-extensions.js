/// <reference path="../types/Date.today.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.today.js');

describe('Date', () => {
    it('Date.$today', () => {
        assert.isFunction(Date.$today);

        const date = new Date();
        const today = Date.$today();
        assert.strictEqual(today.getFullYear(), date.getFullYear());
        assert.strictEqual(today.getMonth(), date.getMonth());
        assert.strictEqual(today.getDate(), date.getDate());
        assert.strictEqual(today.getHours(), 0);
        assert.strictEqual(today.getMinutes(), 0);
        assert.strictEqual(today.getSeconds(), 0);
        assert.strictEqual(today.getMilliseconds(), 0);
    });
});
