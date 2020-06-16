const { should, expect, assert } = require('chai');

require('../src/extends-String.js');

describe('expect', () => {
	it('String.equals', () => {
		expect(String.equals('abc', 'abc')).to.be.true;
		expect(String.equals('abc', 'abcd')).to.be.false;
		expect(String.equals('abc', 'Abc')).to.be.false;
		expect(String.equals('abc', 'Abc', { ignoreCase: true })).to.be.true;
	});

	it('String.prototype.equals', () => {
		expect('abc'.equals('abc')).to.be.true;
		expect('abc'.equals('abcd')).to.be.false;
		expect('abc'.equals('Abc')).to.be.false;
		expect('abc'.equals('Abc', { ignoreCase: true })).to.be.true;
	});

	it('String.prototype.replaceAll', () => {
		expect('abc'.replaceAll('a')).to.be.equals('bc');
		expect('abc'.replaceAll('ab')).to.be.equals('c');
		expect('abc'.replaceAll('a', 'b')).to.be.equals('bbc');
		expect('abc'.replaceAll('a', 'bc')).to.be.equals('bcbc');
		expect('abc'.replaceAll('d', 'abc')).to.be.equals('abc');
	});

	it('String.prototype.reverse', () => {
		expect('text'.reverse()).to.be.equals('txet');
		expect('emoji 😊 in text'.reverse()).to.be.equals('txet ni 😊 ijome');
	});
});