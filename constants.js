const FLAGS = {
    cipherConfig: '-c',
    inputFile: '-i',
    outputFile: 'o',
}

const PATHES = {
    inputFilePath: './input.txt',
    outputFilePath: '.output.txt',
}

function testing() {
    console.log('all is ok');
}

module.exports.constants = { FLAGS, PATHES, testing }
