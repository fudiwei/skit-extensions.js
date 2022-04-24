const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toCamelCase.js');

describe('String', () => {
    it('String.prototype.$toCamelCase', () => {
        assert.isFunction(String.prototype.$toCamelCase);
        assert.strictEqual('fooBar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('foo-bar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('FooBar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('FOO_BAR'.$toCamelCase(), 'fooBar');
        assert.strictEqual('foo_bar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('foo bar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('Foo Bar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('foo.bar'.$toCamelCase(), 'fooBar');
        assert.strictEqual('--FOO-BAR--'.$toCamelCase(), 'fooBar');
    });
});
