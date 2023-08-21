/**
 * @param {number[]} nums
 * @return {number[][]}
 * time Complexity --> O(n^2)
 * Space Complexity --> O(n) or O(1) “depends on the sorting algorithm” (I searched the web to see whats the space complexity for the sort algorithm in Javascript i got confusing answers where some say o(1) and others say o(n))
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    // Loop nums in the index and value
    for (let index = 0; index < nums.length; index++) {
        let value = nums[index];


        // We do not wanna use the same value twice
        // So when we have the same value we just
        // continue with the loop
        if (index > 0 && value === nums[index - 1]) {
            continue;
        }

        // Left and Right pointers
        let left = index + 1;
        let right = nums.length - 1;


        while (left < right) {
            let threeSum = value + nums[left] + nums[right];

            if (threeSum > 0) {
                right--;
            } else if (threeSum < 0) {
                left++;
            } else {
                res.push([value, nums[left], nums[right]]);
                left++;
                // If we have duplicated value near each other
                // we add the left side
                // For example: [-2,-2,0,0,2,2]
                // In this case it will move the right pointer
                // and not shift the left pointer
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return res;
};

