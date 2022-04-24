const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Promise.try.js');

describe('Promise', () => {
    it('Promise.$try', (done) => {
        assert.isFunction(Promise.$try);

        Promise.$try(() => {
            throw 'Oops!';
        }).catch((err) => {
            assert.isNotNull(err);
        }).finally(() => {
            done();
        });
    });
});
