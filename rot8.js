module.exports.rot = (str, action) => {
    action = +action;
    const alphUpper = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=65);
    const alphLower = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97);
    const alphabetArray = alphUpper.concat(alphLower).split('');
    const strArray = str.split('');
    let result = [];

    if (action === 1) {
        strArray.forEach((letter) => {
            let letterIndex = alphabetArray.indexOf(letter);
            if (alphabetArray.includes(letter)) {
/*                 switch(letterIndex) {
                    case (17 < letterIndex && letterIndex < 26):
                        result.push(alphabetArray[(alphabetArray.indexOf(letter) + 7) - 25]);
                        break;
                    case 43 < letterIndex && letterIndex < 52:
                        result.push(alphabetArray[(alphabetArray.indexOf(letter) + 7) - 51]);
                        break;
                    default:
                        result.push(alphabetArray[alphabetArray.indexOf(letter) + 8]);
                } */
                if (17 < letterIndex && letterIndex < 26) {
                    result.push(alphabetArray[(letterIndex + 7) - 25]);
                  } else if (43 < letterIndex && letterIndex < 52) {
                    result.push(alphabetArray[(letterIndex + 7) - 25]);
                  } else {
                    result.push(alphabetArray[letterIndex + 8]);
                  }
            } else {
                result.push(letter);
            }
        });
    }

    if (action === 0) {
        strArray.forEach((letter) => {
            let letterIndex = alphabetArray.indexOf(letter);
            if (alphabetArray.includes(letter)) {
                if (letterIndex < 8) {
                    result.push(alphabetArray[letterIndex + 18]);
                  } else if ( letterIndex > 25 && letterIndex < 34) {
                    result.push(alphabetArray[letterIndex + 18]);
                  } else {
                    result.push(alphabetArray[alphabetArray.indexOf(letter) - 8]);
                  }
            } else {
                result.push(letter);
            }
        });
    }

    return result.join('');
}
