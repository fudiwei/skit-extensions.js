const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.equals.js');

describe('String', () => {
    it('String.$equals', () => {
        expect(String.$equals('abc', 'abc')).to.be.true;
        expect(String.$equals('abc', 'abcd')).to.be.false;
        expect(String.$equals('abc', 'Abc')).to.be.false;
    });

    it('String.$equalsIgnoreCase', () => {
        expect(String.$equalsIgnoreCase('abc', 'abc')).to.be.true;
        expect(String.$equalsIgnoreCase('abc', 'abcd')).to.be.false;
        expect(String.$equalsIgnoreCase('abc', 'Abc')).to.be.true;
    });
});
