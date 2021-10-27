const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toSnakeCase.js');

describe('String', () => {
    it('String.prototype.$toSnakeCase', () => {
        expect('fooBar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('foo-bar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('FooBar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('FOO_BAR'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('foo_bar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('foo bar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('Foo Bar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('foo.bar'.$toSnakeCase()).to.be.equals('foo_bar');
        expect('--FOO-BAR--'.$toSnakeCase()).to.be.equals('foo_bar');
    });
});
