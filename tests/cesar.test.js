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

test('should return correct values from end of alphabet', () => {
    expect(cesar.cesar('Z', 1)).toBe('A');
    expect(cesar.cesar('z', 1)).toBe('a');
    expect(cesar.cesar('A', 0)).toBe('Z');
    expect(cesar.cesar('a', 0)).toBe('z');
});
