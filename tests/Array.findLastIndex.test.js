const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLastIndex.js');

describe('Array', () => {
    it('Array.prototype.$findLastIndex', () => {
        assert.equal([1, 2, 3, 4].$findLastIndex((e) => e % 2 == 1), 2);
    });
});
