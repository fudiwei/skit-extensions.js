/// <reference path="../types/String.toSnakeCase.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toSnakeCase.js');

describe('String', () => {
    it('String.prototype.$toSnakeCase', () => {
        assert.isFunction(String.prototype.$toSnakeCase);
        assert.strictEqual('fooBar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('foo-bar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('FooBar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('FOO_BAR'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('foo_bar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('foo bar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('Foo Bar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('foo.bar'.$toSnakeCase(), 'foo_bar');
        assert.strictEqual('--FOO-BAR--'.$toSnakeCase(), 'foo_bar');
    });
});
