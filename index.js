#! /usr/bin/env node
const { pipeline } = require("stream");
const { utils } = require("./utils");
const fs = require("fs");
const { cipherStreamsChain } = require("./streams.js");

if (!process.argv.includes("-i") || !process.argv.includes("-o")) {
    utils.snowError("Wrong input/output config. Please check flags value.");
}

const inputPath = utils.getFilePath("-i");
const outputPath = utils.getFilePath("-o");

if (!inputPath) {
    inputPath = process.stdin;
}

if (!outputPath) {
    outputPath = stdout;
}

if (process.argv.includes("-c")) {
  pipeline(
    fs.createReadStream(inputPath),
    ...cipherStreamsChain.cipherStreamsChain(),
    fs.createWriteStream(outputPath),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
} else {
  utils.snowError("Wrong ciphering config. Please check flag value.");
}
