const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.isWeekend.js');

describe('Date', () => {
    it('Date.prototype.$isWeekend', () => {
        assert.isTrue(new Date('2000-01-01 08:00:00').$isWeekend());  // Saturday
        assert.isTrue(new Date('2000-01-02 08:00:00').$isWeekend());  // Sunday
        assert.isFalse(new Date('2000-01-03 08:00:00').$isWeekend()); // Monday
        assert.isFalse(new Date('2000-01-04 08:00:00').$isWeekend()); // Tuesday
        assert.isFalse(new Date('2000-01-05 08:00:00').$isWeekend()); // Wednesday
        assert.isFalse(new Date('2000-01-06 08:00:00').$isWeekend()); // Thursday
        assert.isFalse(new Date('2000-01-07 08:00:00').$isWeekend()); // Friday
        assert.isTrue(new Date('2000-01-08 08:00:00').$isWeekend());  // Saturday
    });
});
