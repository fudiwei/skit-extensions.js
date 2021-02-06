const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/extends-Number.js');

describe('expect', () => {
    it('Number.isNumber', () => {
        expect(Number.isNumber(123)).to.be.true;
        expect(Number.isNumber(-1.23)).to.be.true;
        expect(Number.isNumber(5 - 2)).to.be.true;
        expect(Number.isNumber(0));
        expect(Number.isNumber(+0)).to.be.true;
        expect(Number.isNumber('123')).to.be.true;
        expect(Number.isNumber('1.23')).to.be.true;
        expect(Number.isNumber('1.2.3')).to.be.false;
        expect(Number.isNumber('Hello')).to.be.false;
        expect(Number.isNumber('2005/12/12')).to.be.false;
    });

    it('Number.toFloor', () => {
        expect((123).toFloor()).to.be.equals('123');
        expect((123).toFloor(2)).to.be.equals('123.00');
        expect((123.456).toFloor()).to.be.equals('123');
        expect((123.456).toFloor(0)).to.be.equals('123');
        expect((123.456).toFloor(1)).to.be.equals('123.4');
        expect((123.456).toFloor(2)).to.be.equals('123.45');
        expect((123.456).toFloor(3)).to.be.equals('123.456');
        expect((123.456).toFloor(4)).to.be.equals('123.4560');
    });

    it('Number.toCeil', () => {
        expect((123).toCeil()).to.be.equals('123');
        expect((123).toCeil(2)).to.be.equals('123.00');
        expect((123.456).toCeil()).to.be.equals('124');
        expect((123.456).toCeil(0)).to.be.equals('124');
        expect((123.456).toCeil(1)).to.be.equals('123.5');
        expect((123.456).toCeil(2)).to.be.equals('123.46');
        expect((123.456).toCeil(3)).to.be.equals('123.456');
        expect((123.456).toCeil(4)).to.be.equals('123.4560');
    });

    it('Number.toRound', () => {
        expect((123).toRound()).to.be.equals('123');
        expect((123).toRound(2)).to.be.equals('123.00');
        expect((123.456).toRound()).to.be.equals('123');
        expect((123.456).toRound(0)).to.be.equals('123');
        expect((123.456).toRound(1)).to.be.equals('123.5');
        expect((123.456).toRound(2)).to.be.equals('123.46');
        expect((123.456).toRound(3)).to.be.equals('123.456');
        expect((123.456).toRound(4)).to.be.equals('123.4560');
    });

    it('Number.isOdd', () => {
        expect((123).isOdd()).to.be.true;
        expect((123.0).isOdd()).to.be.true;
        expect((-123).isOdd()).to.be.true;
        expect((+123).isOdd()).to.be.true;
        expect((-123.0).isOdd()).to.be.true;
        expect((+123.0).isOdd()).to.be.true;
        expect((1234).isOdd()).to.be.false;
        expect((-1234).isOdd()).to.be.false;
        expect((123.1).isOdd()).to.be.false;
        expect((-123.1).isOdd()).to.be.false;
        expect(Number.NaN.isOdd()).to.be.false;
        expect(Number.POSITIVE_INFINITY.isOdd()).to.be.false;
        expect(Number.NEGATIVE_INFINITY.isOdd()).to.be.false;
    });

    it('Number.isEven', () => {
        expect((12).isEven()).to.be.true;
        expect((12.0).isEven()).to.be.true;
        expect((-12).isEven()).to.be.true;
        expect((+12).isEven()).to.be.true;
        expect((-12.0).isEven()).to.be.true;
        expect((+12.0).isEven()).to.be.true;
        expect((123).isEven()).to.be.false;
        expect((-123).isEven()).to.be.false;
        expect((12.3).isEven()).to.be.false;
        expect((-12.3).isEven()).to.be.false;
        expect(Number.NaN.isEven()).to.be.false;
        expect(Number.POSITIVE_INFINITY.isEven()).to.be.false;
        expect(Number.NEGATIVE_INFINITY.isEven()).to.be.false;
    });
});
