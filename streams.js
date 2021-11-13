const { Transform } = require("stream");
const { cesar } = require("./cesar");
const { atbash } = require("./atbash");
const { rot } = require("./rot8");
const { utils } = require("./utils");
const { constants } = require("./constants");

function cipherStreamsChain() {
  const cipheringConfig = utils.grab(constants.FLAGS.cipherConfig);
  const configListArr = cipheringConfig.split("-");
  let cipheringChainArray = [];
  configListArr.forEach((cipherType) => {
    switch (cipherType[0]) {
      case "C":
        cipheringChainArray.push(
          new Transform({
            transform(chunk, encoding, callback) {
              this.push(cesar(chunk.toString(), cipherType[1]));
              callback();
            },
          })
        );
        break;
      case "A":
        cipheringChainArray.push(
          new Transform({
            transform(chunk, encoding, callback) {
              this.push(atbash(chunk.toString()));
              callback();
            },
          })
        );
        break;
      case "R":
        cipheringChainArray.push(
          new Transform({
            transform(chunk, encoding, callback) {
              this.push(rot(chunk.toString(), cipherType[1]));
              callback();
            },
          })
        );
        break;
      default:
        (err) => {
          console.log(err);
        };
    }
  });
  return cipheringChainArray;
};

module.exports.cipherStreamsChain = { cipherStreamsChain }
