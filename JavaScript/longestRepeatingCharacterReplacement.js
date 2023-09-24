/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 
 * Summary: Returns the length of the longest substring
 * containing the smae letter you can get after on choice 
 * changing any character to any other uppercase english     
 * character.
 *
 * Description: The function use the sliding window concept
 *  1.) we make a hash map that will contain each character 
 *      and the frequencies in it.
 *  2.) Then we start to check if the length of the window (right - left + 1 )
 *      minus the max frequency character is lower 
 *      or equal to k which means that we can change the low freq
 *      characters in the window to make a valid substring
 *  3.) If the previous condition happens we check if the length
 *      is higher than the saved result(max length) then we make the result
 *      the new high length.
 */
var characterReplacement = function (str, k) {
    let count = {};
    let res = 0;
    let left = 0;
    let maxFreq = 0;

    if(str.length ===0 ) return res;

    for (let right = 0; right < str.length; right++) {
        count[str[right]] = 1 + (count[str[right]] || 0);
        maxFreq = Math.max(maxFreq, count[str[right]]);

        while ((right - left + 1) - maxFreq > k) {
            count[str[left]] -= 1;
            left += 1;
        }

        res = Math.max(res, right - left + 1);
    }

    return res;
};