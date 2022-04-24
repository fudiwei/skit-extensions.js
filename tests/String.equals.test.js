const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.equals.js');

describe('String', () => {
    it('String.$equals', () => {
        assert.isTrue(String.$equals('abc', 'abc'));
        assert.isFalse(String.$equals('abc', 'abcd'));
        assert.isFalse(String.$equals('abc', 'Abc'));
    });

    it('String.$equalsIgnoreCase', () => {
        assert.isTrue(String.$equalsIgnoreCase('abc', 'abc'));
        assert.isFalse(String.$equalsIgnoreCase('abc', 'abcd'));
        assert.isTrue(String.$equalsIgnoreCase('abc', 'Abc'));
    });
});
