const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.shuffle.js');

describe('Array', () => {
    it('Array.$shuffle', () => {
        assert.isFunction(Array.$shuffle);

        const oriArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const curArray = Array.$shuffle(oriArray);
        assert.notEqual(curArray, oriArray);
        assert.notDeepEqual(curArray, oriArray);
        assert.deepStrictEqual(curArray.sort(), oriArray.sort());
    });

    it('Array.prototype.$shuffle', () => {
        assert.isFunction(Array.prototype.$shuffle);

        const oriArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const curArray = oriArray.$shuffle();
        assert.notEqual(curArray, oriArray);
        assert.notDeepEqual(curArray, oriArray);
        assert.deepStrictEqual(curArray.sort(), oriArray.sort());
    });
});
