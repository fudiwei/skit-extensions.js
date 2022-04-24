const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toKebabCase.js');

describe('String', () => {
    it('String.prototype.$toKebabCase', () => {
        assert.equal('fooBar'.$toKebabCase(), 'foo-bar');
        assert.equal('foo-bar'.$toKebabCase(), 'foo-bar');
        assert.equal('FooBar'.$toKebabCase(), 'foo-bar');
        assert.equal('FOO_BAR'.$toKebabCase(), 'foo-bar');
        assert.equal('foo_bar'.$toKebabCase(), 'foo-bar');
        assert.equal('foo bar'.$toKebabCase(), 'foo-bar');
        assert.equal('Foo Bar'.$toKebabCase(), 'foo-bar');
        assert.equal('foo.bar'.$toKebabCase(), 'foo-bar');
        assert.equal('--FOO-BAR--'.$toKebabCase(), 'foo-bar');
    });
});
