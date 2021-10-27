const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Boolean.from.js');

describe('Boolean', () => {
    it('Boolean.$from', () => {
        expect(Boolean.$from('true')).to.be.true;
        expect(Boolean.$from('True')).to.be.true;
        expect(Boolean.$from('truly')).to.be.false;
        expect(Boolean.$from('false')).to.be.false;
        expect(Boolean.$from('1')).to.be.true;
        expect(Boolean.$from('0')).to.be.false;

        expect(Boolean.$from(0)).to.be.false;
        expect(Boolean.$from(0.0)).to.be.false;
        expect(Boolean.$from(0n)).to.be.false;
        expect(Boolean.$from(0.1)).to.be.true;
        expect(Boolean.$from(1)).to.be.true;
        expect(Boolean.$from(-1)).to.be.true;
        expect(Boolean.$from(1234567890n)).to.be.true;

        expect(Boolean.$from(true)).to.be.true;
        expect(Boolean.$from(false)).to.be.false;

        expect(Boolean.$from(null)).to.be.false;
        expect(Boolean.$from(undefined)).to.be.false;
        expect(Boolean.$from({})).to.be.false;
        expect(Boolean.$from([])).to.be.false;
    });
});
