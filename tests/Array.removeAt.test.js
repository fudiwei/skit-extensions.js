const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.removeAt.js');

describe('Array', () => {
    it('Array.prototype.$removeAt', () => {
        const array = [0, 1, 2, 3, 4, 5];
        array.$removeAt(5);
        assert.deepEqual(array, [0, 1, 2, 3, 4]);
    });
});
