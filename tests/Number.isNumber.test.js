const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.isNumber.js');

describe('Number', () => {
    it('Number.$isNumber', () => {
        assert.isTrue(Number.$isNumber(123));
        assert.isTrue(Number.$isNumber(-1.23));
        assert.isTrue(Number.$isNumber(5 - 2));
        assert.isTrue(Number.$isNumber(0));
        assert.isTrue(Number.$isNumber(+0));
        assert.isTrue(Number.$isNumber('123'));
        assert.isTrue(Number.$isNumber('1.23'));
        assert.isFalse(Number.$isNumber('1.2.3'));
        assert.isFalse(Number.$isNumber('Hello'));
        assert.isFalse(Number.$isNumber('2005/12/12'));
    });
});
