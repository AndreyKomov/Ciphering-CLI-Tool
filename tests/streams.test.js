const { expect } = require("@jest/globals");
const { stderr } = require("process");
const streams = require("../streams");

test ('should return streams array', () => {
    process.argv = ['-c', 'C1-C0-R0-A'];
    expect(streams.cipherStreamsChain.cipherStreamsChain()).toBeTruthy;
})

test ('should return cesar stream', () => {
    process.argv = ['-c', 'C1-C0-R0-A'];
    expect(streams.cipherStreamsChain.cipherStreamsChain().length).toBe(4);
})

test ('should return cesar stream', () => {
    process.argv = ['-c', 'B'];
    expect(streams.cipherStreamsChain.cipherStreamsChain()).toEqual([]);
    expect(console.log).toHaveBeenCalled;
})
