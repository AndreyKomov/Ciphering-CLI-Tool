const { expect } = require('@jest/globals');
const rot = require('../rot8');

test('should return correct value', () => {
    expect(rot.rot('AaZzo', 1)).toBe('IiHhw');
});