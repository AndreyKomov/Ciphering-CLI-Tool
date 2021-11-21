process.argv = ['-c', 'C1-C0-R0-A', '-i', 'input.txt', '-o', 'otput.txt'];
const { expect } = require("@jest/globals");
const index = require("../index");
const { utils } = require("../utils");

test('should return error message about doubling config argument', () => {
    process.argv = ['-c', 'C1', '-c'];
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockStderr = jest.spyOn(process.stderr, 'write');
    index.index.runingCode();
    utils.snowError('Error message!');
    expect(mockStderr).toHaveBeenCalledWith('Error message!\n');
    expect(utils.isConfigDoubling).toHaveBeenCalled;
    expect(mockExit.write).toHaveBeenCalled;
});

test('should return error message about doubling config argument', () => {
    process.argv = ['C1', ];
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const mockStderr = jest.spyOn(process.stderr, 'write');
    index.index.runingCode();
    utils.snowError('Error message!');
    expect(mockStderr).toHaveBeenCalledWith('Error message!\n');
    expect(utils.isConfigDoubling).toHaveBeenCalled;
    expect(mockExit.write).toHaveBeenCalled;
});
