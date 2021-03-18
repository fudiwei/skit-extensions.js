const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLast.js');

describe('Array', () => {
    it('Array.prototype.$findLast', () => {
        const inventory = [
            { name: 'apples', quantity: 2 },
            { name: 'bananas', quantity: 0 },
            { name: 'cherries', quantity: 5 }
        ];
        const findCherries = (fruit) => fruit.name === 'cherries';
        expect(inventory.$findLast(findCherries).quantity).to.be.equal(5);
    });
});
