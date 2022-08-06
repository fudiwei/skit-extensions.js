/// <reference path="../types/Date.unix.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.unix.js');

describe('Date', () => {
    it('Date.$unix', () => {
        assert.isFunction(Date.$unix);

        assert.strictEqual(new Date('2020-01-01 12:34:56').toString(), Date.$unix(1577853296).toString());
    });

    it('Date.prototype.$unix', () => {
        assert.isFunction(Date.prototype.$unix);

        assert.strictEqual(new Date('2020-01-01 12:34:56').$unix(), parseInt(1577853296));
    });
});
