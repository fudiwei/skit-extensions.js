const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.sort~sortAscBy~sortDescBy.js');

describe('Array', () => {
    it('Array.prototype.$sort', () => {
        assert.isFunction(Array.prototype.$sort);
        assert.deepStrictEqual([4, 2, 5, 1, 3].$sort(), [1, 2, 3, 4, 5]);
        assert.deepStrictEqual(['1', '30', '4', '21', '100000'].$sort(), ['1', '100000', '21', '30', '4']);
    });

    it('Array.prototype.$sortAscBy', () => {
        assert.isFunction(Array.prototype.$sortAscBy);

        assert.deepStrictEqual([4, 2, 5, 1, 3].$sortAscBy(), [1, 2, 3, 4, 5]);
        assert.deepStrictEqual(['1', '30', '4', '21', '100000'].$sortAscBy((e) => e), ['1', '100000', '21', '30', '4']);

        const sourceArray = [
            { user: 'fred', age: 48 },
            { user: 'barney', age: 36 },
            { user: 'tom', age: 40 },
            { user: 'jack', age: 36 }
        ];
        const sortedArray = [
            { user: 'barney', age: 36 },
            { user: 'jack', age: 36 },
            { user: 'tom', age: 40 },
            { user: 'fred', age: 48 }
        ];
        assert.notStrictEqual(sourceArray, sourceArray.$sortDescBy());
        assert.deepStrictEqual(sourceArray.$sortAscBy((e) => e.age), sortedArray);
        assert.deepStrictEqual(sourceArray.$sortAscBy('age'), sortedArray);
    });

    it('Array.prototype.$sortDescBy', () => {
        assert.isFunction(Array.prototype.$sortDescBy);

        assert.deepStrictEqual([4, 2, 5, 1, 3].$sortDescBy(), [5, 4, 3, 2, 1]);
        assert.deepStrictEqual(['1', '30', '4', '21', '100000'].$sortDescBy((e) => e), ['4', '30', '21', '100000', '1']);

        const sourceArray = [
            { user: 'fred', age: 48 },
            { user: 'barney', age: 36 },
            { user: 'tom', age: 40 },
            { user: 'jack', age: 36 }
        ];
        const sortedArray = [
            { user: 'fred', age: 48 },
            { user: 'tom', age: 40 },
            { user: 'barney', age: 36 },
            { user: 'jack', age: 36 }
        ];
        assert.notStrictEqual(sourceArray, sourceArray.$sortDescBy());
        assert.deepStrictEqual(sourceArray.$sortDescBy((e) => e.age), sortedArray);
        assert.deepStrictEqual(sourceArray.$sortDescBy('age'), sortedArray);
    });
});
