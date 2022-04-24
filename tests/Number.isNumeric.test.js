const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.isNumeric.js');

describe('Number', () => {
    it('Number.$isNumeric', () => {
        assert.isFunction(Number.$isNumeric);
        assert.isTrue(Number.$isNumeric(123));
        assert.isTrue(Number.$isNumeric(-1.23));
        assert.isTrue(Number.$isNumeric(5 - 2));
        assert.isTrue(Number.$isNumeric(0));
        assert.isTrue(Number.$isNumeric(+0));
        assert.isTrue(Number.$isNumeric('123'));
        assert.isTrue(Number.$isNumeric('1.23'));
        assert.isFalse(Number.$isNumeric('1.2.3'));
        assert.isFalse(Number.$isNumeric('Hello'));
        assert.isFalse(Number.$isNumeric('2005/12/12'));
    });
});
