const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.insertAt.js');

describe('Array', () => {
    it('Array.prototype.$insertAt', () => {
        assert.deepEqual([1, 2, 3, 4, 5].$insertAt(0, 0), [0, 1, 2, 3, 4, 5]);
    });
});
