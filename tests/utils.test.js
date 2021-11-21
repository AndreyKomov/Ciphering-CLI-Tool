const { expect } = require('@jest/globals');
const { exec } = require('child_process');
const { stderr } = require('process');
const utils = require('../utils');

test('should return next item from array', () => {
    process.argv = ['-flag', 'item'];
    expect(utils.utils.grab('-flag')).toBe('item');
});

test('should return file path', () => {
    process.argv = ['-flag', 'filePath'];
    expect(utils.utils.getFilePath('-flag')).toBe('./filePath');
});

test('should return error message text', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockStderr = jest.spyOn(process.stderr, 'write');
    utils.utils.snowError('Error message!');
    expect(mockStderr).toHaveBeenCalledWith('Error message!\n');
    expect(mockExit.write).toHaveBeenCalled;
});
