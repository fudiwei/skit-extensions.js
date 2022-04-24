const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toSnakeCase.js');

describe('String', () => {
    it('String.prototype.$toSnakeCase', () => {
        assert.equal('fooBar'.$toSnakeCase(), 'foo_bar');
        assert.equal('foo-bar'.$toSnakeCase(), 'foo_bar');
        assert.equal('FooBar'.$toSnakeCase(), 'foo_bar');
        assert.equal('FOO_BAR'.$toSnakeCase(), 'foo_bar');
        assert.equal('foo_bar'.$toSnakeCase(), 'foo_bar');
        assert.equal('foo bar'.$toSnakeCase(), 'foo_bar');
        assert.equal('Foo Bar'.$toSnakeCase(), 'foo_bar');
        assert.equal('foo.bar'.$toSnakeCase(), 'foo_bar');
        assert.equal('--FOO-BAR--'.$toSnakeCase(), 'foo_bar');
    });
});
