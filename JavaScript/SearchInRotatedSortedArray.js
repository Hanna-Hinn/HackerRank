/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
var search = function (numbers, target) {
  // Corner Cases
  if ( numbers.length === 0 ){
    return -1;
  }

  // defining the pointers
  let left = 0;
  let right = numbers.length - 1;

  // loop through the numbers
  while (left <= right) {
    // defining mid index for each iteration
    let mid = Math.floor((left + right) / 2);

    // If the mid is the target then return it
    if (target === numbers[mid]) {
      return mid;
    }
    // Search left sorted portion
    if (numbers[left] <= numbers[mid]) {
      if (target > numbers[mid] || target < numbers[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      // Search right sorted portion
    } else {
      if (target < numbers[mid] || target > numbers[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  // If the loop finishes then the target was not found
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
