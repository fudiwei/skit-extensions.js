const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toCamelCase.js');

describe('String', () => {
    it('String.prototype.$toCamelCase', () => {
        expect('fooBar'.$toCamelCase()).to.be.equals('fooBar');
        expect('foo-bar'.$toCamelCase()).to.be.equals('fooBar');
        expect('FooBar'.$toCamelCase()).to.be.equals('fooBar');
        expect('FOO_BAR'.$toCamelCase()).to.be.equals('fooBar');
        expect('foo_bar'.$toCamelCase()).to.be.equals('fooBar');
        expect('foo bar'.$toCamelCase()).to.be.equals('fooBar');
        expect('Foo Bar'.$toCamelCase()).to.be.equals('fooBar');
        expect('foo.bar'.$toCamelCase()).to.be.equals('fooBar');
        expect('--FOO-BAR--'.$toCamelCase()).to.be.equals('fooBar');
    });
});
