const { expect } = require('chai');
const { describe, it } = require('mocha');

require('../src/Array.orderBy~orderByDesc.js');

describe('Array', () => {
    it('Array.prototype.$orderBy', () => {
        const numbers = [4, 2, 5, 1, 3];
        numbers.$orderBy();
        expect(numbers).to.deep.equal([1, 2, 3, 4, 5]);

        const items = [
            { user: 'fred', age: 48 },
            { user: 'barney', age: 36 },
            { user: 'tom', age: 40 },
            { user: 'jack', age: 34 }
        ];
        items.$orderBy((e) => e.age);
        expect(items).to.deep.equal([
            { user: 'jack', age: 34 },
            { user: 'barney', age: 36 },
            { user: 'tom', age: 40 },
            { user: 'fred', age: 48 }
        ]);
    });

    it('Array.prototype.$orderByDesc', () => {
        const numbers = [4, 2, 5, 1, 3];
        numbers.$orderByDesc();
        expect(numbers).to.deep.equal([5, 4, 3, 2, 1]);

        const items = [
            { user: 'fred', age: 48 },
            { user: 'barney', age: 36 },
            { user: 'tom', age: 40 },
            { user: 'jack', age: 34 }
        ];
        items.$orderByDesc((e) => e.age);
        expect(items).to.deep.equal([
            { user: 'fred', age: 48 },
            { user: 'tom', age: 40 },
            { user: 'barney', age: 36 },
            { user: 'jack', age: 34 }
        ]);
    });
});
