const { describe, it, expect } = require('chai');

require('../src/extends-Promise.js');

describe('expect', () => {
    it('Promise.delay', () => {
        let promiseInterval = 50;
        let promiseResult = { ret: true };
        let promiseStartTime = new Date();

        Promise.delay(promiseInterval)
            .then(() => {
                expect(new Date().getTime() - promiseInterval).to.greaterThan(promiseStartTime.getTime() - 1);
                return;
            })
            .catch(() => {
                return;
            });

        Promise.delay(promiseInterval, promiseResult)
            .then((res) => {
                expect(res).to.be.equals(promiseResult);
                expect(new Date().getTime() - promiseInterval).to.greaterThan(promiseStartTime.getTime() - 1);
                return;
            })
            .catch(() => {
                return;
            });
    });

    it('Promise.sequential', () => {
        let promiseInterval = 50;
        let promiseResult = { ret: true };
        let promiseCount = 10;
        let promiseStartTime = new Date();
        let promises = new Array(promiseCount).fill(() => new Promise((resolve) => setTimeout(() => resolve(promiseResult), promiseInterval)));

        Promise.sequential(promises)
            .then((reses) => {
                expect(reses).to.be.lengthOf(promiseCount);
                expect(reses[promiseCount - 1]).to.be.equals(promiseResult);
                expect(new Date().getTime() - promiseInterval * promiseCount).to.greaterThan(promiseStartTime.getTime() - 1);
                return;
            })
            .catch(() => {
                return;
            });
    });
});
