
def longest_repeating_character_replacement(strs, k):
    count = {}
    res = 0

    left = 0
    maxFreq = 0
    for right in range(len(strs)):
        count[strs[right]] = 1 + count.get(strs[right], 0)
        maxFreq = max(maxFreq, count[strs[right]])

        while (right - left + 1) - maxFreq > k:
            count[strs[left]] -= 1
            left += 1

        res = max(res, right - left + 1)
    return res

    