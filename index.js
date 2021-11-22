#! /usr/bin/env node
const { pipeline } = require("stream");
const { utils } = require("./utils");
const fs = require("fs");
const { cipherStreamsChain } = require("./streams.js");

function runingCode() {
    if (utils.isConfigDoubling()) {
        utils.snowError("Error: There is a doubling config options.");
      }
      
      const inputPath = utils.getFilePath("-i");
      const outputPath = utils.getFilePath("-o");
      
      if (!process.argv.includes("-i") || !process.argv.includes("-o")) {
            utils.snowError("Error: Wrong input/output config. Please check flags value.");
          }
      
      /* if (!inputPath) {
        inputPath = process.stdin;
      }
      
      if (!outputPath) {
        outputPath = process.stdout;
      } */
      
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
        utils.snowError("Error: Wrong ciphering config. Please check flag value.");
      }
}

runingCode();
module.exports.index = { runingCode }
