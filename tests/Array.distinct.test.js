const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.distinct.js');

describe('Array', () => {
    it('Array.prototype.$distinct', () => {
        assert.deepEqual([1, 1, 2].$distinct(), [1, 2]);
        assert.deepEqual([{ id: 1 }, { id: 1 }, { id: 2 }].$distinct((a, b) => a.id === b.id), [{ id: 1 }, { id: 2 }]);
        assert.deepEqual([NaN, NaN, 0].$distinct(), [NaN, 0]);
    });
});
