const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.findLastIndex.js');

describe('Array', () => {
    it('Array.prototype.$findLastIndex', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false },
            { 'user': 'pebbles', 'active': false }
        ];
        expect(users.$findLastIndex(e => e.user === 'nobody')).to.be.equal(-1);
        expect(users.$findLastIndex(e => e.user === 'pebbles')).to.be.equal(2);
        expect(users.$findLastIndex(e => e.active)).to.be.equal(0);
    });
});
