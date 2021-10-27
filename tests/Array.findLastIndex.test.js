const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLastIndex.js');

describe('Array', () => {
    it('Array.prototype.$findLastIndex', () => {
        expect([1, 2, 3, 4].$findLastIndex((e) => e % 2 == 1)).to.be.equal(2);
    });
});
