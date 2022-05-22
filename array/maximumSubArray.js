//brute force
var maxSubArray = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      max = Math.max(max, currentSum);
    }
  }
  return max;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
