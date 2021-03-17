const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.today.js');

describe('Date', () => {
    it('Date.$today', () => {
        const date = new Date();
        const today = Date.$today();

        expect(today.getFullYear()).to.be.equal(date.getFullYear());
        expect(today.getMonth()).to.be.equal(date.getMonth());
        expect(today.getDate()).to.be.equal(date.getDate());
        expect(today.getHours()).to.be.equal(0);
        expect(today.getMinutes()).to.be.equal(0);
        expect(today.getSeconds()).to.be.equal(0);
        expect(today.getMilliseconds()).to.be.equal(0);
    });
});
