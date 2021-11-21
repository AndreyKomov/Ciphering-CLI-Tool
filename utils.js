const fs = require("fs");

const grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
  };

const getFilePath = (flag) => {
  return './' + grab(flag);
}



  const snowError = (value) => {
    process.stderr.write(value + '\n');
    process.exit(1);
  }

  const isConfigDoubling = () => {
    let result = [];
    process.argv.forEach((el) => {
      if (el === '-c') {
        result.push('double');
      }
    });
    if (result.length >= 2) {
      return true;
    }
  }

  module.exports.utils = { grab, /* getInput, */ getFilePath, snowError, isConfigDoubling }
  