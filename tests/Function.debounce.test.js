/// <reference path="../types/Function.debounce.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Function.debounce.js');

describe('Function', () => {
    it('Function.$debounce', (done) => {
        assert.isFunction(Function.$debounce);

        let func = (arg) => {
            debounceCount++;
            assert.strictEqual(debounceCount, 1);
            assert.isAbove(new Date().getTime() - debounceInterval, debounceStartTime.getTime() - 1);
            return arg;
        };
        let debounceInterval = 1000;
        let debounceCount = 0;
        let debounceFulfilledAccumulator = 0;
        let debounceStartTime = new Date();
        let debounceString = 'bingo';
        let debounceFunc = Function.$debounce(func, debounceInterval);

        assert.isFunction(debounceFunc);

        debounceFunc(debounceString).then((res) => {
            debounceFulfilledAccumulator++;
            assert.strictEqual(debounceString, res);
        });

        debounceFunc(debounceString).then((res) => {
            debounceFulfilledAccumulator++;
            assert.strictEqual(debounceString, res);
        });

        setTimeout(() => {
            debounceFunc(debounceString).then((res) => {
                debounceFulfilledAccumulator++;
                assert.strictEqual(debounceString, res);
            });
        }, debounceInterval / 2);

        setTimeout(() => {
            assert.strictEqual(debounceFulfilledAccumulator, 1);
            done();
        }, debounceInterval * 2);
    });
});
