const { expect } = require('@jest/globals');
const atbash = require('../atbash');

test('should return correct value', () => {
    expect(atbash.atbash('AaZmO')).toBe('ZzAnL');
})

test('should return non latin symbols without changing', () => {
    expect(atbash.atbash('! абвгд ()90%')).toBe('! абвгд ()90%');
})
