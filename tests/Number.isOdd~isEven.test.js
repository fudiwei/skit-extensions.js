const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.isOdd~isEven.js');

describe('Number', () => {
    it('Number.$isOdd', () => {
        expect(Number.$isOdd(123)).to.be.true;
        expect(Number.$isOdd(123.0)).to.be.true;
        expect(Number.$isOdd(-123)).to.be.true;
        expect(Number.$isOdd(+123)).to.be.true;
        expect(Number.$isOdd(-123.0)).to.be.true;
        expect(Number.$isOdd(+123.0)).to.be.true;
        expect(Number.$isOdd(1234)).to.be.false;
        expect(Number.$isOdd(-1234)).to.be.false;
        expect(Number.$isOdd(123.1)).to.be.false;
        expect(Number.$isOdd(-123.1)).to.be.false;
        expect(Number.$isOdd(Number.NaN)).to.be.false;
        expect(Number.$isOdd(Number.POSITIVE_INFINITY)).to.be.false;
        expect(Number.$isOdd(Number.NEGATIVE_INFINITY)).to.be.false;
    });

    it('Number.$isEven', () => {
        expect(Number.$isEven(12)).to.be.true;
        expect(Number.$isEven(12.0)).to.be.true;
        expect(Number.$isEven(-12)).to.be.true;
        expect(Number.$isEven(+12)).to.be.true;
        expect(Number.$isEven(-12.0)).to.be.true;
        expect(Number.$isEven(+12.0)).to.be.true;
        expect(Number.$isEven(123)).to.be.false;
        expect(Number.$isEven(-123)).to.be.false;
        expect(Number.$isEven(12.3)).to.be.false;
        expect(Number.$isEven(-12.3)).to.be.false;
        expect(Number.$isEven(Number.NaN)).to.be.false;
        expect(Number.$isEven(Number.POSITIVE_INFINITY)).to.be.false;
        expect(Number.$isEven(Number.NEGATIVE_INFINITY)).to.be.false;
    });
});
