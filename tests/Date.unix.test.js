const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.unix.js');

describe('Date', () => {
    it('Date.$uinx(timestamp)', () => {
        const date = new Date('1970-01-01 00:00:00');
        const offset = new Date().getTimezoneOffset() * 60 * 1000;
        assert.equal(Date.$unix(0).getTime(), date.getTime() - offset);
    });

    it('Date.prototype.$uinx(timestamp)', () => {
        const date = new Date('1970-01-01 00:00:00');
        const offset = new Date().getTimezoneOffset() * 60 * 1000;
        assert.equal(new Date().$unix(0).getTime(), date.getTime() - offset);
    });

    it('Date.prototype.$uinx()', () => {
        const date = new Date('2000-01-01 00:00:00');
        assert.equal(date.$unix(), parseInt(date.getTime() / 1000));
    });
});
