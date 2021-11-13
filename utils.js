const fs = require("fs");

const grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
  };

const getFilePath = (flag) => {
  return './' + grab(flag);
}

  const getInput = (value) => {
    return value
      ? fs.readFileSync(value, "utf-8", (err, data) => {
          if (err) {
            console.log(`An error has occured ${err}`);
            process.exit(1);
          }
          return data;
        })
      : process.stdin;
  };

  module.exports.utils = { grab, getInput, getFilePath }
  