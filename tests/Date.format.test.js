const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.format.js');

describe('Date', () => {
    it('Date.prototype.$format', () => {
        const now = new Date();

        assert.equal(now.$format('yyyy'), String(now.getFullYear()).padStart(4, '0'));
        assert.equal(now.$format('MM'), String(now.getMonth() + 1).padStart(2, '0'));
        assert.equal(now.$format('dd'), String(now.getDate()).padStart(2, '0'));
        assert.equal(now.$format('HH'), String(now.getHours()).padStart(2, '0'));
        assert.equal(now.$format('mm'), String(now.getMinutes()).padStart(2, '0'));
        assert.equal(now.$format('ss'), String(now.getSeconds()).padStart(2, '0'));

        assert.equal(now.$format('M'), String(now.getMonth() + 1));
        assert.equal(now.$format('d'), String(now.getDate()));
        assert.equal(now.$format('H'), String(now.getHours()));
        assert.equal(now.$format('m'), String(now.getMinutes()));
        assert.equal(now.$format('s'), String(now.getSeconds()));

        assert.equal(now.$format('yyyy/MM/dd'),
            `${String(now.getFullYear()).padStart(4, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`
        );
        assert.equal(now.$format('H:m:s'), `${String(now.getHours())}:${String(now.getMinutes())}:${String(now.getSeconds())}`);
    });
});
