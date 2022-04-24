const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Number.toFloor~toCeil~toRound.js');

describe('Number', () => {
    it('Number.prototype.$toFloor', () => {
        assert.isFunction(Number.prototype.$toFloor);
        assert.strictEqual((123).$toFloor(), '123');
        assert.strictEqual((123).$toFloor(2), '123.00');
        assert.strictEqual((123.456).$toFloor(), '123');
        assert.strictEqual((123.456).$toFloor(0), '123');
        assert.strictEqual((123.456).$toFloor(1), '123.4');
        assert.strictEqual((123.456).$toFloor(2), '123.45');
        assert.strictEqual((123.456).$toFloor(3), '123.456');
        assert.strictEqual((123.456).$toFloor(4), '123.4560');
        assert.strictEqual((NaN).$toFloor(), 'NaN');
    });

    it('Number.prototype.$toCeil', () => {
        assert.isFunction(Number.prototype.$toCeil);
        assert.strictEqual((123).$toCeil(), '123');
        assert.strictEqual((123).$toCeil(2), '123.00');
        assert.strictEqual((123.456).$toCeil(), '124');
        assert.strictEqual((123.456).$toCeil(0), '124');
        assert.strictEqual((123.456).$toCeil(1), '123.5');
        assert.strictEqual((123.456).$toCeil(2), '123.46');
        assert.strictEqual((123.456).$toCeil(3), '123.456');
        assert.strictEqual((123.456).$toCeil(4), '123.4560');
        assert.strictEqual((NaN).$toCeil(), 'NaN');
    });

    it('Number.prototype.$toRound', () => {
        assert.isFunction(Number.prototype.$toRound);
        assert.strictEqual((123).$toRound(), '123');
        assert.strictEqual((123).$toRound(2), '123.00');
        assert.strictEqual((123.456).$toRound(), '123');
        assert.strictEqual((123.456).$toRound(0), '123');
        assert.strictEqual((123.456).$toRound(1), '123.5');
        assert.strictEqual((123.456).$toRound(2), '123.46');
        assert.strictEqual((123.456).$toRound(3), '123.456');
        assert.strictEqual((123.456).$toRound(4), '123.4560');
        assert.strictEqual((NaN).$toRound(), 'NaN');
    });
});
