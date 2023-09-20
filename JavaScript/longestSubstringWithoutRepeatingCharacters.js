/**
 * @param {string} s
 * @return {number}
 * Summary: Given a string str, find the length
 *          of the longest substring
 *          without repeating characters.
 *
 * Description: 1.) Initialize a window(Array), left pointer(number), result(number)
 *              2.) loop through the given input string
 *              3.) loop through the window
 *                  (the Array where the substring are stored)
 *              4.) if the character already exits in the window
 *                  then remove it and increment left pointer
 *                  to remove the duplicate character
 *              5.) if the character does not exit in the window
 *                  then add it to the window and check if the
 *                  length of the substring increased
 *              6.) return the length of the window (longest substring)
 *
 * time complexity: o(n)
 * space complexity: o(n)
 */
var lengthOfLongestSubstring = function (str) {
  const window = new Set();
  //   const window = [];
  let result = 0;
  let left = 0;

  if (str.length === 0) return 0;
  if (str.length === 1) return 1;

  for (let i in str) {
    // while (window.indexOf(str[i]) !== -1) {
    while (window.has(str[i])) {
      //   window.delete(str[left]);
      window.delete(str[left]);
      left++;
    }
    // window.add(str[i]);
    window.add(str[i]);
    result = Math.max(result, i - left + 1);
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("w"));
console.log(lengthOfLongestSubstring("wrtqs"));
console.log(lengthOfLongestSubstring("wrqwwwqqerqqwerr"));
