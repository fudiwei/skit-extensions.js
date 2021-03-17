const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.isNumber.js');

describe('Number', () => {
    it('Number.$isNumber', () => {
        expect(Number.$isNumber(123)).to.be.true;
        expect(Number.$isNumber(-1.23)).to.be.true;
        expect(Number.$isNumber(5 - 2)).to.be.true;
        expect(Number.$isNumber(0));
        expect(Number.$isNumber(+0)).to.be.true;
        expect(Number.$isNumber('123')).to.be.true;
        expect(Number.$isNumber('1.23')).to.be.true;
        expect(Number.$isNumber('1.2.3')).to.be.false;
        expect(Number.$isNumber('Hello')).to.be.false;
        expect(Number.$isNumber('2005/12/12')).to.be.false;
    });
});
