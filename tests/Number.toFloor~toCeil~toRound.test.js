const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.toFloor~toCeil~toRound.js');

describe('Number', () => {
    it('Number.prototype.$toFloor', () => {
        expect((123).$toFloor()).to.be.equals('123');
        expect((123).$toFloor(2)).to.be.equals('123.00');
        expect((123.456).$toFloor()).to.be.equals('123');
        expect((123.456).$toFloor(0)).to.be.equals('123');
        expect((123.456).$toFloor(1)).to.be.equals('123.4');
        expect((123.456).$toFloor(2)).to.be.equals('123.45');
        expect((123.456).$toFloor(3)).to.be.equals('123.456');
        expect((123.456).$toFloor(4)).to.be.equals('123.4560');
        expect((NaN).$toFloor()).to.be.equals('NaN');
    });

    it('Number.prototype.$toCeil', () => {
        expect((123).$toCeil()).to.be.equals('123');
        expect((123).$toCeil(2)).to.be.equals('123.00');
        expect((123.456).$toCeil()).to.be.equals('124');
        expect((123.456).$toCeil(0)).to.be.equals('124');
        expect((123.456).$toCeil(1)).to.be.equals('123.5');
        expect((123.456).$toCeil(2)).to.be.equals('123.46');
        expect((123.456).$toCeil(3)).to.be.equals('123.456');
        expect((123.456).$toCeil(4)).to.be.equals('123.4560');
        expect((NaN).$toCeil()).to.be.equals('NaN');
    });

    it('Number.prototype.$toRound', () => {
        expect((123).$toRound()).to.be.equals('123');
        expect((123).$toRound(2)).to.be.equals('123.00');
        expect((123.456).$toRound()).to.be.equals('123');
        expect((123.456).$toRound(0)).to.be.equals('123');
        expect((123.456).$toRound(1)).to.be.equals('123.5');
        expect((123.456).$toRound(2)).to.be.equals('123.46');
        expect((123.456).$toRound(3)).to.be.equals('123.456');
        expect((123.456).$toRound(4)).to.be.equals('123.4560');
        expect((NaN).$toRound()).to.be.equals('NaN');
    });
});
