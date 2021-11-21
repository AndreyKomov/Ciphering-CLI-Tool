const { expect } = require('@jest/globals');
const atbash = require('../atbash');

test('should return correct value', () => {
    expect(atbash.atbash('AaZmO')).toBe('ZzAnL');
})