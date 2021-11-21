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
    // process.argv = ['-flag', 'filePath'];
    // const mockProcess = jest.spyOn(process, 'exit');
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockStderr = jest.spyOn(process.stderr, 'write');
    utils.utils.snowError('Error message!');
    expect(mockStderr).toHaveBeenCalledWith('Error message!\n');
    expect(mockExit.write).toHaveBeenCalled;
});

/* 'node ./src/index.js -c C1-C1-A-R0 -c C0',
      (error, stdout, stderr) => {
        expect(stderr).toEqual('argument -c is doubled!\n');
        callback();
      } */
