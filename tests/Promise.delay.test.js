/// <reference path="../types/Promise.delay.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.delay.js');

describe('Promise', () => {
    it('Promise.$delay', (done) => {
        assert.isFunction(Promise.$delay);

        let promiseInterval = 300;
        let promiseResult = { ret: true };
        let promiseStartTime = new Date();

        Promise.$delay(promiseInterval, promiseResult)
            .then((res) => {
                expect.equals(res, promiseResult);
                assert.isAbove(new Date().getTime() - promiseInterval, promiseStartTime.getTime() - 1);
                return;
            })
            .catch(() => {
                return;
            })
            .finally(() => {
                done();
            });
    });
});
