/// <reference path="../types/Array.fill.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.fill.js');

describe('Array', () => {
    it('Array.prototype.$fill', () => {
        assert.isFunction(Array.prototype.$fill);
        assert.deepStrictEqual([1, 2, 3].$fill((i) => ({ value: i })), [{ value: 0 }, { value: 1 }, { value: 2 }]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, 1), [1, 4, 4]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, 1, 2), [1, 4, 3]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, 1, 1), [1, 2, 3]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, 3, 3), [1, 2, 3]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, -3, -2), [4, 2, 3]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, NaN, NaN), [1, 2, 3]);
        assert.deepStrictEqual([1, 2, 3].$fill(() => 4, 3, 5), [1, 2, 3]);
        assert.deepStrictEqual(Array(3).$fill(() => 4), [4, 4, 4]);
    });
});
