const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toCamelCase.js');

describe('String', () => {
    it('String.prototype.$toCamelCase', () => {
        assert.equal('fooBar'.$toCamelCase(), 'fooBar');
        assert.equal('foo-bar'.$toCamelCase(), 'fooBar');
        assert.equal('FooBar'.$toCamelCase(), 'fooBar');
        assert.equal('FOO_BAR'.$toCamelCase(), 'fooBar');
        assert.equal('foo_bar'.$toCamelCase(), 'fooBar');
        assert.equal('foo bar'.$toCamelCase(), 'fooBar');
        assert.equal('Foo Bar'.$toCamelCase(), 'fooBar');
        assert.equal('foo.bar'.$toCamelCase(), 'fooBar');
        assert.equal('--FOO-BAR--'.$toCamelCase(), 'fooBar');
    });
});
