/// <reference path="../types/Array.groupByToMap.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.groupByToMap.js');

describe('Array', () => {
    it('Array.prototype.$groupByToMap', () => {
        assert.isFunction(Array.prototype.$groupByToMap);

        assert.deepStrictEqual(
            [1, 2, 3, 4, 5].$groupByToMap(e => e % 2),
            new Map([
                [0, [2, 4]],
                [1, [1, 3, 5]]
            ])
        );

        assert.deepStrictEqual(
            [
                { name: 'asparagus', type: 'vegetables', quantity: 5 },
                { name: 'bananas', type: 'fruit', quantity: 0 },
                { name: 'goat', type: 'meat', quantity: 23 },
                { name: 'cherries', type: 'fruit', quantity: 5 },
                { name: 'fish', type: 'meat', quantity: 22 }
            ].$groupByToMap('type'),
            new Map([
                ['vegetables', [
                    { name: 'asparagus', type: 'vegetables', quantity: 5 },
                ]],
                ['fruit', [
                    { name: "bananas", type: "fruit", quantity: 0 },
                    { name: "cherries", type: "fruit", quantity: 5 }
                ]],
                ['meat', [
                    { name: "goat", type: "meat", quantity: 23 },
                    { name: "fish", type: "meat", quantity: 22 }
                ]]
            ])
        );

        assert.deepStrictEqual(
            [
                { name: 'asparagus', type: 'vegetables', quantity: 5 },
                { name: 'bananas', type: 'fruit', quantity: 0 },
                { name: 'goat', type: 'meat', quantity: 23 },
                { name: 'cherries', type: 'fruit', quantity: 5 },
                { name: 'fish', type: 'meat', quantity: 22 }
            ].$groupByToMap(e => ({ type: e.type }), (k1, k2) => k1.type === k2.type),
            new Map([
                [{ type: 'vegetables' }, [
                    { name: 'asparagus', type: 'vegetables', quantity: 5 },
                ]],
                [{ type: 'fruit' }, [
                    { name: "bananas", type: "fruit", quantity: 0 },
                    { name: "cherries", type: "fruit", quantity: 5 }
                ]],
                [{ type: 'meat' }, [
                    { name: "goat", type: "meat", quantity: 23 },
                    { name: "fish", type: "meat", quantity: 22 }
                ]]
            ])
        );
    });
});
