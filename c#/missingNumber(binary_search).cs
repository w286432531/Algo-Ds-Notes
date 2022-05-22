public class Solution {
    public int MissingNumber(int[] nums) {
        Array.Sort(nums);
        int low = 0;
        int high = nums.Length;
        int mid = 0;
        while (low < high) {
            //think about lower bound or upper bound to +1 or not
            mid = low + (high - low) /2;
            //think about the line above logic below is related to upper bound or lower bound
            if (nums[mid] > mid) {
                //think about if mid is the possible answer
                //for this problem mid might be possible so high = mid
                //when mid is in upper bound high = mid -1
                high = mid;
            } else {
                //low is not a possible answer so low +1
                //when mid is in middle bound mid + 1
                low = mid + 1;
            }
        }
        return low;
    }
}