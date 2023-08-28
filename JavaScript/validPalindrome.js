/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (phrase) {
  // change characters to lower case then remove any non alphanumeric characters
  let str = phrase.toLowerCase().replace(/[^a-z0-9]/gi, "");
  // 2 pointers one at the start of the string
  // one at the end of the string
  let pointer1 = 0;
  let pointer2 = str.length - 1;
  // loop through the string
  // check if character at pointer1 === character at pointer2
  // if not return false
  while (pointer1 < pointer2) {
    if (str[pointer1] !== str[pointer2]) {
      return false;
    }
    pointer1++;
    pointer2--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
console.log(isPalindrome(".a"));
