class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arr = []
        sumArr = 0
        for num in nums:
            sumArr += num
            arr.append(sumArr)
        return arr