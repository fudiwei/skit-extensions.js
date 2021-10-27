const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.zeroTime.js');

describe('Date', () => {
    it('Date.prototype.$zeroTime', () => {
        const date = new Date();
        const zeroTime = date.$zeroTime();

        expect(zeroTime.getFullYear()).to.be.equal(date.getFullYear());
        expect(zeroTime.getMonth()).to.be.equal(date.getMonth());
        expect(zeroTime.getDate()).to.be.equal(date.getDate());
        expect(zeroTime.getHours()).to.be.equal(0);
        expect(zeroTime.getMinutes()).to.be.equal(0);
        expect(zeroTime.getSeconds()).to.be.equal(0);
        expect(zeroTime.getMilliseconds()).to.be.equal(0);
    });
});
