const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.delay.js');

describe('Promise', () => {
    it('Promise.$delay', () => {
        let promiseInterval = 50;
        let promiseResult = { ret: true };
        let promiseStartTime = new Date();

        Promise.$delay(promiseInterval)
            .then(() => {
                expect(new Date().getTime() - promiseInterval).to.greaterThan(promiseStartTime.getTime() - 1);
                return;
            })
            .catch(() => {
                return;
            });

        Promise.$delay(promiseInterval, promiseResult)
            .then((res) => {
                expect(res).to.be.equals(promiseResult);
                expect(new Date().getTime() - promiseInterval).to.greaterThan(promiseStartTime.getTime() - 1);
                return;
            })
            .catch(() => {
                return;
            });
    });
});
