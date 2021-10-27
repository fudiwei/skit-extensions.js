const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.unix.js');

describe('Date', () => {
    it('Date.prototype.$uinx(timestamp)', () => {
        const date = new Date('1970-01-01 00:00:00');
        const offset = new Date().getTimezoneOffset() * 60 * 1000;
        expect(new Date().$unix(0).getTime()).to.be.equals(date.getTime() - offset);
    });

    it('Date.prototype.$uinx()', () => {
        const date = new Date('2000-01-01 00:00:00');
        expect(date.$unix()).to.be.equals(parseInt(date.getTime() / 1000));
    });
});
