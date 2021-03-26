const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.addDays~addMonths~addYears.js');

describe('Date', () => {
    it('Date.prototype.$addDays', () => {
        expect(new Date('2020/02/28').$addDays(1).valueOf()).to.be.equal(new Date('2020/02/29').valueOf());
        expect(new Date('2020/02/29').$addDays(1).valueOf()).to.be.equal(new Date('2020/03/01').valueOf());
        expect(new Date('2020/12/01').$addDays(1).valueOf()).to.be.equal(new Date('2020/12/02').valueOf());
        expect(new Date('2020/12/31').$addDays(1).valueOf()).to.be.equal(new Date('2021/01/01').valueOf());
        expect(new Date('2021/01/01').$addDays(-1).valueOf()).to.be.equal(new Date('2020/12/31').valueOf());
    });

    it('Date.prototype.$addMonths', () => {
        expect(new Date('2020/01/31').$addMonths(1).valueOf()).to.be.equal(new Date('2020/02/29').valueOf());
        expect(new Date('2020/02/28').$addMonths(1).valueOf()).to.be.equal(new Date('2020/03/28').valueOf());
        expect(new Date('2020/12/31').$addMonths(1).valueOf()).to.be.equal(new Date('2021/01/31').valueOf());
    });

    it('Date.prototype.$addYears', () => {
        expect(new Date('2020/01/31').$addMonths(1).valueOf()).to.be.equal(new Date('2021/01/31').valueOf());
        expect(new Date('2020/02/29').$addMonths(1).valueOf()).to.be.equal(new Date('2021/02/28').valueOf());
    });
});
