const { should, expect, assert } = require('chai');

require('../src/extends-Array.js');

describe('expect', () => {
	it('Array.prototype.distinct', () => {
		const plainArray = [1, 1, 2, 3];
		expect(plainArray.distinct().length).to.be.equal(3);

		const complexArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }];
		expect(complexArray.distinct((x, y) => x.id === y.id).length).to.be.equal(3);
	});
});