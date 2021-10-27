const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.addMonths~addYears.js');

describe('Date', () => {
    it('Date.prototype.$addMonths', () => {
        expect(new Date('2020/01/31').$addMonths(1).valueOf()).to.be.equal(new Date('2020/02/29').valueOf());
        expect(new Date('2020/02/28').$addMonths(1).valueOf()).to.be.equal(new Date('2020/03/28').valueOf());
        expect(new Date('2020/12/31').$addMonths(1).valueOf()).to.be.equal(new Date('2021/01/31').valueOf());
    });

    it('Date.prototype.$addYears', () => {
        expect(new Date('2020/01/31').$addYears(1).valueOf()).to.be.equal(new Date('2021/01/31').valueOf());
        expect(new Date('2020/02/29').$addYears(1).valueOf()).to.be.equal(new Date('2021/02/28').valueOf());
    });
});
