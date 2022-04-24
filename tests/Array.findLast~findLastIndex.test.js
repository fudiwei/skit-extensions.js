const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLast~findLastIndex.js');

describe('Array', () => {
    it('Array.prototype.$findLast', () => {
        assert.isFunction(Array.prototype.$findLast);
        assert.strictEqual([1, 2, 3, 4].$findLast((e) => e % 2 == 1), 3);
    });

    it('Array.prototype.$findLastIndex', () => {
        assert.isFunction(Array.prototype.$findLastIndex);
        assert.strictEqual([1, 2, 3, 4].$findLastIndex((e) => e % 2 == 1), 2);
    });
});
