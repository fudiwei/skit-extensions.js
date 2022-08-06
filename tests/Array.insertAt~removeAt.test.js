/// <reference path="../types/Array.insertAt~removeAt.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.insertAt~removeAt.js');

describe('Array', () => {
    it('Array.prototype.$insertAt', () => {
        assert.isFunction(Array.prototype.$insertAt);
        assert.deepStrictEqual([1, 2, 3, 4, 5].$insertAt(0, 0), [0, 1, 2, 3, 4, 5]);
    });

    it('Array.prototype.$removeAt', () => {
        assert.isFunction(Array.prototype.$removeAt);
        assert.deepStrictEqual([0, 1, 2, 3, 4, 5].$removeAt(5), [0, 1, 2, 3, 4]);
    });
});
