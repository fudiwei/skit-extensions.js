const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toKebabCase.js');

describe('String', () => {
    it('String.prototype.$toKebabCase', () => {
        expect('fooBar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('foo-bar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('FooBar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('FOO_BAR'.$toKebabCase()).to.be.equals('foo-bar');
        expect('foo_bar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('foo bar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('Foo Bar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('foo.bar'.$toKebabCase()).to.be.equals('foo-bar');
        expect('--FOO-BAR--'.$toKebabCase()).to.be.equals('foo-bar');
    });
});
