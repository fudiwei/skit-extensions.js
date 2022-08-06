/// <reference path="../types/Array.groupBy.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.groupBy.js');

describe('Array', () => {
    it('Array.prototype.$groupBy', () => {
        assert.isFunction(Array.prototype.$groupBy);

        assert.deepStrictEqual(
            [1, 2, 3, 4, 5].$groupBy(e => e % 2),
            {
                1: [1, 3, 5],
                0: [2, 4]
            }
        );

        assert.deepStrictEqual(
            [
                { name: 'asparagus', type: 'vegetables', quantity: 5 },
                { name: 'bananas', type: 'fruit', quantity: 0 },
                { name: 'goat', type: 'meat', quantity: 23 },
                { name: 'cherries', type: 'fruit', quantity: 5 },
                { name: 'fish', type: 'meat', quantity: 22 }
            ].$groupBy('type'),
            {
                vegetables: [
                    { name: 'asparagus', type: 'vegetables', quantity: 5 },
                ],
                fruit: [
                    { name: "bananas", type: "fruit", quantity: 0 },
                    { name: "cherries", type: "fruit", quantity: 5 }
                ],
                meat: [
                    { name: "goat", type: "meat", quantity: 23 },
                    { name: "fish", type: "meat", quantity: 22 }
                ]
            }
        );
    });
});
