/// <reference path="../types/Object.deepEquals.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/Object.deepEquals.js');

describe('Object', () => {
    it('Object.$deepEquals', () => {
        assert.isFunction(Object.$deepEquals);
    });

    it('Object.$deepEquals: primitives', () => {
        assert.isTrue(Object.$deepEquals(1, 1));
        assert.isTrue(Object.$deepEquals(1, Object(1)));
        assert.isFalse(Object.$deepEquals(1, '1'));
        assert.isFalse(Object.$deepEquals(1, 2));

        assert.isTrue(Object.$deepEquals(-0, -0));
        assert.isTrue(Object.$deepEquals(0, 0));
        assert.isTrue(Object.$deepEquals(0, Object(0)));
        assert.isTrue(Object.$deepEquals(Object(0), Object(0)));
        assert.isTrue(Object.$deepEquals(-0, 0));
        assert.isFalse(Object.$deepEquals(0, '0'));
        assert.isFalse(Object.$deepEquals(0, null));

        assert.isTrue(Object.$deepEquals(NaN, NaN));
        assert.isTrue(Object.$deepEquals(NaN, Object(NaN)));
        assert.isTrue(Object.$deepEquals(Object(NaN), Object(NaN)));
        assert.isFalse(Object.$deepEquals(NaN, 'a'));
        assert.isFalse(Object.$deepEquals(NaN, Infinity));

        assert.isTrue(Object.$deepEquals('a', 'a'));
        assert.isTrue(Object.$deepEquals('a', Object('a')));
        assert.isTrue(Object.$deepEquals(Object('a'), Object('a')));
        assert.isFalse(Object.$deepEquals('a', 'b'));
        assert.isFalse(Object.$deepEquals('a', ['a']));

        assert.isTrue(Object.$deepEquals(true, true));
        assert.isTrue(Object.$deepEquals(true, Object(true)));
        assert.isTrue(Object.$deepEquals(Object(true), Object(true)));
        assert.isFalse(Object.$deepEquals(true, 1));
        assert.isFalse(Object.$deepEquals(true, 'a'));

        assert.isTrue(Object.$deepEquals(false, false));
        assert.isTrue(Object.$deepEquals(false, Object(false)));
        assert.isTrue(Object.$deepEquals(Object(false), Object(false)));
        assert.isFalse(Object.$deepEquals(false, 0));
        assert.isFalse(Object.$deepEquals(false, ''));

        const SYMBOL1 = Symbol('a');
        const SYMBOL2 = Symbol('b');
        assert.isTrue(Object.$deepEquals(SYMBOL1, SYMBOL1));
        assert.isTrue(Object.$deepEquals(SYMBOL1, Object(SYMBOL1)));
        assert.isTrue(Object.$deepEquals(Object(SYMBOL1), Object(SYMBOL1)));
        assert.isFalse(Object.$deepEquals(SYMBOL1, SYMBOL2));

        assert.isTrue(Object.$deepEquals(null, null));
        assert.isFalse(Object.$deepEquals(null, undefined));
        assert.isFalse(Object.$deepEquals(null, {}));
        assert.isFalse(Object.$deepEquals(null, ''));

        assert.isTrue(Object.$deepEquals(undefined, undefined));
        assert.isFalse(Object.$deepEquals(undefined, null));
        assert.isFalse(Object.$deepEquals(undefined, ''));
    });

    it('Object.$deepEquals: arrays', () => {
        let array1 = [true, null, 1, 'a', undefined];
        let array2 = [true, null, 1, 'a', undefined];
        assert.isTrue(Object.$deepEquals(array1, array2));

        array1 = [[1, 2, 3], new Date(2012, 4, 23), /x/, { 'e': 1 }];
        array2 = [[1, 2, 3], new Date(2012, 4, 23), /x/, { 'e': 1 }];
        assert.isTrue(Object.$deepEquals(array1, array2));

        array1 = [1];
        array1[2] = 3;
        array2 = [1];
        array2[1] = undefined;
        array2[2] = 3;
        assert.isTrue(Object.$deepEquals(array1, array2));

        array1 = [Object(1), false, Object('a'), /x/, new Date(2012, 4, 23), ['a', 'b', [Object('c')]], { 'a': 1 }];
        array2 = [1, Object(false), 'a', /x/, new Date(2012, 4, 23), ['a', Object('b'), ['c']], { 'a': 1 }];
        assert.isTrue(Object.$deepEquals(array1, array2));

        array1 = [1, 2, 3];
        array2 = [3, 2, 1];
        assert.isFalse(Object.$deepEquals(array1, array2));

        array1 = [1, 2];
        array2 = [1, 2, 3];
        assert.isFalse(Object.$deepEquals(array1, array2));
    });

    it('Object.$deepEquals: sparse arrays', () => {
        const array = Array(1);

        assert.isTrue(Object.$deepEquals(array, Array(1)));
        assert.isTrue(Object.$deepEquals(array, [undefined]));
        assert.isFalse(Object.$deepEquals(array, Array(2)));
    });

    it('Object.$deepEquals: plain objects', () => {
        let object1 = { 'a': true, 'b': null, 'c': 1, 'd': 'a', 'e': undefined };
        let object2 = { 'a': true, 'b': null, 'c': 1, 'd': 'a', 'e': undefined };
        assert.isTrue(Object.$deepEquals(object1, object2));

        object1 = { 'a': [1, 2, 3], 'b': new Date(2012, 4, 23), 'c': /x/, 'd': { 'e': 1 } };
        object2 = { 'a': [1, 2, 3], 'b': new Date(2012, 4, 23), 'c': /x/, 'd': { 'e': 1 } };
        assert.isTrue(Object.$deepEquals(object1, object2));

        object1 = { 'a': 1, 'b': 2, 'c': 3 };
        object2 = { 'a': 3, 'b': 2, 'c': 1 };
        assert.isFalse(Object.$deepEquals(object1, object2));

        object1 = { 'a': 1, 'b': 2, 'c': 3 };
        object2 = { 'd': 1, 'e': 2, 'f': 3 };
        assert.isFalse(Object.$deepEquals(object1, object2));

        object1 = { 'a': 1, 'b': 2 };
        object2 = { 'a': 1, 'b': 2, 'c': 3 };
        assert.isFalse(Object.$deepEquals(object1, object2));

        object1 = { 'a': 1, 'b': 2, 'c': 3 };
        object2 = { 'c': 3, 'a': 1, 'b': 2 };
        assert.isFalse(Object.$deepEquals(object1, object2));
    });

    it('Object.$deepEquals: nested objects', () => {
        const noop = () => { };
        const object1 = {
            'a': [1, 2, 3],
            'b': true,
            'c': Object(1),
            'd': 'a',
            'e': {
                'f': ['a', Object('b'), 'c'],
                'g': Object(false),
                'h': new Date(2012, 4, 23),
                'i': noop,
                'j': String('a')
            }
        };
        const object2 = {
            'a': [1, Object(2), 3],
            'b': Object(true),
            'c': 1,
            'd': Object('a'),
            'e': {
                'f': ['a', 'b', 'c'],
                'g': false,
                'h': new Date(2012, 4, 23),
                'i': noop,
                'j': 'a'
            }
        };
        assert.isTrue(Object.$deepEquals(object1, object2));
    });

    it('Object.$deepEquals: object instances', () => {
        function Foo () {
            this.a = 1;
        }
        Foo.prototype.a = 1;

        function Bar () {
            this.a = 1;
        }
        Bar.prototype.a = 2;

        assert.isTrue(Object.$deepEquals(new Foo(), new Foo()));
        assert.isFalse(Object.$deepEquals(new Foo(), new Bar()));
        assert.isFalse(Object.$deepEquals({ 'a': 1 }, new Foo()));
        assert.isFalse(Object.$deepEquals({ 'a': 2 }, new Bar()));
    });
});
