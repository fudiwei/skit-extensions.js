const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.min~minBy~max~maxBy.js');

describe('Array', () => {
    it('Array.prototype.$min', () => {
        assert.isFunction(Array.prototype.$min);
        assert.strictEqual([4, 2, 5, 1, 3].$min(), 1);
        assert.strictEqual(['1', '30', '4', '21', '100000'].$min(), '1');
        assert.strictEqual(['1', '30', '4', '21', '100000'].$min((a, b) => +a - +b), '1');

        const array = [
            { name: 'Barley', age: 8 },
            { name: 'Boots', age: 4 },
            { name: 'Whiskers', age: 1 }
        ];
        assert.deepStrictEqual(array.$min((a, b) => a.age - b.age), { name: 'Whiskers', age: 1 });
    });

    it('Array.prototype.$minBy', () => {
        assert.isFunction(Array.prototype.$minBy);
        assert.strictEqual([4, 2, 5, 1, 3].$minBy(), 1);
        assert.strictEqual(['1', '30', '4', '21', '100000'].$minBy((e) => +e), '1');

        const array = [
            { name: 'Barley', age: 8 },
            { name: 'Boots', age: 4 },
            { name: 'Whiskers', age: 1 }
        ];
        assert.deepStrictEqual(array.$minBy((e) => e.age), { name: 'Whiskers', age: 1 });
        assert.deepStrictEqual(array.$minBy('age'), { name: 'Whiskers', age: 1 });
    });

    it('Array.prototype.$max', () => {
        assert.isFunction(Array.prototype.$max);
        assert.strictEqual([4, 2, 5, 1, 3].$max(), 5);
        assert.strictEqual(['1', '30', '4', '21', '100000'].$max(), '4');
        assert.strictEqual(['1', '30', '4', '21', '100000'].$max((a, b) => +a - +b), '100000');

        const array = [
            { name: 'Barley', age: 8 },
            { name: 'Boots', age: 4 },
            { name: 'Whiskers', age: 1 }
        ];
        assert.deepStrictEqual(array.$max((a, b) => a.age - b.age), { name: 'Barley', age: 8 });
    });

    it('Array.prototype.$maxBy', () => {
        assert.isFunction(Array.prototype.$maxBy);
        assert.strictEqual([4, 2, 5, 1, 3].$maxBy(), 5);
        assert.strictEqual(['1', '30', '4', '21', '100000'].$maxBy((e) => +e), '100000');

        const array = [
            { name: 'Barley', age: 8 },
            { name: 'Boots', age: 4 },
            { name: 'Whiskers', age: 1 }
        ];
        assert.deepStrictEqual(array.$maxBy((e) => e.age), { name: 'Barley', age: 8 });
        assert.deepStrictEqual(array.$maxBy('age'), { name: 'Barley', age: 8 });
    });
});
