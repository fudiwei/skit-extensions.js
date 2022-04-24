const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.fillBy.js');

describe('Array', () => {
    it('Array.prototype.$fillBy', () => {
        assert.deepEqual([1, 2, 3].$fillBy((i) => ({ value: i })), [{ value: 0 }, { value: 1 }, { value: 2 }]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, 1), [1, 4, 4]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, 1, 2), [1, 4, 3]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, 1, 1), [1, 2, 3]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, 3, 3), [1, 2, 3]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, -3, -2), [4, 2, 3]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, NaN, NaN), [1, 2, 3]);
        assert.deepEqual([1, 2, 3].$fillBy(() => 4, 3, 5), [1, 2, 3]);
        assert.deepEqual(Array(3).$fillBy(() => 4), [4, 4, 4]);
    });
});
