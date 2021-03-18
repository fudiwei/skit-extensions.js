const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.insertAt.js');

describe('Array', () => {
    it('Array.prototype.$insertAt', () => {
        const array = [1, 2, 3, 4, 5];
        array.$insertAt(0, 0);
        expect(array.length).to.be.equal(6);
        expect(array).to.deep.equal([0, 1, 2, 3, 4, 5]);
    });
});
