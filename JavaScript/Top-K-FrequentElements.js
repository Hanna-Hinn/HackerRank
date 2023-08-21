/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // Object that will save each number as key
    // and the frequencies of that number as a value
    // Ex: nums = [1,1,1,2,2,3] k =2
    // freq = { '1' : 3 , '2' : 2 , '3' : 1 }
    let freq = {};
   
    // looping throught the nums array and filling the freq
    for (let num of nums) {
        if (!freq[num] && freq[num] !== 0) {
            freq[num] = 0;
        } else {
            freq[num] += 1;
        }
    }

    // First we fetch the keys of the freq Object. Ex: [1,2,3] --> Keys of the object
    // Then we sort them based on the frequenecy of each key. Ex: [1,2,3] --> Sorting the keys based on their value in object
    // Since we need the top K frequent we can slice the array 0 - K which are the top sorted elements.
    return Object.keys(freq).sort((a, b) => freq[b] - freq[a]).slice(0, k);
};
