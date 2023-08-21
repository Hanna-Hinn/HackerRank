public class RemoveDuplicatesfromSortedArray {
    public int removeDuplicates(int[] nums) {
        int n = nums.length;
        int j = 0;

        for (int i = 0; i < n; i++) {
            if (i < n - 1 && nums[i] == nums[i + 1]) {
                continue;
            }

            nums[j++] = nums[i];
        }

        return j;
    }
}
