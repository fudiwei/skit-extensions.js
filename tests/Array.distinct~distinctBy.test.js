/// <reference path="../types/Array.distinct~distinctBy.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.distinct~distinctBy.js');

describe('Array', () => {
    it('Array.prototype.$distinct', () => {
        assert.isFunction(Array.prototype.$distinct);
        assert.deepStrictEqual([1, 1, 2].$distinct(), [1, 2]);
        assert.deepStrictEqual([{ id: 1 }, { id: 1 }, { id: 2 }].$distinct((a, b) => a.id === b.id), [{ id: 1 }, { id: 2 }]);
        assert.deepStrictEqual([NaN, NaN, 0].$distinct(), [NaN, 0]);
    });

    it('Array.prototype.$distinctBy', () => {
        assert.isFunction(Array.prototype.$distinctBy);
        assert.deepStrictEqual([1, 1, 2].$distinctBy(), [1, 2]);
        assert.deepStrictEqual([{ id: 1 }, { id: 1 }, { id: 2 }].$distinctBy('id'), [{ id: 1 }, { id: 2 }]);
        assert.deepStrictEqual([{ id: 1 }, { id: 1 }, { id: 2 }].$distinctBy((e) => e.id), [{ id: 1 }, { id: 2 }]);
        assert.deepStrictEqual([{ id: 1 }, { id: '1' }, { id: 2 }].$distinctBy((e) => e.id), [{ id: 1 }, { id: '1' }, { id: 2 }]);
        assert.deepStrictEqual([{ id: 1 }, { id: '1' }, { id: 2 }].$distinctBy((e) => +e.id), [{ id: 1 }, { id: 2 }]);
        assert.deepStrictEqual([NaN, NaN, 0].$distinctBy(), [NaN, 0]);
    });
});
