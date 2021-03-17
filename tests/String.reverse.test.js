const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.reverse.js');

describe('String', () => {
    it('String.prototype.$reverse', () => {
        expect('text'.$reverse()).to.be.equals('txet');
        expect('emoji 😊 in text'.$reverse()).to.be.equals('txet ni 😊 ijome');
    });
});
