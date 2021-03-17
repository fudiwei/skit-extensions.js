const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.format.js');

describe('Date', () => {
    it('Date.prototype.$format', () => {
        const now = new Date();

        expect(now.$format('yyyy')).to.be.equal(String(now.getFullYear()).padStart(4, '0'));
        expect(now.$format('MM')).to.be.equal(String(now.getMonth() + 1).padStart(2, '0'));
        expect(now.$format('dd')).to.be.equal(String(now.getDate()).padStart(2, '0'));
        expect(now.$format('HH')).to.be.equal(String(now.getHours()).padStart(2, '0'));
        expect(now.$format('mm')).to.be.equal(String(now.getMinutes()).padStart(2, '0'));
        expect(now.$format('ss')).to.be.equal(String(now.getSeconds()).padStart(2, '0'));

        expect(now.$format('M')).to.be.equal(String(now.getMonth() + 1));
        expect(now.$format('d')).to.be.equal(String(now.getDate()));
        expect(now.$format('H')).to.be.equal(String(now.getHours()));
        expect(now.$format('m')).to.be.equal(String(now.getMinutes()));
        expect(now.$format('s')).to.be.equal(String(now.getSeconds()));

        expect(now.$format('yyyy/MM/dd')).to.be.equal(
            `${String(now.getFullYear()).padStart(4, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')}`
        );
        expect(now.$format('H:m:s')).to.be.equal(`${String(now.getHours())}:${String(now.getMinutes())}:${String(now.getSeconds())}`);
    });
});
