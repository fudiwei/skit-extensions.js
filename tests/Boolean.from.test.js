/// <reference path="../types/Boolean.from.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Boolean.from.js');

describe('Boolean', () => {
    it('Boolean.$from', () => {
        assert.isFunction(Boolean.$from);

        assert.isTrue(Boolean.$from(true));
        assert.isFalse(Boolean.$from(false));

        assert.isTrue(Boolean.$from('true'));
        assert.isTrue(Boolean.$from('True'));
        assert.isTrue(Boolean.$from('TRUE'));
        assert.isTrue(Boolean.$from('1'));
        assert.isFalse(Boolean.$from('tRUE'));
        assert.isFalse(Boolean.$from('-1'));
        assert.isFalse(Boolean.$from('truee'));
        assert.isFalse(Boolean.$from('false'));
        assert.isFalse(Boolean.$from('0'));

        assert.isTrue(Boolean.$from(0.1));
        assert.isTrue(Boolean.$from(1));
        assert.isTrue(Boolean.$from(-1));
        assert.isTrue(Boolean.$from(1234567890n));
        assert.isFalse(Boolean.$from(0));
        assert.isFalse(Boolean.$from(0.0));
        assert.isFalse(Boolean.$from(0n));

        assert.isFalse(Boolean.$from(null));
        assert.isFalse(Boolean.$from(undefined));
        assert.isFalse(Boolean.$from({}));
        assert.isFalse(Boolean.$from([]));
    });
});
