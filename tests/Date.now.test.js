const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.now.js');

describe('Date', () => {
    it('Date.$now', () => {
        const date = new Date();
        const now = Date.$now();

        expect(now.getFullYear()).to.be.equal(date.getFullYear());
        expect(now.getMonth()).to.be.equal(date.getMonth());
        expect(now.getDate()).to.be.equal(date.getDate());
        expect(now.getHours()).to.be.equal(date.getHours());
        expect(now.getMinutes()).to.be.equal(date.getMinutes());
        expect(now.getSeconds()).to.be.equal(date.getSeconds());
        expect(now.getMilliseconds()).to.be.equal(date.getMilliseconds());
    });
});
