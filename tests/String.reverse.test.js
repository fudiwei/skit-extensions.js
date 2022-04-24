const { assert } = require('chai');
const { describe, it } = require('mocha');

require('../src/String.reverse.js');

describe('String', () => {
    it('String.prototype.$reverse', () => {
        assert.equal('text'.$reverse(), 'txet');
        assert.equal('emoji 😊 in text'.$reverse(), 'txet ni 😊 ijome');
    });
});
