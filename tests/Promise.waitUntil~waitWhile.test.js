/// <reference path="../types/Promise.waitUntil~waitWhile.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.waitUntil~waitWhile.js');

describe('Promise', () => {
    it('Promise.$waitUntil', (done) => {
        assert.isFunction(Promise.$waitUntil);

        let promiseFlag = false;
        let promiseInterval = 300;
        let promiseResult = { ret: true };
        let promiseStartTime = new Date();

        Promise.$waitUntil(() => promiseFlag, promiseResult)
            .then((res) => {
                expect.equals(res, promiseResult);
                assert.isAbove(new Date().getTime() - promiseInterval, promiseStartTime.getTime() - 1);
                return;
            })
            .finally(() => {
                done();
            });

        setTimeout(() => (promiseFlag = true), promiseInterval);
    });

    it('Promise.$waitWhile', (done) => {
        assert.isFunction(Promise.$waitWhile);

        let promiseFlag = true;
        let promiseInterval = 300;
        let promiseResult = { ret: true };
        let promiseStartTime = new Date();

        Promise.$waitWhile(() => promiseFlag, promiseResult)
            .then((res) => {
                expect.equals(res, promiseResult);
                assert.isAbove(new Date().getTime() - promiseInterval, promiseStartTime.getTime() - 1);
                return;
            })
            .finally(() => {
                done();
            });

        setTimeout(() => (promiseFlag = false), promiseInterval);
    });
});
