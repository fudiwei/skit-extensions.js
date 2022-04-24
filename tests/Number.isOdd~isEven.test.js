const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.isOdd~isEven.js');

describe('Number', () => {
    it('Number.$isOdd', () => {
        assert.isTrue(Number.$isOdd(123));
        assert.isTrue(Number.$isOdd(123.0));
        assert.isTrue(Number.$isOdd(-123));
        assert.isTrue(Number.$isOdd(+123));
        assert.isTrue(Number.$isOdd(-123.0));
        assert.isTrue(Number.$isOdd(+123.0));
        assert.isFalse(Number.$isOdd(1234));
        assert.isFalse(Number.$isOdd(-1234));
        assert.isFalse(Number.$isOdd(123.1));
        assert.isFalse(Number.$isOdd(-123.1));
        assert.isFalse(Number.$isOdd(Number.NaN));
        assert.isFalse(Number.$isOdd(Number.POSITIVE_INFINITY));
        assert.isFalse(Number.$isOdd(Number.NEGATIVE_INFINITY));
    });

    it('Number.$isEven', () => {
        assert.isTrue(Number.$isEven(12));
        assert.isTrue(Number.$isEven(12.0));
        assert.isTrue(Number.$isEven(-12));
        assert.isTrue(Number.$isEven(+12));
        assert.isTrue(Number.$isEven(-12.0));
        assert.isTrue(Number.$isEven(+12.0));
        assert.isFalse(Number.$isEven(123));
        assert.isFalse(Number.$isEven(-123));
        assert.isFalse(Number.$isEven(12.3));
        assert.isFalse(Number.$isEven(-12.3));
        assert.isFalse(Number.$isEven(Number.NaN));
        assert.isFalse(Number.$isEven(Number.POSITIVE_INFINITY));
        assert.isFalse(Number.$isEven(Number.NEGATIVE_INFINITY));
    });
});
