const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Object.merge.js');

describe('Object', () => {
    it('Object.$merge', () => {
        assert.isFunction(Object.$merge);

        const source1 = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
        const source2 = { 'a': [{ 'c': 3 }, { 'e': 5 }] };
        const target = { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] };
        assert.deepStrictEqual(Object.$merge(source1, source2), target);
    });
});
