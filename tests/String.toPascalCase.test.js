/// <reference path="../types/String.toPascalCase.d.ts" />

const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toPascalCase.js');

describe('String', () => {
    it('String.prototype.$toPascalCase', () => {
        assert.isFunction(String.prototype.$toPascalCase);
        assert.strictEqual('fooBar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('foo-bar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('FooBar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('FOO_BAR'.$toPascalCase(), 'FooBar');
        assert.strictEqual('foo_bar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('foo bar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('Foo Bar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('foo.bar'.$toPascalCase(), 'FooBar');
        assert.strictEqual('--FOO-BAR--'.$toPascalCase(), 'FooBar');
    });
});
