/// <reference path="../types/Function.throttle.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Function.throttle.js');

describe('Function', () => {
    it('Function.$throttle', (done) => {
        assert.isFunction(Function.$throttle);

        let func = (arg) => {
            throttleCount++;
            assert.strictEqual(throttleCount, 1);
            assert.isAbove(new Date().getTime() - throttleInterval, throttleStartTime.getTime() - 1);
            return arg;
        };
        let throttleInterval = 1000;
        let throttleCount = 0;
        let throttleFulfilledAccumulator = 0;
        let throttleRejectedAccumulator = 0;
        let throttleStartTime = new Date();
        let throttleString = 'bingo';
        let throttleFunc = Function.$throttle(func, throttleInterval);

        assert.isFunction(throttleFunc);

        throttleFunc(throttleString).then((res) => {
            throttleFulfilledAccumulator++;
            assert.strictEqual(throttleString, res);
        }).catch(() => {
            throttleRejectedAccumulator++;
        });

        throttleFunc(throttleString).then((res) => {
            throttleFulfilledAccumulator++;
            assert.strictEqual(throttleString, res);
        }).catch(() => {
            throttleRejectedAccumulator++;
        });

        setTimeout(() => {
            throttleFunc(throttleString).then((res) => {
                throttleFulfilledAccumulator++;
                assert.strictEqual(throttleString, res);
            }).catch(() => {
                throttleRejectedAccumulator++;
            });
        }, throttleInterval / 2);

        setTimeout(() => {
            assert.strictEqual(throttleFulfilledAccumulator, 1);
            assert.strictEqual(throttleRejectedAccumulator, 2);
            done();
        }, throttleInterval * 2);
    });
});
