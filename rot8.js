export function rot(str, action) {
    action = +action[1];
    const alphUpper = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=65);
    const alphLower = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97);
    const alphabetArray = alphUpper.concat(alphLower).split('');
    const strArray = str.split('');
    let result = [];

    if (action === 1) {
        strArray.map((letter) => {
            if (alphabetArray.includes(letter)) {
                result.push(alphabetArray[alphabetArray.indexOf(letter) + 8]);
            } else {
                result.push(letter);
            }
        });
    }

    if (action === 0) {
        strArray.map((letter) => {
            if (alphabetArray.includes(letter)) {
                result.push(alphabetArray[alphabetArray.indexOf(letter) - 8]);
            } else {
                result.push(letter);
            }
        });
    }

    return result.join('');
}
