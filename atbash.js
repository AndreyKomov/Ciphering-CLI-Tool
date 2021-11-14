module.exports.atbash = (str) => {
    const numberOfLetters = 26;
    const lastLetterIndex = 51;
    const alphUpper = [...Array(numberOfLetters)].reduce(a=>a+String.fromCharCode(i++),'',i=65);
    const alphLower = [...Array(numberOfLetters)].reduce(a=>a+String.fromCharCode(i++),'',i=97);
    const alphabetArray = alphUpper.concat(alphLower).split('');
    // const reverseAlphabet = alphabetArray.reverse();
    const strArray = str.split('');
    let result = [];
    strArray.forEach(letter => {
        if (alphabetArray.includes(letter)) {
            const letterIndex = alphabetArray.indexOf(letter);
            if (letterIndex < numberOfLetters) {
                result.push(alphabetArray[25 - letterIndex]);
            } else {
                result.push(alphabetArray[lastLetterIndex - letterIndex + numberOfLetters]);
            }    
        } else {
            result.push(letter);
        }
    });
    return result.join('');
}
