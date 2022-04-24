const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Function.debounce.js');

describe('Function', () => {
    it('Function.$debounce', (done) => {
        let func = () => {
            debounceCount++;
            assert.equal(debounceCount, 1);
            assert.isAbove(new Date().getTime() - debounceInterval, debounceStartTime.getTime() - 1);
            done();
        };
        let debounceInterval = 1000;
        let debounceCount = 0;
        let debounceStartTime = new Date();
        let debounceFunc = Function.$debounce(func, debounceInterval);

        debounceFunc();
        debounceFunc();
        setTimeout(debounceFunc, debounceInterval / 2);
    });
});
