//xor solution
var missingNumber = function (nums) {
  //res = nums.length because the last number is not included in i but is included in nums.  
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    //comparing numbers
    res = res ^ i;
    res = res ^ nums[i];
  }
  //get the difference
  return res;
};

// public class Solution {
//     public int MissingNumber(int[] nums) {
//         Array.Sort(nums);
//         int low = 0;
//         int high = nums.Length;
//         int mid = 0;
//         while (low < high) {
//             mid = low + (high - low) /2;
//             if (nums[mid] > mid) {
//                 high = mid;
//             } else {
//                 low = mid + 1;
//             }
//         }
//         return low;
//     }
// }