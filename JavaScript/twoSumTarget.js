function twoSum(integers, target) {
  var obj = {};

  if (integers.length < 2) {
    return [];
  }

  if (integers.length === 2) {
    if (integers[0] + integers[1] === target) {
      return [0, 1];
    }
    return [];
  }
  for (var i = 0; i < integers.length; i++) {
    var diff = target - integers[i];
    if (obj[diff] !== undefined && obj[diff] !== i) {
      return [i, obj[diff]];
    } else {
      obj[integers[i]] = i;
    }
  }
  return [];
}

/**
 *  [ 1, 2, 3 ] // target = 3
 *  hash = { 1:0, 2:1, 3:2}
 *  difference = 3 - 1 (i = 0) ==> does it exist in the hash (2 exists)
 *  if exists returns 0 , 1
 */

console.log(twoSum([-1, 1], 0));
console.log(twoSum([], 0));
console.log(twoSum([1], 1));
console.log(twoSum([1, 2, 4], 2));
console.log(twoSum([1, 2, 4], 6));
console.log(twoSum([1, 2, 3, 4], 5));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-5, 10, 20, -10, 1, 4, 5], 5));
console.log(twoSum([1, -5, 4, -10, 1, 15], -15));
