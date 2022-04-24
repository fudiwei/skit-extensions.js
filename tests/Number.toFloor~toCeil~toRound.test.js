const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.toFloor~toCeil~toRound.js');

describe('Number', () => {
    it('Number.prototype.$toFloor', () => {
        assert.equal((123).$toFloor(), '123');
        assert.equal((123).$toFloor(2), '123.00');
        assert.equal((123.456).$toFloor(), '123');
        assert.equal((123.456).$toFloor(0), '123');
        assert.equal((123.456).$toFloor(1), '123.4');
        assert.equal((123.456).$toFloor(2), '123.45');
        assert.equal((123.456).$toFloor(3), '123.456');
        assert.equal((123.456).$toFloor(4), '123.4560');
        assert.equal((NaN).$toFloor(), 'NaN');
    });

    it('Number.prototype.$toCeil', () => {
        assert.equal((123).$toCeil(), '123');
        assert.equal((123).$toCeil(2), '123.00');
        assert.equal((123.456).$toCeil(), '124');
        assert.equal((123.456).$toCeil(0), '124');
        assert.equal((123.456).$toCeil(1), '123.5');
        assert.equal((123.456).$toCeil(2), '123.46');
        assert.equal((123.456).$toCeil(3), '123.456');
        assert.equal((123.456).$toCeil(4), '123.4560');
        assert.equal((NaN).$toCeil(), 'NaN');
    });

    it('Number.prototype.$toRound', () => {
        assert.equal((123).$toRound(), '123');
        assert.equal((123).$toRound(2), '123.00');
        assert.equal((123.456).$toRound(), '123');
        assert.equal((123.456).$toRound(0), '123');
        assert.equal((123.456).$toRound(1), '123.5');
        assert.equal((123.456).$toRound(2), '123.46');
        assert.equal((123.456).$toRound(3), '123.456');
        assert.equal((123.456).$toRound(4), '123.4560');
        assert.equal((NaN).$toRound(), 'NaN');
    });
});
