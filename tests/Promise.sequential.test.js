/// <reference path="../types/Promise.sequential.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.sequential.js');

describe('Promise', () => {
    it('Promise.$sequential', (done) => {
        assert.isFunction(Promise.$sequential);

        let promiseInterval = 300;
        let promiseResult = { ret: true };
        let promiseCount = 3;
        let promiseStartTime = new Date();
        let promises = new Array(promiseCount).fill(() => new Promise((resolve) => setTimeout(() => resolve(promiseResult), promiseInterval)));

        Promise.$sequential(promises)
            .then((reses) => {
                assert.strictEqual(reses.length, promiseCount);
                assert.strictEqual(reses[promiseCount - 1], promiseResult);
                assert.isAbove(new Date().getTime() - promiseInterval * promiseCount, promiseStartTime.getTime() - 1);
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
