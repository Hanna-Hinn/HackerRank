import java.util.Arrays;

class Solution {
    public int findKthLargest(int[] nums, int k) {

        int[] set = nums;
        Arrays.sort(set);

        return set[set.length - k];
    }
}