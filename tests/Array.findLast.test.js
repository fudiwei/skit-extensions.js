const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLast.js');

describe('Array', () => {
    it('Array.prototype.$findLast', () => {
        expect([1, 2, 3, 4].$findLast((e) => e % 2 == 1)).to.be.equal(3);
    });
});
