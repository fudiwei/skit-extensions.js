const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.isWeekend.js');

describe('Date', () => {
    it('Date.prototype.$isWeekend', () => {
        expect(new Date('2000-01-01 08:00:00').$isWeekend()).to.be.true;  // Saturday
        expect(new Date('2000-01-02 08:00:00').$isWeekend()).to.be.true;  // Sunday
        expect(new Date('2000-01-03 08:00:00').$isWeekend()).to.be.false; // Monday
        expect(new Date('2000-01-04 08:00:00').$isWeekend()).to.be.false; // Tuesday
        expect(new Date('2000-01-05 08:00:00').$isWeekend()).to.be.false; // Wednesday
        expect(new Date('2000-01-06 08:00:00').$isWeekend()).to.be.false; // Thursday
        expect(new Date('2000-01-07 08:00:00').$isWeekend()).to.be.false; // Friday
        expect(new Date('2000-01-08 08:00:00').$isWeekend()).to.be.true;  // Saturday
    });
});
