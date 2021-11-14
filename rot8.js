module.exports.rot = (str, action) => {
    action = +action;
    const alphUpper = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=65);
    const alphLower = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97);
    const alphabetArray = alphUpper.concat(alphLower).split('');
    const strArray = str.split('');
    let result = [];

    if (action === 1) {
        strArray.map((letter) => {
            if (alphabetArray.includes(letter)) {
                if (17 > alphabetArray.indexOf(letter) && alphabetArray.indexOf(letter) < 26) {
                    result.push(alphabetArray[(alphabetArray.indexOf(letter) + 7) - 25]);
                  }
                if (43 > alphabetArray.indexOf(letter) && alphabetArray.indexOf(letter) < 52) {
                    result.push(alphabetArray[(alphabetArray.indexOf(letter) + 7) - 51]);
                  }
                result.push(alphabetArray[alphabetArray.indexOf(letter) + 8]);
            } else {
                result.push(letter);
            }
        });
    }

    if (action === 0) {
        strArray.map((letter) => {
            if (alphabetArray.includes(letter)) {
                if (alphabetArray.indexOf(letter) < 8) {
                    result.push(alphabetArray[alphabetArray.indexOf(letter) + 18]);
                  }
                if ( alphabetArray.indexOf(letter) > 25 && alphabetArray.indexOf(letter) < 34) {
                    result.push(alphabetArray[(alphabetArray.indexOf(letter) + 7) + 18]);
                  }
                result.push(alphabetArray[alphabetArray.indexOf(letter) - 8]);
            } else {
                result.push(letter);
            }
        });
    }

    return result.join('');
}
