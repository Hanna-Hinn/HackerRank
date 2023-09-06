/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Get the number of rows and columns in the matrix
  const rows = matrix.length;
  const cols = matrix[0].length;

  // if there are no rows or columns
  // return false
  if (rows === 0 || cols === 0) {
    return false;
  }
  // If there is only one element in the matrix
  // check if it's the target
  if (rows === 1 && cols === 1) {
    return matrix[0][0] === target;
  }

  // Initalize left and right pointers to the start and end of the matrix
  let left = 0;
  let right = rows * cols - 1;

  // Run a binary serach loop unitl left is greater than right
  while (left <= right) {
    // Caculate the mid index
    // and get corresponding value in the matrix 
    let mid = Math.floor((right + left) / 2);
    let midVal = matrix[Math.floor(mid / cols)][mid % cols];

    // if mid value is target return true
    if (midVal === target) {
      return true;
    }

    // if mid value is greater than target, move right pointer to mid - 1
    if (midVal > target) {
      right = mid - 1;
    }
    // if mid value is less than target then move left to mid + 1
    else {
      left = mid + 1;
    }
  }
  // If the loop ended without finding target then return false
  return false;
};

