const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.addMilliseconds~addSeconds~addMinutes~addHours~addDays~addMonths~addYears.js');

describe('Date', () => {
    it('Date.prototype.$addMilliseconds', () => {
        assert.isFunction(Date.prototype.$addMilliseconds);
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addMilliseconds(1000), new Date('2020/01/01 00:00:01'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addMilliseconds(-1000), new Date('2019/12/31 23:59:59'));
    });

    it('Date.prototype.$addSeconds', () => {
        assert.isFunction(Date.prototype.$addSeconds);
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addSeconds(1), new Date('2020/01/01 00:00:01'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addSeconds(-1), new Date('2019/12/31 23:59:59'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addSeconds(0.5), new Date('2020/01/01 00:00:00:500'));
    });

    it('Date.prototype.$addMinutes', () => {
        assert.isFunction(Date.prototype.$addMinutes);
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addMinutes(1), new Date('2020/01/01 00:01:00'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addMinutes(-1), new Date('2019/12/31 23:59:00'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addMinutes(0.5), new Date('2020/01/01 00:00:30'));
    });

    it('Date.prototype.$addHours', () => {
        assert.isFunction(Date.prototype.$addHours);
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addHours(1), new Date('2020/01/01 01:00:00'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addHours(-1), new Date('2019/12/31 23:00:00'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addHours(0.5), new Date('2020/01/01 00:30:00'));
    });

    it('Date.prototype.$addDays', () => {
        assert.isFunction(Date.prototype.$addDays);
        assert.deepStrictEqual(new Date('2020/02/28').$addDays(1), new Date('2020/02/29'));
        assert.deepStrictEqual(new Date('2020/02/29').$addDays(1), new Date('2020/03/01'));
        assert.deepStrictEqual(new Date('2020/12/01').$addDays(1), new Date('2020/12/02'));
        assert.deepStrictEqual(new Date('2020/12/31').$addDays(1), new Date('2021/01/01'));
        assert.deepStrictEqual(new Date('2021/01/01').$addDays(-1), new Date('2020/12/31'));
        assert.deepStrictEqual(new Date('2020/01/01 00:00:00').$addDays(0.5), new Date('2020/01/01 12:00:00'));
    });

    it('Date.prototype.$addMonths', () => {
        assert.isFunction(Date.prototype.$addMonths);
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(1), new Date('2020/02/29'));
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(2), new Date('2020/03/31'));
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(6), new Date('2020/07/31'));
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(12), new Date('2021/01/31'));
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(18), new Date('2021/07/31'));
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(20), new Date('2021/09/30'));
        assert.deepStrictEqual(new Date('2020/01/31').$addMonths(24), new Date('2022/01/31'));
        assert.deepStrictEqual(new Date('2020/02/28').$addMonths(1), new Date('2020/03/28'));
        assert.deepStrictEqual(new Date('2020/12/31').$addMonths(1), new Date('2021/01/31'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-1), new Date('2022/5/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-2), new Date('2022/4/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-6), new Date('2021/12/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-12), new Date('2021/06/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-18), new Date('2020/12/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-20), new Date('2020/10/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addMonths(-24), new Date('2020/06/30'));
    });

    it('Date.prototype.$addYears', () => {
        assert.isFunction(Date.prototype.$addYears);
        assert.deepStrictEqual(new Date('2020/01/31').$addYears(1), new Date('2021/01/31'));
        assert.deepStrictEqual(new Date('2020/01/31').$addYears(2), new Date('2022/01/31'));
        assert.deepStrictEqual(new Date('2020/02/29').$addYears(1), new Date('2021/02/28'));
        assert.deepStrictEqual(new Date('2020/02/29').$addYears(2), new Date('2022/02/28'));
        assert.deepStrictEqual(new Date('2022/06/30').$addYears(-1), new Date('2021/06/30'));
        assert.deepStrictEqual(new Date('2022/06/30').$addYears(-2), new Date('2020/06/30'));
    });
});
