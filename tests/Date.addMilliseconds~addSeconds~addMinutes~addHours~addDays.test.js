const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.addMilliseconds~addSeconds~addMinutes~addHours~addDays.js');

describe('Date', () => {
    it('Date.prototype.$addMilliseconds', () => {
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addMilliseconds(1000), new Date('2020/01/01 00:00:01'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addMilliseconds(-1000), new Date('2019/12/31 23:59:59'));
    });

    it('Date.prototype.$addSeconds', () => {
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addSeconds(1), new Date('2020/01/01 00:00:01'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addSeconds(-1), new Date('2019/12/31 23:59:59'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addSeconds(0.5), new Date('2020/01/01 00:00:00:500'));
    });

    it('Date.prototype.$addMinutes', () => {
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addMinutes(1), new Date('2020/01/01 00:01:00'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addMinutes(-1), new Date('2019/12/31 23:59:00'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addMinutes(0.5), new Date('2020/01/01 00:00:30'));
    });

    it('Date.prototype.$addHours', () => {
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addHours(1), new Date('2020/01/01 01:00:00'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addHours(-1), new Date('2019/12/31 23:00:00'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addHours(0.5), new Date('2020/01/01 00:30:00'));
    });

    it('Date.prototype.$addDays', () => {
        assert.deepEqual(new Date('2020/02/28').$addDays(1), new Date('2020/02/29'));
        assert.deepEqual(new Date('2020/02/29').$addDays(1), new Date('2020/03/01'));
        assert.deepEqual(new Date('2020/12/01').$addDays(1), new Date('2020/12/02'));
        assert.deepEqual(new Date('2020/12/31').$addDays(1), new Date('2021/01/01'));
        assert.deepEqual(new Date('2021/01/01').$addDays(-1), new Date('2020/12/31'));
        assert.deepEqual(new Date('2020/01/01 00:00:00').$addDays(0.5), new Date('2020/01/01 12:00:00'));
    });
});
