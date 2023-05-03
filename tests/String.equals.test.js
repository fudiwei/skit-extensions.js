/// <reference path="../types/String.equals.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.equals.js');

describe('String', () => {
    it('String.$equals', () => {
        assert.isFunction(String.$equals);
        assert.isTrue(String.$equals('abc', 'abc'));
        assert.isTrue(String.$equals('abc', new String('abc')));
        assert.isTrue(String.$equals(new String('abc'), new String('abc')));
        assert.isFalse(String.$equals('abc', 'abcd'));
        assert.isFalse(String.$equals('abc', 'Abc'));
    });

    it('String.$equalsIgnoreCase', () => {
        assert.isFunction(String.$equalsIgnoreCase);
        assert.isTrue(String.$equalsIgnoreCase('abc', 'abc'));
        assert.isTrue(String.$equalsIgnoreCase('abc', new String('Abc')));
        assert.isTrue(String.$equalsIgnoreCase(new String('Abc'), new String('abc')));
        assert.isFalse(String.$equalsIgnoreCase('abc', 'abcd'));
        assert.isTrue(String.$equalsIgnoreCase('abc', 'Abc'));
    });
});
