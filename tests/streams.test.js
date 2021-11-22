const { expect } = require("@jest/globals");
const { stderr } = require("process");
const { Transform } = require("stream");
const streams = require("../streams");
const cesar = require('../cesar');

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

test ('should return cesar stream', () => {
    process.argv = ['-c', 'C1'];
    // const mockTransform = jest.spyOn(Transform._transform, 'method').mockImplementation(() => {});

    const mockTransform = new Transform();
    const result = mockTransform.push(cesar.cesar('This is secret. Message about "_" symbol!', 1));
    // console.log(streams.cipherStreamsChain.cipherStreamsChain());
    streams.cipherStreamsChain.cipherStreamsChain();
    expect(result).toBe(true);
})
