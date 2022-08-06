/// <reference path="../types/String.toKebabCase.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toKebabCase.js');

describe('String', () => {
    it('String.prototype.$toKebabCase', () => {
        assert.isFunction(String.prototype.$toKebabCase);
        assert.strictEqual('fooBar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('foo-bar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('FooBar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('FOO_BAR'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('foo_bar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('foo bar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('Foo Bar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('foo.bar'.$toKebabCase(), 'foo-bar');
        assert.strictEqual('--FOO-BAR--'.$toKebabCase(), 'foo-bar');
    });
});
