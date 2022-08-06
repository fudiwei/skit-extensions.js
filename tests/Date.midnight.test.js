/// <reference path="../types/Date.midnight.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.midnight.js');

describe('Date', () => {
    it('Date.prototype.$midnight', () => {
        assert.isFunction(Date.prototype.$midnight);

        const date = new Date();
        const midnight = date.$midnight();
        assert.strictEqual(midnight.getFullYear(), date.getFullYear());
        assert.strictEqual(midnight.getMonth(), date.getMonth());
        assert.strictEqual(midnight.getDate(), date.getDate());
        assert.strictEqual(midnight.getHours(), 0);
        assert.strictEqual(midnight.getMinutes(), 0);
        assert.strictEqual(midnight.getSeconds(), 0);
        assert.strictEqual(midnight.getMilliseconds(), 0);
    });
});
