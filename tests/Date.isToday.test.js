/// <reference path="../types/Date.isToday.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.isToday.js');

describe('Date', () => {
    it('Date.prototype.$isToday', () => {
        assert.isFunction(Date.prototype.$isToday);

        const now = new Date();
        const yesterday = new Date(now.getSeconds() - 24 * 60 * 60 * 1000);
        const tomorrow = new Date(now.getSeconds() + 24 * 60 * 60 * 1000);

        assert.isTrue(now.$isToday());
        assert.isFalse(yesterday.$isToday());
        assert.isFalse(tomorrow.$isToday());
    });
});
