#! /usr/bin/env node
const { cesar } = require("./cesar.js");
const { Flags } = require("./constants");
const { utils } = require("./utils");



const cipherConfigValue = utils.grab(Flags.FLAGS.cipherConfig);
console.log(
    cesar(utils.getInput('./input.txt'), cipherConfigValue)
    );
