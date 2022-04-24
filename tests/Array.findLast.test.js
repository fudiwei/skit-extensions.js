const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLast.js');

describe('Array', () => {
    it('Array.prototype.$findLast', () => {
        assert.equal([1, 2, 3, 4].$findLast((e) => e % 2 == 1), 3);
    });
});
