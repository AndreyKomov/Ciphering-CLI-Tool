const { expect } = require('@jest/globals');
const cesar = require('../cesar');

test('should return correct value', () => {
    expect(cesar.cesar('abcde', 1)).toBe('bcdef');
});

test('should return correct value', () => {
    expect(cesar.cesar('bcdef', 0)).toBe('abcde');
});

test('should return non latin letter symbol', () => {
    expect(cesar.cesar('!абвгд@ %90', 1)).toBe('!абвгд@ %90');
});
