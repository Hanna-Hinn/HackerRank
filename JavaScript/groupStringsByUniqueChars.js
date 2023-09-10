function groupStringsByUniqueChars(strings) {
  /**
   *  @param {List} strings
   *  @return {List<dict>}
   *
   *  for each string in strings
   *      fill each char in char array
   *          --> if the char exists then do not push it,
   *          --> otherwise add it to the charArr
   *
   *       add Word to the corresponding unique number of chars
   *       in the mapping
   *       add it to the list.
   */
  const result = [];
  const map = {};

  if (strings.length === 0) {
    return result;
  }

  for (const word of strings) {
    const charArr = [];
    // const charArr = word.match(/([a-z])(?!.*\1)/g); [returns a unique array of characters]
    for (const char of word) {
      if (char.match(/[a-zA-Z]+/g) && charArr.indexOf(char) === -1) {
        charArr.push(char);
      }
    }
    const uniqueChar = charArr.length;
    if (!map[uniqueChar]) {
      map[uniqueChar] = [word];
    } else {
      map[uniqueChar].push(word);
    }
  }
  for (const [key, value] of Object.entries(map)) {
    if (key != 0) {
      result.push({ [key]: value });
    }
  }
  return result;
}

console.log(
  groupStringsByUniqueChars([
    "ap ple",
    "ban%ana",
    "cat$",
    "dog",
    "elephant",
    "frog",
    "@#$!@#%@#",
  ])
);
