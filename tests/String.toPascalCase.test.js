const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toPascalCase.js');

describe('String', () => {
    it('String.prototype.$toPascalCase', () => {
        assert.equal('fooBar'.$toPascalCase(), 'FooBar');
        assert.equal('foo-bar'.$toPascalCase(), 'FooBar');
        assert.equal('FooBar'.$toPascalCase(), 'FooBar');
        assert.equal('FOO_BAR'.$toPascalCase(), 'FooBar');
        assert.equal('foo_bar'.$toPascalCase(), 'FooBar');
        assert.equal('foo bar'.$toPascalCase(), 'FooBar');
        assert.equal('Foo Bar'.$toPascalCase(), 'FooBar');
        assert.equal('foo.bar'.$toPascalCase(), 'FooBar');
        assert.equal('--FOO-BAR--'.$toPascalCase(), 'FooBar');
    });
});
