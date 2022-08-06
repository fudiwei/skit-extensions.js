/// <reference path="../types/Date.now.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.now.js');

describe('Date', () => {
    it('Date.$now', () => {
        assert.isFunction(Date.$now);

        const date = new Date();
        const now = Date.$now();
        assert.strictEqual(now.getFullYear(), date.getFullYear());
        assert.strictEqual(now.getMonth(), date.getMonth());
        assert.strictEqual(now.getDate(), date.getDate());
        assert.strictEqual(now.getHours(), date.getHours());
        assert.strictEqual(now.getMinutes(), date.getMinutes());
        assert.strictEqual(now.getSeconds(), date.getSeconds());
    });
});
