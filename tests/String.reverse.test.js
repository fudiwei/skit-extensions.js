/// <reference path="../types/String.reverse.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.reverse.js');

describe('String', () => {
    it('String.prototype.$reverse', () => {
        assert.isFunction(String.prototype.$reverse);
        assert.strictEqual('text'.$reverse(), 'txet');
        assert.strictEqual('emoji 😊 in text'.$reverse(), 'txet ni 😊 ijome');
    });
});
