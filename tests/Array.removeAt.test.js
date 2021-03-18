const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.removeAt.js');

describe('Array', () => {
    it('Array.prototype.$removeAt', () => {
        const array = [0, 1, 2, 3, 4, 5];
        array.$removeAt(5);
        expect(array.length).to.be.equal(5);
        expect(array).to.deep.equal([0, 1, 2, 3, 4]);
    });
});
