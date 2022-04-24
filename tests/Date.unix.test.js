const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.unix.js');

describe('Date', () => {
    it('Date.$unix', () => {
        assert.isFunction(Date.$unix);

        const date = new Date('1970-01-01 00:00:00');
        const offset = new Date().getTimezoneOffset() * 60 * 1000;
        assert.strictEqual(Date.$unix(0).getTime(), date.getTime() - offset);
    });

    it('Date.prototype.$unix', () => {
        assert.isFunction(Date.prototype.$unix);

        let date, offset;
        date = new Date('1970-01-01 00:00:00');
        offset = new Date().getTimezoneOffset() * 60 * 1000;
        assert.strictEqual(new Date().$unix(0).getTime(), date.getTime() - offset);

        date = new Date('2000-01-01 00:00:00');
        assert.strictEqual(date.$unix(), parseInt(date.getTime() / 1000));
    });
});
