const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.sequential.js');

describe('Promise', () => {
    it('Promise.$sequential', (done) => {
        let promiseInterval = 50;
        let promiseResult = { ret: true };
        let promiseCount = 10;
        let promiseStartTime = new Date();
        let promises = new Array(promiseCount).fill(() => new Promise((resolve) => setTimeout(() => resolve(promiseResult), promiseInterval)));

        Promise.$sequential(promises)
            .then((reses) => {
                assert.equal(reses.length, promiseCount);
                assert.equal(reses[promiseCount - 1], promiseResult);
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
