const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.addMilliseconds~addSeconds~addMinutes~addHours~addDays.js');

describe('Date', () => {
    it('Date.prototype.$addMilliseconds', () => {
        expect(new Date('2020/01/01 00:00:00').$addMilliseconds(1000).valueOf()).to.be.equal(new Date('2020/01/01 00:00:01').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addMilliseconds(-1000).valueOf()).to.be.equal(new Date('2019/12/31 23:59:59').valueOf());
    });

    it('Date.prototype.$addSeconds', () => {
        expect(new Date('2020/01/01 00:00:00').$addSeconds(1).valueOf()).to.be.equal(new Date('2020/01/01 00:00:01').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addSeconds(-1).valueOf()).to.be.equal(new Date('2019/12/31 23:59:59').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addSeconds(0.5).valueOf()).to.be.equal(new Date('2020/01/01 00:00:00:500').valueOf());
    });

    it('Date.prototype.$addMinutes', () => {
        expect(new Date('2020/01/01 00:00:00').$addMinutes(1).valueOf()).to.be.equal(new Date('2020/01/01 00:01:00').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addMinutes(-1).valueOf()).to.be.equal(new Date('2019/12/31 23:59:00').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addMinutes(0.5).valueOf()).to.be.equal(new Date('2020/01/01 00:00:30').valueOf());
    });

    it('Date.prototype.$addHours', () => {
        expect(new Date('2020/01/01 00:00:00').$addHours(1).valueOf()).to.be.equal(new Date('2020/01/01 01:00:00').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addHours(-1).valueOf()).to.be.equal(new Date('2019/12/31 23:00:00').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addHours(0.5).valueOf()).to.be.equal(new Date('2020/01/01 00:30:00').valueOf());
    });

    it('Date.prototype.$addDays', () => {
        expect(new Date('2020/02/28').$addDays(1).valueOf()).to.be.equal(new Date('2020/02/29').valueOf());
        expect(new Date('2020/02/29').$addDays(1).valueOf()).to.be.equal(new Date('2020/03/01').valueOf());
        expect(new Date('2020/12/01').$addDays(1).valueOf()).to.be.equal(new Date('2020/12/02').valueOf());
        expect(new Date('2020/12/31').$addDays(1).valueOf()).to.be.equal(new Date('2021/01/01').valueOf());
        expect(new Date('2021/01/01').$addDays(-1).valueOf()).to.be.equal(new Date('2020/12/31').valueOf());
        expect(new Date('2020/01/01 00:00:00').$addDays(0.5).valueOf()).to.be.equal(new Date('2020/01/01 12:00:00').valueOf());
    });
});
