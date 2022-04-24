const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.addMonths~addYears.js');

describe('Date', () => {
    it('Date.prototype.$addMonths', () => {
        assert.deepEqual(new Date('2020/01/31').$addMonths(1), new Date('2020/02/29'));
        assert.deepEqual(new Date('2020/02/28').$addMonths(1), new Date('2020/03/28'));
        assert.deepEqual(new Date('2020/12/31').$addMonths(1), new Date('2021/01/31'));
    });

    it('Date.prototype.$addYears', () => {
        assert.deepEqual(new Date('2020/01/31').$addYears(1), new Date('2021/01/31'));
        assert.deepEqual(new Date('2020/02/29').$addYears(1), new Date('2021/02/28'));
    });
});
