const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.toPascalCase.js');

describe('String', () => {
    it('String.prototype.$toPascalCase', () => {
        expect('fooBar'.$toPascalCase()).to.be.equals('FooBar');
        expect('foo-bar'.$toPascalCase()).to.be.equals('FooBar');
        expect('FooBar'.$toPascalCase()).to.be.equals('FooBar');
        expect('FOO_BAR'.$toPascalCase()).to.be.equals('FooBar');
        expect('foo_bar'.$toPascalCase()).to.be.equals('FooBar');
        expect('foo bar'.$toPascalCase()).to.be.equals('FooBar');
        expect('Foo Bar'.$toPascalCase()).to.be.equals('FooBar');
        expect('foo.bar'.$toPascalCase()).to.be.equals('FooBar');
        expect('--FOO-BAR--'.$toPascalCase()).to.be.equals('FooBar');
    });
});
