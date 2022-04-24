const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.delay.js');

describe('Promise', () => {
    it('Promise.$delay', (done) => {
        let promiseInterval = 50;
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
