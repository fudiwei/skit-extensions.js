const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/extends-Function.js');

describe('expect', () => {
    it('Function.debounce', () => {
        let func = () => {
            debounceCount++;
            expect(debounceCount).to.be.equals(1);
            expect(new Date().getTime() - debounceInterval).to.greaterThan(debounceStartTime.getTime() - 1);
        };
        let debounceInterval = 1000;
        let debounceCount = 0;
        let debounceStartTime = new Date();
        let debounceFunc = Function.debounce(func, debounceInterval);

        debounceFunc();
        debounceFunc();
        setTimeout(debounceFunc, debounceInterval / 2);
    });
});
