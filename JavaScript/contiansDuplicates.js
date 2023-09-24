/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // First Approach
  //   const sortedNums = nums.sort((a, b) => a - b);
  //   for (let i in sortedNums) {
  //     const num = Number(i);
  //     if (sortedNums[i] === sortedNums[num+ 1]) {
  //       return true;
  //     }
  //     return false;
  //   }

  //Second Approach
  //   if (nums.length === 0 || nums.length === 1) return false;

  //   const checkNum = [];
  //   for (let num of nums) {
  //     if (checkNum.indexOf(num) !== -1) {
  //       return true;
  //     }
  //     checkNum.push(num);
  //   }
  //   return false;

  //Third Approach
  if (nums.length === 0 || nums.length === 1) return false;

  const checkNum = new Set();
  for (let num of nums) {
    if (checkNum.has(num)) {
      return true;
    }
    checkNum.add(num);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
