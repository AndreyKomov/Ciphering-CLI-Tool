const { expect } = require('@jest/globals');
const rot = require('../rot8');

test('should return correct value', () => {
    expect(rot.rot('AaZzo', 1)).toBe('IiHhw');
});

test('should return correct value after decoding', () => {
    expect(rot.rot('DdFeI', 0)).toBe('VvXwA');
});

test('should return non latin letter symbol without changing', () => {
    expect(rot.rot('!абвгд @()()90%', 0)).toBe('!абвгд @()()90%');
});

