const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Date.isToday.js');

describe('Date', () => {
    it('Date.prototype.$isToday', () => {
        const now = new Date();
        const yesterday = new Date(now.getSeconds() - 24 * 60 * 60 * 1000);
        const tomorrow = new Date(now.getSeconds() + 24 * 60 * 60 * 1000);

        expect(now.$isToday()).to.be.true;
        expect(yesterday.$isToday()).to.be.false;
        expect(tomorrow.$isToday()).to.be.false;
    });
});
