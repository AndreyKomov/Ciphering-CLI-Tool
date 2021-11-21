module.exports.cesar = (str, action) => {
  action = +action;
  const alphUpper = [...Array(26)].reduce(
    (a) => a + String.fromCharCode(i++),
    "",
    (i = 65)
  );
  const alphLower = [...Array(26)].reduce(
    (a) => a + String.fromCharCode(i++),
    "",
    (i = 97)
  );
  const alphabetArray = alphUpper.concat(alphLower).split("");
  const strArray = str.split("");
  let result = [];

  if (action === 1) {
    strArray.map((letter) => {
      if (alphabetArray.includes(letter)) {
        if (letter === "z") {
          result.push("a");
        } else if (letter === "Z") {
          result.push("A");
        } else {
          result.push(alphabetArray[alphabetArray.indexOf(letter) + 1]);
        }
      } else {
        result.push(letter);
      }
    });
  }

  if (action === 0) {
    strArray.map((letter) => {
      if (alphabetArray.includes(letter)) {
        if (letter === "a") {
          result.push("z");
        } else if (letter === "A") {
          result.push("Z");
        } else {
          result.push(alphabetArray[alphabetArray.indexOf(letter) - 1]);
        }
      } else {
        result.push(letter);
      }
    });
  }

  return result.join("");
};
